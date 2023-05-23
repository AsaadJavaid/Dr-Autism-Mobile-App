import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";


export function CallButton(props){
    return(
        <View>
            <TouchableOpacity
                style={[{backgroundColor:props.backgroundColor}, styles.button]}
                onPress={props.onPress}
            >
                <Icon name={props.iconname} color="white" size={20}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
      width:60,
      height:60,
      padding:10,
      elevation:10,
      alignSelf:"center",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:100,
    },
});