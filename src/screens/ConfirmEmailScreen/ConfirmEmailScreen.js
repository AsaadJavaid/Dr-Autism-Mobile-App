import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import { Auth } from "aws-amplify";


const Email_Regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


const ConfirmEmailScreen = () => {
    const [loding, setLoding] = useState(false);
    const route = useRoute();
    const {control, handleSubmit, watch} = useForm({
        defaultValues : {
            username : route?.params?.username
        }
    });
    const navigation  = useNavigation();
    const username = watch("username");

    const onConfirmPressed = async data => {
        if (loding) {
            return;
        }
        setLoding(true);
        try{
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate("SignIn")
        } catch(e){
            Alert.alert("☠ ●●ρs ☠", e.message);
        }
        setLoding(false);
    }

    const onResendCodePressed = async () => {
        if (loding) {
            return;
        }
        setLoding(true);
        try{
            await Auth.resendSignUp(username);
            Alert.alert("Success  ✅", "Code was sent to your Email!");
        } catch(e){
            Alert.alert("☠ ●●ρs ☠", e.message);
        }
        setLoding(false);
    }

    const onBackToSignInPressed = () => {
        navigation.navigate("SignIn")
    }

  return (
    <ScrollView style = {{backgroundColor : "white"}}>
        <View>
            <View style = {styles.root}>
                <Text style= {styles.title}>Confirm Email</Text>
            </View>

            <View style = {styles.root}>
                    <CustomInput
                        name= "username"
                        placeholder= "autism@gmail.com"
                        control={control}
                        rules = {{
                            required : "Email is required",
                            pattern : {value : Email_Regex, message : "Email is invalid"}
                        }}
                    />
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
                <CustomButton text = {loding ? "Loading..." : "Confirm"} onPress = {handleSubmit(onConfirmPressed)} />
            </View>

            <View style = {styles.root}>
                <Pressable style = {styles.resendButton} onPress={onResendCodePressed}>
                    <Text style = {styles.resend}>Resend Code</Text>
                </Pressable>
            </View>

            <View style = {styles.root}>
                <Text style = {styles.textCreateAccount} onPress = {onBackToSignInPressed}>Back to Sign In</Text>
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

export default ConfirmEmailScreen;