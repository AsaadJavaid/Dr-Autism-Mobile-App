import { View, Text, Pressable, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Detection = () => {
    const fileUpload = () => {
        Alert.alert("Upload File")
    }
  return (
    <ScrollView style = {{backgroundColor : "#D6EFED"}}>
        <View style = {{flex : 1, alignItems : "center"}}>
            <ImageBackground source= {require('../../../assets/images/main/imageDET.webp')} style ={{height : 200, width : "100%"}}/>
        </View>
        <View style = {{alignItems : "center", marginTop : 30}}>
            <TouchableOpacity onPress = {fileUpload}>
                <View style = {{height : 200, width : 165, backgroundColor : "yellow", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
                <ImageBackground source= {require('../../../assets/images/highlight/detection.webp')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
                <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Upload-File</Text>
                </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Detection