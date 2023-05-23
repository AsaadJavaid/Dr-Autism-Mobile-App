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
import QuizTest from '../screens/Detection/Quiz';

const Stack = createNativeStackNavigator();


const AppStack = () => {
    const {user, getting, setGetting, caller, setCaller} = useContext(UserContext)
//     const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

// useEffect(() =>{
//     if(!getting){
//         console.log("Force updating after getting = ", getting)
//         forceUpdate()
//     }
// }, [getting])


useEffect(() => {
    if (user?.uid) {
      // checkUser();
      // const userValidated = auth().currentUser
      const userId = user?.uid
      console.log("looking for for UserId = ", userId)
      const cRef = firestore().collection('meet').doc(userId);
      const subscribe = cRef.onSnapshot(snapshot => {
        const data = snapshot.data();
        // if there is a offer for chatid set the getting call flag
        if (data && data.offer) {
            console.log("Recieving Call for = ", userId)
          setGetting(data.caller);
          console.log(data.caller);
          setCaller(data.caller);
        }
      });

      return () => {
        subscribe();
      };
    }
  }, [])


        return(
                  <>{user.role =="Parent"?<ParentStack />:<DoctorStack />}</>
        )
}
const DoctorStack = () => {
    const {getting} = useContext(UserContext)
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"DoctorHome"} >
                    <Stack.Screen name='Chat' component={ChatScreen} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='DoctorHome' component={DoctorHome} />
                    <Stack.Screen name='AppointmentRequest' component={AppointmentRequest} />
                    <Stack.Screen name="Video Call" component={VideoCall} initialParams={{ email: getting, iscaller: false }} options={{}} />
                  </Stack.Navigator>
    )
}

const ParentStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"} >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Detection' component={Detection} />
        <Stack.Screen name='QuizTest' component={QuizTest} />
        <Stack.Screen name='DoctorDesk' component={DoctorDesk} />
        <Stack.Screen name='EmotionEducation' component={EmotionEducation} />
        <Stack.Screen name='AngryEmotionScreen' component={AngryEmotionScreen} />
        <Stack.Screen name='MixEmotionScreen' component={MixEmotionScreen} />
        <Stack.Screen name='DisgustEmotionScreen' component={DisgustEmotionScreen} />
        <Stack.Screen name='FearEmotionScreen' component={FearEmotionScreen} />
        <Stack.Screen name='HappyEmotionScreen' component={HappyEmotionScreen} />
        <Stack.Screen name='SadEmotionScreen' component={SadEmotionScreen} />
        <Stack.Screen name='GamesScreen' component={GamesScreen} />
        <Stack.Screen name='UserAppointment' component={UserAppointment} />
        <Stack.Screen name='Book Appointment' component={BookAppointment} />
      </Stack.Navigator>
    )
}

export default AppStack;




{/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user.role=="Parent"? "Home" : "DoctorHome"} >
                    <Stack.Screen name='Welcome' component={WelcomeScreen} />
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Chat' component={ChatScreen} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Detection' component={Detection} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                    <Stack.Screen name='NewPaswword' component={NewPasswordScreen} />
                    <Stack.Screen name='DoctorHome' component={DoctorHome} />
                    <Stack.Screen name='DoctorDesk' component={DoctorDesk} />
                    <Stack.Screen name='EmotionEducation' component={EmotionEducation} />
                    <Stack.Screen name='AngryEmotionScreen' component={AngryEmotionScreen} />
                    <Stack.Screen name='MixEmotionScreen' component={MixEmotionScreen} />
                    <Stack.Screen name='DisgustEmotionScreen' component={DisgustEmotionScreen} />
                    <Stack.Screen name='FearEmotionScreen' component={FearEmotionScreen} />
                    <Stack.Screen name='HappyEmotionScreen' component={HappyEmotionScreen} />
                    <Stack.Screen name='SadEmotionScreen' component={SadEmotionScreen} />
                    <Stack.Screen name='GamesScreen' component={GamesScreen} />
                    <Stack.Screen name='UserAppointment' component={UserAppointment} />
                    <Stack.Screen name='Book Appointment' component={BookAppointment} />
                    <Stack.Screen name='AppointmentRequest' component={AppointmentRequest} />
                    <Stack.Screen name="Video Call" component={VideoCall} initialParams={{ email: getting, iscaller: false }} options={{}} />
                  </Stack.Navigator> */}