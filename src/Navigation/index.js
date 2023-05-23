import React, { useEffect, useState, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import Profile from '../screens/Profile/Profile';
// import { Auth, Hub} from "aws-amplify";
import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import ActivityLoader from '../components/ActivityLoader/ActivityLoader';
import Detection from '../screens/Detection/Detection';
import auth, { firebase } from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
import { useNavigation } from '@react-navigation/native'
import ChatScreen from '../screens/Chat';
import DoctorHome from '../screens/DoctorHome';
import DoctorDesk from '../screens/DoctorDesk';
import EmotionEducation from '../screens/EmotionEducation/EmotionEducation';
import AngryEmotionScreen from '../screens/EmotionEducation/Angry/AngryEmotionScreen';
import MixEmotionScreen from '../screens/EmotionEducation/ChitChat/MixEmotionScreen';
import DisgustEmotionScreen from '../screens/EmotionEducation/Disgust/DisgustEmotionScreen';
import FearEmotionScreen from '../screens/EmotionEducation/Fear/FearEmotionScreen';
import HappyEmotionScreen from '../screens/EmotionEducation/Happy/HappyEmotionScreen';
import SadEmotionScreen from '../screens/EmotionEducation/Sad/SadEmotionScreen';
import GamesScreen from '../screens/Games/GamesScreen';
import UserAppointment from '../screens/UserAppointment/UserAppointment'
import BookAppointment from '../screens/UserAppointment/BookAppointment'
import AppointmentRequest from '../screens/DoctorAppointment/AppointmentRequest';
import { VideoCall } from "../screens/DoctorAppointment/VideoCall"
import UserContext from '../Context/UserContext';
import firestore from "@react-native-firebase/firestore";
import AppStack from './AppStack';
import VideoStack from './VideoStack';


const Navigation = () => {
  const [user, setUser] = useState(undefined);
  const [getting, setGetting] = useState(null);
  const [caller, setCaller] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userValidated, setUserValidated] = useState(null)

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  // useEffect(() =>{
  //     if(!getting){
  //         console.log("Force updating after getting and Index = ", getting, user?.uid)
  //         forceUpdate()
  //     }
  // }, [getting, user])

  const checkUser = async () => {
    try {
      const authUser = await auth().setPersistence(auth.Auth.Persistence.LOCAL).then(() => {
        return auth().currentUser;
      });
      console.log("setting User")
      setUser(authUser);

    } catch (e) {
      console.log(e)
      setUser(null);
    }
  };

  useEffect(() => {
    // const userValidated = auth().currentUser
    setUserValidated(auth().currentUser)
    if (auth().currentUser) {
      firestore()
        .collection('users')
        .doc(auth().currentUser?.uid)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            const userData = documentSnapshot.data()
            const userRole = userData.role
            console.log(userData.role)
            setUser({ ...auth().currentUser, ...userData })
            setIsLoggedIn(true);
          }
        });
    }

  }, [])


  console.log("user validated is ", user?.uid)

  


  // useEffect(() => {
  //   checkUser();
  //   const userValidated = auth().currentUser;

  //   if (userValidated) {
  //     const userId = userValidated.uid;

  //     const cRef = firestore().collection('meet').doc(userId);
  //     const subscribe = cRef.onSnapshot(snapshot => {
  //       const data = snapshot.data();
  //       // if there is an offer for chatid, set the getting call flag
  //       if (data && data.offer) {
  //         setGetting(data.caller);
  //         console.log(data.caller);
  //         setCaller(data.caller);
  //       }
  //     });

  //     return () => {
  //       subscribe();
  //     };
  //   }
  // }, []);




  // useEffect (() => {
  //     const listner = data => {
  //         if (data.payload.event === "signIn" || data.payload.event === "signOut") {
  //         checkUser();
  //         }
  //     }
  //     Hub.listen("auth", listner)
  // }, [])

  // if (user === undefined) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityLoader></ActivityLoader>
  //       <ActivityIndicator size={50} color="#16B3C0" />
  //     </View>
  //   )
  // }


  return (
    <UserContext.Provider value={{ user, setUser, getting, setGetting, isLoggedIn, setIsLoggedIn, caller, setCaller }}>
      <NavigationContainer>
        { user? (getting?<VideoStack />:<AppStack />):
          (<Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
          <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
          <Stack.Screen name='NewPaswword' component={NewPasswordScreen} />
          </Stack.Navigator>)
        
          }
      </NavigationContainer>
    </UserContext.Provider>
  )
}


export default Navigation



{/* <Stack.Navigator screenOptions={{headerShown : false}}>
            {user ? (
                <>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Detection' component={Detection} />
                </>
            ) : (
                <>
                    <Stack.Screen name = 'Welcome' component={WelcomeScreen}/>
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                    <Stack.Screen name='NewPaswword' component={NewPasswordScreen} />
                </>
            )}
          </Stack.Navigator> */}