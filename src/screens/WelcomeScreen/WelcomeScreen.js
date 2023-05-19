import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'
import second from "../../../assets/images/welcomeScreen/second.jpg"
import third from "../../../assets/images/welcomeScreen/third.jpg"
import fourth from "../../../assets/images/welcomeScreen/fourth.jpg"
import fifth from "../../../assets/images/welcomeScreen/fifth.jpg"
import sixth from "../../../assets/images/welcomeScreen/sixth.jpg"
import seventh from "../../../assets/images/welcomeScreen/seventh.jpg"
import eighth from "../../../assets/images/welcomeScreen/eighth.jpg"
import ninth from "../../../assets/images/welcomeScreen/ninth.jpg"
import tenth from "../../../assets/images/welcomeScreen/tenth.jpg"
import eleventh from "../../../assets/images/welcomeScreen/eleventh.jpg"
import CustomButton from '../../components/CustomButton'
import Logo2 from "../../../assets/images/Logo2.png"



const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const goToSignInPressed = () => {
    navigation.navigate('SignIn');
  }
  return (
    <View style={{ flex: 5, backgroundColor: "white" }}>
      <View style={{ flex: 0.5 }}>
        <Image
          source={Logo2}
          style={[styles.Logo, { height: height * 0.3 }]}
          resizeMode="center">
        </Image>
      </View>
      <Swiper style={styles.wrapper} showsPagination={false} showsButtons={false} loop={true} autoplay={true}>
        {/* <View style={styles.slide1}>
                    <Image style = {{height : "100%", width : "100%" }} source={welcome}></Image>
                </View> */}
        <View style={styles.slide1}>
          <Image style={{ height: "100%", width: "100%" }} source={second}></Image>
        </View>
        <View style={styles.slide2}>
          <Image style={{ height: "100%", width: "100%" }} source={third}></Image>
        </View>

        <View style={styles.slide3}>
          <Image style={{ height: "100%", width: "100%" }} source={fourth}></Image>
        </View>
        <View style={styles.slide4}>
          <Image style={{ height: "100%", width: "100%" }} source={fifth}></Image>
        </View>
        <View style={styles.slide5}>
          <Image style={{ height: "100%", width: "100%" }} source={sixth}></Image>
        </View>
        <View style={styles.slide6}>
          <Image style={{ height: "100%", width: "100%" }} source={seventh}></Image>
        </View>
        <View style={styles.slide8}>
          <Image style={{ height: "100%", width: "100%" }} source={eighth}></Image>
        </View>
        <View style={styles.slide9}>
          <Image style={{ height: "100%", width: "100%" }} source={ninth}></Image>
        </View>
        <View style={styles.slide10}>
          <Image style={{ height: "100%", width: "100%" }} source={tenth}></Image>
        </View>
        <View style={styles.slide11}>
          <Image style={{ height: "100%", width: "100%" }} source={eleventh}></Image>
        </View>
      </Swiper>
      <View>
        <CustomButton text="Proceed" onPress={goToSignInPressed} />
      </View>
      <View style={{ flex: 0.0 }}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 2
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    width: "100%",
    height: "100%"
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    width: "100%",
    height: "100%"
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide8: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide9: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide10: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  slide11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    width: "100%",
    height: "100%"
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  Logo: {
    width: "100%",
    maxHeight: 700,
    maxWidth: 700,
  }
})

export default WelcomeScreen