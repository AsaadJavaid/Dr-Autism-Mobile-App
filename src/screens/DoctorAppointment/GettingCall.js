import React from "react";
import {View, StyleSheet, Image} from 'react-native';
import { CallButton } from "../DoctorAppointment/CallButton";

export function GettingCall(props){

    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/Avatars/1.jpg')} style={styles.image}/>
            <View style={styles.bcontainer}>
                <CallButton 
                    iconname="phone"
                    backgroundColor="green"
                    onPress={props.join}
                    style={{marginRight:"20%"}}
                />
                <CallButton 
                    iconname="phone"
                    backgroundColor="red"
                    onPress={props.hangup}
                    style={{marginLeft:"20%"}}
                />
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    image:{
        position:"absolute",
        width:"100%",
        height:"100%",
    },
    bcontainer:{
        flexDirection:"row",
        bottom:"10%",
    }
});