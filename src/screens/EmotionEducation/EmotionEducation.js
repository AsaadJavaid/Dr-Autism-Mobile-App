import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Alert } from 'react-native';
import Sound from 'react-native-sound';



const EmotionEducation = ({navigation}) => {


  const angryScreen = () => {
    navigation.navigate("AngryEmotionScreen")
    //Alert.alert("Angry Pressed")
  }
  const happyScreen = () => {
    navigation.navigate("HappyEmotionScreen")
    //Alert.alert("Happy Pressed")
  }
  const disgustScreen = () => {
    navigation.navigate("DisgustEmotionScreen")
    //Alert.alert("Disgust Pressed")
  }
  const sadScreen = () => {
    navigation.navigate("SadEmotionScreen")
    //Alert.alert("Sad Pressed")
  }
  const fearScreen = () => {
    navigation.navigate("FearEmotionScreen")
    //Alert.alert("Fear Pressed")
  }
  const chitChatScreen = () => {
    navigation.navigate("MixEmotionScreen")
    //Alert.alert("ChitChat Pressed")
  }


  return (
    <View style={{ backgroundColor: "#E3F4F4" }}>
      <View style={styles.profileIcon}>
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 20, backgroundColor: "#AAE3E2", borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, height: 160, width: 350 }}>
          <ImageBackground source={require('../../../assets/Emotions/buttonIcons/topIcon.jpg')} style={{ height: 160, width: 350 }} imageStyle={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30 }} />
        </View>
      </View>



      <ScrollView style={{ marginBottom: 150 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
            <TouchableOpacity onPress={happyScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#D14D72",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/happy.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>Happy</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={sadScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#FFB319",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/sad.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>Sad</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
            <TouchableOpacity onPress={fearScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#C67ACE",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/fear.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>Fear</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={angryScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#1B9C85",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/angry.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>Angry</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
            <TouchableOpacity onPress={disgustScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#D68060",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/disgust.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>Disgust</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={chitChatScreen}>
              <View style={{
                height: 220,
                width: 170,
                backgroundColor: "#00BCD4",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 30,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 15,
              }}>
                <ImageBackground source={require('../../../assets/Emotions/buttonIcons/Mix.jpg')} style={{ height: 170, width: 170 }} imageStyle={{ borderRadius: 20 }} />
                <Text style={{ fontSize: 25, marginVertical: 5, fontWeight: "bold", color: "white" }}>ChitChat</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    backgroundColor: "#16B3C0",
    width: "100%",
    height: "23%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});

export default EmotionEducation;