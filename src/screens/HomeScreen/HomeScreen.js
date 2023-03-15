import { View, Text, Alert, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Auth } from "aws-amplify";
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import auth from '@react-native-firebase/auth';


const HomeScreen = ({navigation}) => {
  const [loding, setLoding] = useState(false);
    const {control, handleSubmit, formState : {errors}} = useForm();
    // const navigation = useNavigation();
  const signOut = async () => {

    auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn')
      })
      .catch(error => {
        if (error) {
          Alert.alert("Email already in use", error.message)
        }
      });
    // if (loding) {
    //         return;
    //     }
    //     setLoding(true);
    //     try{
    //         await Auth.signOut();
    //         Alert.alert("Success  ✅", "Signed Out");
    //     } catch(e) {
    //         Alert.alert("☠ ●●ρs ☠", e.message);
    //     }
    //     setLoding(false);
    
  } 
  const seeAllPressed = () => {
    Alert.alert("see All pressed")
  }
  const touchOpac = () => {
    console.log("First Touchable opacity")
  }
  const profilePress = () => {
    navigation.navigate("Profile")
  }
  const detectionPage = () => {
    navigation.navigate("Detection")
  }
  return (
      <ScrollView style = {{flex : 1 , backgroundColor : "white", padding : 20}}>
        <View style = {{flexDirection : "row", justifyContent : "space-between", marginBottom : 20}}>
          <Text style = {{fontWeight : "bold", fontSize : 16, marginVertical : 15}}>Hello, User</Text>
          <Pressable onPress = {profilePress}>
            <ImageBackground source= {require('../../../assets/images/welcomeScreen/avatar.jpg')} style ={{height : 50, width : 50}} imageStyle = {{borderRadius : 25}}/>
          </Pressable>
        </View>


        <View style = {{flexDirection : "row", borderWidth : 1, borderRadius : 20, borderColor : "#16B3C0", marginBottom : 20, backgroundColor : "#B5EAEA"}}>
          <TextInput style = {{marginHorizontal : 20, color : "white"}} placeholder='Search.......'></TextInput>
        </View>

        <View style = {{flexDirection : "row", justifyContent : "space-between", marginBottom : 20}}>
          <Text style = {{fontSize : 18, fontWeight : "bold", color : "#757575"}}>Autism Highlights</Text>
          <TouchableOpacity onPress={seeAllPressed}>
            <Text style = {{fontSize : 16, color :"#16B3C0"}}>see all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal = {true} >
          <View style = {{padding : 20, flexDirection : "row", justifyContent : "space-evenly"}}>
            <View style = {{height : 150, width : 150, backgroundColor : "black", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/one.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#B3FFAE", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/two.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#FBFACD", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/three.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#CDFCF6", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/four.jpg')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#FFEDDB", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/one.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#B3FFAE", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/two.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#FBFACD", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/three.webp')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
            <View style = {{height : 150, width : 150, backgroundColor : "#CDFCF6", borderRadius : 20, alignContent : "center", alignItems : "center", marginRight : 20}}>
                <ImageBackground source= {require('../../../assets/images/highlight/four.jpg')} style ={{height : 150, width : 150}} imageStyle = {{borderRadius : 20, borderColor : "#16B3C0", borderWidth : 2}}/>
            </View>
          </View>
        </ScrollView>
        
        <View style = {{flexDirection: "row",justifyContent : "space-between", marginTop : 20}}>
          <TouchableOpacity onPress = {detectionPage}>
            <View style = {{height : 200, width : 165, backgroundColor : "yellow", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/detection.webp')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Detection</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {touchOpac}>
            <View style = {{height : 200, width : 165, backgroundColor : "pink", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/doctorOne.jpg')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Doctor Desk</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection: "row",justifyContent : "space-between", marginTop : 20}}>
          <TouchableOpacity onPress = {touchOpac}>
            <View style = {{height : 200, width : 165, backgroundColor : "#D989B5", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/game.webp')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Games</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {touchOpac}>
            <View style = {{height : 200, width : 165, backgroundColor : "#C47AFF", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/voice.jpg')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Voice emotion</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection: "row",justifyContent : "space-between", marginTop : 20}}>
          <TouchableOpacity onPress = {touchOpac}>
            <View style = {{height : 200, width : 165, backgroundColor : "#D989B5", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/setting.jpg')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {touchOpac}>
            <View style = {{height : 200, width : 165, backgroundColor : "#C47AFF", borderRadius: 20, alignItems : "center", marginBottom : 30}}>
              <ImageBackground source= {require('../../../assets/images/highlight/help.jpg')} style ={{height : 200, width : 165}} imageStyle = {{borderRadius : 20}}/>
              <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Help</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = {{marginBottom : 20}}>
          {/* <CustomButton text = "Sign Out" onPress = {handleSubmit(signOut)} /> */}
        </View>
      </ScrollView>
  )
}

export default HomeScreen