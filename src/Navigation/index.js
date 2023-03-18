import React, { useEffect, useState } from 'react'
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


const Navigation = () => {
    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
          const authUser = await auth().setPersistence(auth.Auth.Persistence.LOCAL).then(() => {
            return auth().currentUser;
          });
          setUser(authUser);
        } catch (e) {
          setUser(null);
        }
      };

    useEffect (() => {
        checkUser();
    }, [])

    // useEffect (() => {
    //     const listner = data => {
    //         if (data.payload.event === "signIn" || data.payload.event === "signOut") {
    //         checkUser();
    //         }
    //     }
    //     Hub.listen("auth", listner)
    // }, [])

    if (user === undefined){
        return(
            <View style = {{flex : 1, justifyContent : "center", alignItems : "center"}}>
                <ActivityLoader></ActivityLoader>
                <ActivityIndicator size= {50} color = "#16B3C0" />
            </View>
        )
    }
    const userValidated = auth().currentUser
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName = {userValidated ? "Home" : "Welcome"} >

        
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
      </Stack.Navigator>
    </NavigationContainer>
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