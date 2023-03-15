import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from "aws-amplify";

const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


const NewPasswordScreen = () => {
    const [loding, setLoding] = useState(false);
    const {control, handleSubmit, formState : {errors}} = useForm();
    const navigation = useNavigation()

    const onSubmitPressed = async data => {
        if (loding) {
            return;
        }
        setLoding(true);
        try{
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            Alert.alert("Success  ✅", "Password updated SUCCESSFULLY!!!");
            navigation.navigate('SignIn');
        } catch(e) {
            Alert.alert("☠ ●●ρs ☠", e.message);
        }
        setLoding(false);
        // console.log(data);
        // navigation.navigate('Home')
    }

    const onBackToSignInPressed = () => {
        navigation.navigate("ForgotPassword");
    }

  return (
    <ScrollView style = {{backgroundColor : "white"}}>
        <View>
            <View style = {styles.root}>
                <Text style= {styles.title}>Reset password</Text>
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name = "code"
                        placeholder= "Code"
                        control={control}
                        rules = {{
                            required : "Code is required",
                            minLength : {
                                value : 6,
                                message : "Code should be 6 characters"
                            }
                        }}
                    />
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name= "username"
                        placeholder= "Enter Email (autism@gmail.com)"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid (autism@mail.com)"}
                        }}
                    />
            </View>

            <View style = {styles.root}>
                <CustomInput
                        name = "password"
                        placeholder= "New password (Min 8 Char)"
                        control={control}
                        rules = {{
                            required : "Password is required",
                            minLength : {
                                value : 8,
                                message : "Password should be 8 characters long"
                            }
                        }}
                        secureTextEntry
                    />
            </View>

            <View style = {styles.root}>
                <CustomButton text = {loding ? "Loading..." : "Submit"} onPress = {handleSubmit(onSubmitPressed)} />
            </View>

            <View style = {styles.root}>
                <Text style = {styles.textCreateAccount} onPress = {onBackToSignInPressed}>Back to Resend Code</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems : "center",
    },
    text: {
        color : "black",
        fontSize : 13,
    },
    textCreateAccount : {
        color : "black",
        fontSize : 13,
        marginTop : 20,
    },
    title : {
        fontSize : 40,
        fontWeight : "bold",
        color : "#16B3C0",
        margin : 20,
        fontFamily : "sans-serif-medium"
    },
    resend : {
        color : "#16B3C0",
        fontWeight : "bold",
        fontSize : 14,
        marginVertical : 15
    },
    resendButton : {
        borderRadius : 25,
        borderColor : "#16B3C0",
        borderWidth : 1,
        backgroundColor : "white",
        height : 50,
        width : "90%",
        alignItems : "center",
        marginVertical : 10
    }
})

export default NewPasswordScreen;