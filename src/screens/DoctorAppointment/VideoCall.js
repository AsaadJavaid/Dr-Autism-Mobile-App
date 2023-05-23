import React, {useState, useRef, useEffect, useReducer, useContext} from "react";
import {View, StyleSheet,} from 'react-native';
import { CallButton } from '../DoctorAppointment/CallButton';
import { GettingCall } from "../DoctorAppointment/GettingCall";
import { Video } from "../DoctorAppointment/Video";
import { RTCPeerConnection, RTCIceCandidate, RTCSessionDescription} from "react-native-webrtc";
import { getStream } from "../DoctorAppointment/Utils";
import firestore from "@react-native-firebase/firestore";
import UserContext from "../../Context/UserContext";
import auth from '@react-native-firebase/auth';

const configuration= {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};

export function VideoCall({navigation, route}){

    const { setGetting, user } = useContext(UserContext);
    const [localStream, setLocalStream] = useState();
    const [remoteStream, setRemoteStream] = useState();
    const [gettingCall, setGettingCall] = useState(false);
    const pc = useRef();
    const connecting = useRef(false);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    let caller;
    let callee;
    // console.log("User is = ", user.uid)
    // if(route.params.iscaller){
    //     console.log("User is = ", user.uid)
    //     callee = route.params.email;
    //     if (auth().currentUser) {
    //         firestore()
    //           .collection('users')
    //           .doc(callee)
    //           .get()
    //           .then(documentSnapshot => {
    //             if (documentSnapshot.exists) {
    //               caller = documentSnapshot.data().uid
    //             }
    //           });
    //       }
    // }else{
    //     if (auth().currentUser) {
    //         firestore()
    //           .collection('users')
    //           .doc(auth().currentUser.uid)
    //           .get()
    //           .then(documentSnapshot => {
    //             if (documentSnapshot.exists) {
    //               callee = documentSnapshot.data().uid
    //             }
    //           });
    //       }
    //     caller = route.params.email;
    // }

    if(route.params.iscaller){
        callee = route.params.userId;
        caller = user.uid;
    }else{
        callee = user.uid;
        caller = route.params.userId;
    }

    useEffect(()=>{
        if(route.params.iscaller){
            console.log('Creating call')
            create();
        }
        console.log("running video call", callee, caller, route.params.iscaller);
        const cRef = firestore().collection('meet').doc(""+callee);
        const subscribe = cRef.onSnapshot(snapshot => {
            const data = snapshot.data();
            if(pc.current && !pc.current.remoteDescription && data && data.answer){
                const test = new RTCSessionDescription(data.answer)
                pc.current.setRemoteDescription(test);
            }
            // if there is a offer for chatid set the getting call flag
            if(data && data.offer && !connecting.current){
                setGettingCall(true);
            }
        });

        // on delete of collection call hangup
        // the other side has clicked on hangup

        const subscribeDelete = cRef.collection(""+callee).onSnapshot((snapshot)=>{
            snapshot.docChanges().forEach((change)=>{
                if(change.type == 'removed'){
                    hangup();
                }
            });
        });

        const subscribeDeleteDuringCall = cRef.collection(""+caller).onSnapshot((snapshot)=>{
            snapshot.docChanges().forEach((change)=>{
                if(change.type == 'removed'){
                    hangup();
                }
            });
        });

        return()=>{
            subscribe();
            subscribeDelete();
            subscribeDeleteDuringCall();
        };
    },[])
    
    const setupWebrtc = async () => {
        pc.current = new RTCPeerConnection(configuration);
        // Get the audio and video stream for the call 
        const stream = await getStream();
        stream.getTracks().forEach(track => {pc.current.addTrack(track, stream)})
        if (stream) {
            setLocalStream(stream);
        }
        // Get the remote stream once it is available 
        pc.current.ontrack = (event) => {
            setRemoteStream(event.streams[0]);
            forceUpdate();
        };
    }

    const create = async () => {
        connecting.current= true;
        // setup webrtc
        await setupWebrtc();
        // Document for the call
        console.log("Caller = ", caller, " Callee = ", callee)
        const cRef = firestore().collection("meet").doc(""+callee);
        // Exchange the ICE candidates between the caller and callee\ 
        collectIceCandidates(cRef, caller, callee);
        if (pc.current) {
            // Create the offer for the call 
            // Store the offer under the document 
            const offer = await pc.current.createOffer(); 
            pc.current.setLocalDescription(offer);
            const cWithOffer = {
                offer: {            
                    type: offer.type, 
                    sdp: offer.sdp,
                },
                caller: caller,
            };
            cRef.set(cWithOffer);
        }
    }
    const join = async () => {
        console.log("Joining the call");
        connecting.current = true;
        setGettingCall(false);

        const cRef = firestore().collection('meet').doc(""+callee);
        const offer = (await cRef.get()).data()?.offer;

        if(offer){
            // setup webrtc
            await setupWebrtc();
            //Exchange the ICE candidates
            // check the parameters, Its reversed since the joining part is callee
            collectIceCandidates(cRef, callee, caller);
        
            if(pc.current){
                const test = new RTCSessionDescription(offer)
                pc.current.setRemoteDescription(test);
                // create the answer for the call
                // update the document with the answer
                const answer = await pc.current.createAnswer();
                pc.current.setLocalDescription(answer);
                const cWithAnswer = {
                    answer: {
                        type: answer.type,
                        sdp: answer.sdp,
                    },
                };
                cRef.update(cWithAnswer);
            }
            forceUpdate();
        }
    }

    // For disconnecting the call close the connection, release the stream
    // and delete the document for the call

    const hangup = async () => {
        setGettingCall(false);
        connecting.current = false;
        streamCleanUp();
        firestoreCleanUp();
        if(pc.current){
            pc.current.close();
        }
        setGetting(null);
        if(user.role == "Doctor")
        {
            navigation.navigate("DoctorHome")
        }
    }

    const streamCleanUp = async () => {
        if(localStream){
            localStream.getTracks().forEach((t) => t.stop());
            localStream.release();
        }
        setLocalStream(null);
        setRemoteStream(null);
    }

    const firestoreCleanUp = async () => {
        const cRef = firestore().collection('meet').doc(""+callee);
        
        if(cRef){
            const calleeCandidate = await cRef.collection(""+callee).get();
            calleeCandidate.forEach( async (candidate)=>{
                await candidate.ref.delete();
            })
            const callerCandidate = await cRef.collection(""+caller).get();
            callerCandidate.forEach( async (candidate)=>{
                await candidate.ref.delete();
            })

            cRef.delete();
        }
    }

    const collectIceCandidates = async (cRef, localName, remoteName)=>{
        const candidateCollection = cRef.collection(localName);
        
        if (pc.current) {
        // On new ICE candidate add it to firestore 
            pc.current.onicecandidate = (event) => {
                if (event.candidate) {
                    candidateCollection.add(event.candidate);
                } 
            };
        }
    
        // Get the ICE candidate added to firestore and update the local PC 
        cRef.collection(remoteName).onSnapshot((snapshot) => { 
            snapshot.docChanges().forEach((change) => {
                if (change.type == 'added'){
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.current?.addIceCandidate(candidate);
                }
            });
        });
    }
    
    // Displays the gettingCall Component 
    if (gettingCall) {
        return <GettingCall hangup={hangup} join={join} />;
    }

    // Displays local stream on calling
    // Displays both local and remote stream once call is connected 
    if (localStream) {
        return (
            <Video 
                hangup={hangup}
                localStream={localStream} 
                remoteStream={remoteStream}
            /> 
        );
    }

    // Displays the call button

    return (
        <View style={styles.container}> 
            <CallButton iconname="video" backgroundColor="grey" onPress={create} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
});