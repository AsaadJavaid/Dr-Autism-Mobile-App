import { View, Text, Alert, StyleSheet, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
// import { Auth } from "aws-amplify";
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import auth from '@react-native-firebase/auth';
// import Entypo from 'react-native-vector-icons/Entypo';



const DoctorHome = ({ navigation }) => {
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
          Alert.alert("Email already in use", error.message)
        }
      });

  }
  const seeAllPressed = () => {
    alert("see All pressed")
  }
  const touchOpac = () => {
    console.log("First Touchable opacity")
  }
  const profilePress = () => {
    navigation.navigate("Profile")
  }
  const appointmentRequest = () => {
    navigation.navigate("AppointmentRequest")
  }
  const discussionPanel = () => {
    navigation.navigate("Chat")
  }
  return (
    <ScrollView>
      <View style={styles.profileIcon}>
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 20 }}>
          <Pressable onPress={profilePress}>
            <ImageBackground source={require('../../assets/images/highlight/profile.jpg')} style={{ height: 80, width: 80 }} imageStyle={{ borderRadius: 50 }} />
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>



        <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 20, borderColor: "#16B3C0", marginBottom: 20, backgroundColor: "#B5EAEA" }}>
          <TextInput style={{ marginHorizontal: 20, color: "white" }} placeholder='Search.......'></TextInput>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#757575" }}>Autism Highlights</Text>
          <TouchableOpacity onPress={seeAllPressed}>
            <Text style={{ fontSize: 16, color: "#16B3C0" }}>see all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} >
          <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={{ height: 150, width: 150, backgroundColor: "black", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/one.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>
            <View style={{ height: 150, width: 150, backgroundColor: "#B3FFAE", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/two.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>
            {/* <View style={{ height: 150, width: 150, backgroundColor: "#FBFACD", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/three.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View> */}
            <View style={{ height: 150, width: 150, backgroundColor: "#CDFCF6", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/four.jpg')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>
            <View style={{ height: 150, width: 150, backgroundColor: "#FFEDDB", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/one.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>
            <View style={{ height: 150, width: 150, backgroundColor: "#B3FFAE", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/two.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>
            {/* <View style={{ height: 150, width: 150, backgroundColor: "#FBFACD", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/three.webp')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View> */}
            <View style={{ height: 150, width: 150, backgroundColor: "#CDFCF6", borderRadius: 20, alignContent: "center", alignItems: "center", marginRight: 20 }}>
              <ImageBackground source={require('../../assets/images/highlight/four.jpg')} style={{ height: 150, width: 150 }} imageStyle={{ borderRadius: 20, borderColor: "#16B3C0", borderWidth: 2 }} />
            </View>

          </View>

        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <TouchableOpacity onPress={appointmentRequest}>
            <View style={{ height: 200, width: 165, backgroundColor: "yellow", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/appointment.jpg')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Appointments</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={touchOpac}>
            <View style={{ height: 200, width: 165, backgroundColor: "pink", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/patient.png')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Patient</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <TouchableOpacity onPress={touchOpac}>
            <View style={{ height: 200, width: 165, backgroundColor: "#D989B5", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/setting.png')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={discussionPanel}>
            <View style={{ height: 200, width: 165, backgroundColor: "#D989B5", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/dp.jpg')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Discussion Panel</Text>
            </View>
          </TouchableOpacity>
          {/* style = {styles.containerButton} */}
          {/* <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("Chat")
              alert("chat button pressed")
            }}
            style={styles.chatButton}
          >
            <Entypo name="chat" size={50} color="#FFFFFF" />
          </TouchableOpacity>
        </View> */}
        </View>

        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <TouchableOpacity onPress={touchOpac}>
            <View style={{ height: 200, width: 165, backgroundColor: "#D989B5", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/setting.jpg')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={touchOpac}>
            <View style={{ height: 200, width: 165, backgroundColor: "#C47AFF", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/images/highlight/help.jpg')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Help</Text>
            </View>
          </TouchableOpacity>
        </View> */}

        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <TouchableOpacity onPress={discussionPanel}>
          <View style={{ height: 200, width: 165, backgroundColor: "#D989B5", borderRadius: 20, alignItems: "center", marginBottom: 30 }}>
            <ImageBackground source={require('../../../assets/images/highlight/dp.webp')} style={{ height: 200, width: 165 }} imageStyle={{ borderRadius: 20 }} />
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16B3C0" }}>Discussion Panel</Text>
          </View>
        </TouchableOpacity>

      </View> */}


        <View style={{ marginBottom: 20 }}>
          {/* <CustomButton text = "Sign Out" onPress = {handleSubmit(signOut)} /> */}
        </View>
      </View>
    </ScrollView>
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
    height: "12%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  }
})

export default DoctorHome