import { View, Text,Image, TextInput, StyleSheet, ScrollView,useWindowDimensions, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from "aws-amplify";
import auth from '@react-native-firebase/auth';
import Image1 from "../../../assets/images/image5.png"


// const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const ForgotPasswordScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const [loding, setLoding] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm();
    // const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState({ message: '', isError: false });

    const validateEmail = () => {
        if (!email) {
            setEmailError({ message: 'Please enter your email', isError: true });
        } else if (!EMAIL_REGEX.test(email)) {
            setEmailError({ message: 'Please enter a valid email address', isError: true });
        } else {
            setEmailError({ message: '', isError: false });
            return true;
        }
        return false;
    };
    const sendPasswordResetEmail = () => {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Success  ✅", "Check your Email, Code Send there!!!");
                navigation.replace('SignIn');
            })
            .catch(error => {
                console.log(error);
                Alert.alert("☠ ●●ρs ☠", "Error!!!", e.message);
            });
    };
    const onSendPressed = function () {
        if (validateEmail()) {
            sendPasswordResetEmail();
        }
    }

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <View style={styles.root}>
                    <Image
                        source={Image1}
                        style={[styles.Logo, { height: height * 0.4 }]}
                        resizeMode="center">
                    </Image>
                </View>

                <View style={styles.root}>
                    <Text style={styles.title}>Reset password</Text>
                </View>

                <View style={styles.root}>
                    {/* <CustomInput
                        name= "username"
                        placeholder= "Enter Email (autism@gmail.com)"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid (autism@mail.com)"}
                        }}
                    /> */}
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        placeholderTextColor={'#16B3C0'}
                        style={styles.input}
                        secureTextEntry={false}
                    />
                </View>
                {emailError.isError ? (
                    <Text style={[styles.errorText, { color: 'red', paddingHorizontal : 25 }]}>{emailError.message}</Text>
                ) : null}
                <View style={styles.root}>
                    <CustomButton text={loding ? "Loading..." : "Send"} onPress={handleSubmit(onSendPressed)} />
                </View>

                {/* <View style = {styles.root}>
                <Pressable style = {styles.resendButton} onPress={onResendCodePressed}>
                    <Text style = {styles.resend}>Resend Code</Text>
                </Pressable>
            </View> */}

                <View style={styles.root}>
                    <Text style={styles.textCreateAccount} onPress={onBackToSignInPressed}>Back to Sign In</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
    },
    text: {
        color: "black",
        fontSize: 13,
    },
    textCreateAccount: {
        color: "black",
        fontSize: 13,
        marginTop: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#16B3C0",
        margin: 20,
        fontFamily: "sans-serif-medium"
    },
    resend: {
        color: "#16B3C0",
        fontWeight: "bold",
        fontSize: 14,
        marginVertical: 15
    },
    resendButton: {
        borderRadius: 25,
        borderColor: "#16B3C0",
        borderWidth: 1,
        backgroundColor: "white",
        height: 50,
        width: "90%",
        alignItems: "center",
        marginVertical: 10
    },
    input: {

        color: '#16B3C0',
        width: "90%",
        fontSize: 15,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
        paddingLeft: 50,
        backgroundColor: "#FFFFFF",
        borderColor: "#16B3C0",
    },
})

export default ForgotPasswordScreen;