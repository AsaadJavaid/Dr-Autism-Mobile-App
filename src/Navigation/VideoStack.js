import React, { useEffect, useContext, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import ActivityLoader from '../components/ActivityLoader/ActivityLoader';
import Detection from '../screens/Detection/Detection';
import { useNavigation } from '@react-navigation/native'
import ChatScreen from '../screens/Chat';
import Profile from '../screens/Profile/Profile';
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

const Stack = createNativeStackNavigator();


const VideoStack = () => {
    const {user, getting, setGetting, caller, setCaller} = useContext(UserContext)
//     const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

// useEffect(() =>{
//     if(!getting){
//         console.log("Force updating after getting = ", getting)
//         forceUpdate()
//     }
// }, [getting])


// useEffect(() => {
//     if (user?.uid) {
//       // checkUser();
//       // const userValidated = auth().currentUser
//       const userId = user?.uid
//       console.log("looking for for UserId = ", userId)
//       const cRef = firestore().collection('meet').doc(userId);
//       const subscribe = cRef.onSnapshot(snapshot => {
//         const data = snapshot.data();
//         // if there is a offer for chatid set the getting call flag
//         if (data && data.offer) {
//           setGetting(data.caller);
//           console.log(data.caller);
//           setCaller(data.caller);
//         }
//       });

//       return () => {
//         subscribe();
//       };
//     }
//   }, [])


        return(
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Video Call">
                  <Stack.Screen name="Video Call" component={VideoCall} initialParams={{ userId: getting, iscaller: false }} options={{}} />
                  {/* <Stack.Screen name='Home' component={HomeScreen} />
                  <Stack.Screen name='DoctorHome' component={DoctorHome} /> */}
                </Stack.Navigator>
        
        )
}

export default VideoStack;


