import { View, Text, Image, StyleSheet, TextInput, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo2 from "../../../assets/images/Logo2.png"
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../Context/UserContext'
import {useContext} from "react";


// const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignInScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const {setUser, setIsLoggedIn} = useContext(UserContext)
    // const navigation = useNavigation();
    const [loding, setLoding] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    // const onSignInPressed = async data => {
    //     if (loding) {
    //         return;
    //     }
    //     setLoding(true);
    //     try{
    //         console.log("checking")
    //         const response = await Auth.signIn(data.username, data.password);
    //         console.log(data.username);
    //     } catch(e) {
    //         Alert.alert("☠ ●●ρs ☠", e.message);
    //     }
    //     setLoding(false);
    // }

    const [username, setUsername] = useState('asaadhabib449@gmail.com');
    const [password, setPassword] = useState('khan1234');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const PASSWORD_REGEX = /^(?=.*\d)[A-Za-z\d]{8,}$/;


    const onSignInPressed = async function () {
        let emailValidationError = null;
        let passwordValidationError = null;

        if (!EMAIL_REGEX.test(username)) {
            emailValidationError = 'Please enter a valid Email Address';
        }

        if (!PASSWORD_REGEX.test(password)) {
            passwordValidationError =
                'Password should be 8 characters';
        }

        setEmailError(emailValidationError);
        setPasswordError(passwordValidationError);

        if (!emailValidationError && !passwordValidationError) {
            try {
                const user = await auth()
                    .signInWithEmailAndPassword(username, password)
                // .then((user) => {
                const userid = user.uid
                //   const useraccount = await firebase.firestore().collection("users").doc(userid).get()
                //   console.log(useraccount.data())
                firestore()
                    .collection('users')
                    .doc(auth().currentUser.uid)
                    .get()
                    .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                            const userData = documentSnapshot.data()
                            const userRole = userData.role
                            console.log(userData.role)
                            setUser({...auth().currentUser, ...userData})
                            setIsLoggedIn(true);
                            // if (userRole == "Parent") {
                            //     navigation.navigate('Home');
                            // }
                            // else {
                            //     // const varified = documentSnapshot.data().isVarified
                            //     navigation.navigate('DoctorHome');
                            //     // if (isVarified)
                            //     // {
                            //     // navigation.navigate('Welcome');
                            //     // }
                            //     // else
                            //     // {
                            //     //     alert("Doctor not varified")
                            //     // }
                            // }
                            // navigation.navigate('Home');
                            // setName(documentSnapshot.data().username);
                            // setPassword(documentSnapshot.data().password);
                        }
                    });
                //   navigation.navigate('Home');
            } catch (error) {
                Alert.alert("☠ ●●ρs ☠", "Wrong credentials :- Verify your Username & Password and Try again!!!!");
            }
        }
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    }

    const onSignInWithGooglePressed = () => {
        console.warn("SignIn with Google Pressed")
    }

    const onSignInWithTwitterPressed = () => {
        console.warn("SignIn with Twitter Pressed")
    }

    const onCreateAccountPressed = () => {
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
            <View style={styles.root}>
                <View style={styles.logoBack}>
                    <Image
                        source={Logo2}
                        style={[styles.Logo, { height: height * 0.4 }]}
                        resizeMode="center">
                    </Image>
                </View>
            </View>
            <View style={{
                backgroundColor: '#FAF7F0',
                margin: 10,
                marginBottom: 100,
                paddingBottom: 20,
                paddingTop: 30,
                borderRadius: 50,
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,
            }}>


                <View style={styles.root}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        style={styles.input}
                        secureTextEntry={false}
                    />
                    {/* <CustomInput
                        name= "username"
                        placeholder= "autism@gmail.com"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid (autism@mail.com)"}
                        }}
                    /> */}
                </View>

                {emailError && (
                    <Text style={styles.errorText}>{emailError}</Text>
                )}

                <View style={styles.root}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    {/* <CustomInput
                        name = "password"
                        placeholder= "Password (Min 8 Char)"
                        control={control}
                        rules = {{
                            required : "Password is required",
                            minLength : {
                                value : 8,
                                message : "Password should be 8 characters long"
                            }
                        }}
                        secureTextEntry
                    /> */}
                </View>

                {passwordError && (
                    <Text style={styles.errorText}>{passwordError}</Text>
                )}


                <View style={styles.root}>
                    <CustomButton text={loding ? "Loading..." : "Sign In"} onPress={handleSubmit(onSignInPressed)} />
                </View>

                <View style={styles.root}>
                    <Text style={styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
                </View>

                {/* <View style = {styles.root}>
                <CustomButton text = "Sign In with Google" onPress = {onSignInWithGooglePressed} btnBorder = "#DD4D44" bgColor = "#FAFAFA" fgColor = "#DD4D44" />
                
            </View> */}

                <View style={styles.root}>
                    <CustomButton MaterialIcon="profle" text="Sign In with Facebook" onPress={onSignInWithTwitterPressed} btnBorder="#1DA1F2" bgColor="#FAFAFA" fgColor="#1DA1F2" />
                    <Text style={styles.textCreateAccount} onPress={onCreateAccountPressed}>Don't have Account?Create Account</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
    },
    Logo: {
        marginVertical: -30,
        backgroundColor: "#FFFFFF",
        marginBottom: -50
    },
    text: {
        color: "black",
        fontSize: 13,
    },
    textCreateAccount: {
        color: "black",
        fontSize: 13,
        marginTop: 60,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginVertical: 5,
        paddingHorizontal: 100
    },
    input: {

        color: '#02AABD',
        width: "90%",
        fontSize: 17,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: "#F0EEED",
        backgroundColor: "white",
        borderRadius: 30,
        paddingLeft: 50,
        backgroundColor: "#F0EEED",
    },
})

export default SignInScreen;