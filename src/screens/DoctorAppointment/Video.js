import React from "react";
import { View, StyleSheet } from 'react-native';
import { MediaStream, RTCView } from "react-native-webrtc";
import { CallButton } from "./CallButton";

function ButtonContainer(props){
    return(
        <View style={styles.bcontainer}>
            <CallButton iconname="phone" backgroundColor="red" onPress={props.hangup}/>
        </View>
    );
}

export function Video(props){
    // on call we will just display the local stream
    if(props.localStream && !props.remoteStream){
        // console.log("LocalStream in 1");
        // console.log(props.localStream);
        // console.log("RemoteStream in 1");
        // console.log(props.remoteStream)
        return(
            <View style={styles.container}>
                <RTCView
                    streamURL={props.localStream.toURL()}
                    objectFit={'cover'}
                    style={styles.video}
                />
                <ButtonContainer hangup={props.hangup}/>
            </View>
        );
    }
    // once the call is connected we will display local stream on top of remote stream
    if(props.localStream && props.remoteStream){
        // console.log("LocalStream in 2");
        // console.log(props.localStream);
        // console.log("RemoteStream in 2");
        // console.log(props.remoteStream)
        return(
            <View style={styles.container}>
                <RTCView
                    streamURL={props.remoteStream.toURL()}
                    objectFit={'cover'}
                    style={styles.video}
                />
                <RTCView
                    streamURL={props.localStream.toURL()}
                    objectFit={'cover'}
                    style={styles.videoLocal}
                />
                <ButtonContainer hangup={props.hangup}/>
            </View>
        );
    }
    return(
        <ButtonContainer hangup={props.hangup}/>
    );
};

const styles = StyleSheet.create({
    bcontainer:{
        flexDirection:"row",
        bottom:"10%"
    }, 
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    video:{
        position:"absolute",
        width:"100%",
        height:"100%",
    },
    videoLocal:{
        position:"absolute",
        width:100,
        height:150,
        top:0,
        left:20,
        elevation:10,
    }
});