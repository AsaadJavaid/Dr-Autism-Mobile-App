import { View, Text, Alert, StyleSheet,Linking, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Auth } from "aws-amplify";
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo';



const HomeScreen = ({ navigation }) => {
  const [loding, setLoding] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();
  // const navigation = useNavigation();
  const signOut = async () => {

    auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn')
      })
      .catch(error => {
        if (error) {
          Alert.alert("☠ ●●ρs ☠", error.message)
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
  const touchOpac = () => {
    console.log("First Touchable opacity")
  }
  const doctorDesk = () => {
    navigation.navigate("DoctorDesk")
  }
  const profilePress = () => {
    navigation.navigate("Profile")
  }
  const detectionPage = () => {
    navigation.navigate("Detection")
  }
  const discussionPanel = () => {
    navigation.navigate("Chat")
  }
  const emotionEducation = () => {
    navigation.navigate("EmotionEducation")
  }
  const games = () => {
    navigation.navigate("GamesScreen")
  }
  const seeAllPressed = async () => {
    const url = 'https://www.cdc.gov/ncbddd/autism/facts.html'; // Replace with your desired URL
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        console.log(`Unable to open URL: ${url}`);
    }
};
  return (
    <View style={{backgroundColor: "white"}}>
      <View style={styles.profileIcon}>
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 20, backgroundColor: "#AAE3E2", borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, height: 90 }}>
          <Pressable style={{ marginTop: 5 }} onPress={profilePress}>
            <ImageBackground source={require('../../../assets/images/highlight/profile.jpg')} style={{ height: 80, width: 80 }} imageStyle={{ borderRadius: 50 }} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={{marginBottom : 120}}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
          <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 20, borderColor: "#16B3C0", marginBottom: 20, backgroundColor: "#B5EAEA" }}>
            <TextInput style={{ marginHorizontal: 20, color: "white" }} placeholder='Search.......'></TextInput>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#757575" }}>Autism Highlights</Text>
            <TouchableOpacity onPress={seeAllPressed}>
              <Text style={{ fontSize: 16, color: "#16B3C0" }}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} >
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-evenly" }}>

              <View style={{ height: 150, width: 150, backgroundColor: "black", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/one.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>

              <View style={{ height: 150, width: 150, backgroundColor: "#B3FFAE", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/two.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>

              <View style={{ height: 150, width: 150, backgroundColor: "#CDFCF6", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/four.jpg')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>

              <View style={{ height: 150, width: 150, backgroundColor: "#FFEDDB", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/one.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>

              <View style={{ height: 150, width: 150, backgroundColor: "#B3FFAE", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/two.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>

              <View style={{ height: 150, width: 150, backgroundColor: "#CDFCF6", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
                <ImageBackground source={require('../../../assets/images/highlight/four.jpg')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
              </View>
              
            </View>
          </ScrollView>

          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
            <TouchableOpacity onPress={detectionPage}>
              <View style={{
                height: 160,
                width: 355,
                backgroundColor: "#AAE3E2",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,
              }}>
                <ImageBackground
                  source={require('../../../assets/images/highlight/detection.jpg')}
                  style={{ height: 130, width: 355 }}
                  imageStyle={{ borderRadius: 20 }}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Detection</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
            <TouchableOpacity onPress={doctorDesk}>
                <View style={{
                  height: 200,
                  width: 355,
                  backgroundColor: "#AAE3E2",
                  borderRadius: 20,
                  alignItems: "center",
                  marginBottom: 30,
                  shadowColor: "black",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                  elevation: 10,
                }}>
                  <ImageBackground source={require('../../../assets/images/highlight/doctorOne.jpg')} style={{ height: 170, width: 355 }} imageStyle={{ borderRadius: 20 }} />
                  <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Doctor Desk</Text>
                </View>
              </TouchableOpacity>
          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
            <TouchableOpacity onPress={games}>
              <View style={{
                height: 190,
                width: 165,
                backgroundColor: "#AAE3E2",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,
              }}>
                <ImageBackground source={require('../../../assets/images/highlight/game.jpg')} style={{ height: 160, width: 165 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Games</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={emotionEducation}>
              <View style={{
                height: 190,
                width: 165,
                backgroundColor: "#AAE3E2",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,
              }}>
                <ImageBackground source={require('../../../assets/emosense.jpg')} style={{ height: 160, width: 165 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Emosense</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
            <TouchableOpacity onPress={discussionPanel}>
              <View style={{
                height: 250,
                width: 355,
                backgroundColor: "#AAE3E2",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,
              }}>
                <ImageBackground source={require('../../../assets/images/highlight/dp.jpg')} style={{ height: 220, width: 355 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Discussion Panel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: "#16B3C0",
    height: 200,
    width: 165,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 10,
    shadowRadius: 20,
  },
  profileIcon: {
    backgroundColor: "#16B3C0",
    width: "100%",
    height: "16%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  }
})

export default HomeScreen