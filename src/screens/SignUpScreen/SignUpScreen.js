import { View, Text,Image , TextInput, StyleSheet,useWindowDimensions , ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import CustomDropdownAge from '../../components/CustomDropdownAge'
import CustomDropdownRelation from '../../components/CustomDropdownRelation'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from "aws-amplify";
import Image1 from "../../../assets/images/image2.png"
import SignUp from 'aws-amplify-react-native/dist/Auth/SignUp'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const usernameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,}$/;

const SignUpScreen = () => {
    const {height} = useWindowDimensions();
    const [loding, setLoding] = useState(false);
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch("password")
    //console.log(pwd)


    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordRepeatValid, setPasswordRepeatValid] = useState(true);
    const [role, setRole] = useState('');

    const handleRoleChange = (value) => {
        setRole(value.label);
    }

    const data = [{
        label: 'Parent',
        value : 'parent'
    },
    {
        label: 'Doctor',
        value : 'doctor'
    }];
    


    const register = async () => {

        // const { email, password, passwordRepeat, username, role } = values
        if (password == passwordRepeat) {
            const avatar = "" + Math.floor(Math.random()*3)
            console.log("print " + avatar)
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                firestore().collection('users').doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    username,
                    email,
                    password,
                    role,
                    avatar,
                    // isVarified : false
                })
                const update = {
                    displayName: username,
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/dr-autism.appspot.com/o/Avatar%2F"+ avatar + ".jpg?alt=media",
                  };
                  
                   auth().currentUser.updateProfile(update)
                   
                navigation.navigate('SignIn')
            })
            .catch(error => {
                if (error) {
                    Alert.alert("Email already in use", error.message)
                }
            });
    } else
        {
            alert("passwords are differnet");
        }
    }

    const onRegisterPressed = async () => {
        // Validate input for username, email, and password
        const usernameIsValid = usernameRegex.test(username);
        const emailIsValid = emailRegex.test(email);
        const passwordIsValid = passwordRegex.test(password);
        const passwordRepeatIsValid = password === passwordRepeat;


    
        setUsernameValid(usernameIsValid);
        setEmailValid(emailIsValid);
        setPasswordValid(passwordIsValid);
        setPasswordRepeatValid(passwordRepeatIsValid);
    
        if (usernameIsValid && emailIsValid && passwordIsValid && passwordRepeatIsValid) {
          await register();
        //   const data = await firestore().collection('users').doc(auth().currentUser.uid).set({
        //     uid : auth().currentUser.uid,
        //     username: username,
        //     email: email,
        //     password: password,
        //     role: role,
        //   })
    
          if (data) {
            return;
            }
        }
    };

    // const onRegisterPressed = async data => {
    //     const {name, username, password, repeatpassword} = data;
    //     if (loding) {
    //         return;
    //     }
    //     setLoding(true);
    //     try{
    //         await Auth.signUp({
    //             username,
    //             password,
    //             attributes : {name}
    //         });

    //         navigation.navigate('ConfirmEmail', {username, password, name})
    //     } catch(e){
    //         Alert.alert("☠ ●●ρs ☠", e.message);
    //     }
    //     setLoding(false);
    //     // console.log(data)
    //     // navigation.navigate('ConfirmEmail')
    // }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onTermOfUsePressed = () => {
        console.warn("Term of Use Pressed")
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

  return (
    <ScrollView style = {{backgroundColor : "white"}}>
        <View>
        <View style = {styles.root}>
                <Image
                    source={Image1}
                    style = {[styles.Logo, {height : height * 0.2} ]}
                    resizeMode = "center">
                </Image>
            </View>
            <View style = {styles.root}>
                <Text style = {styles.title}>Create an Account</Text>
            </View>
            <View style = {{flex : 1, marginVertical : 15}}>

                <View style = {styles.root}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Username"
                        placeholderTextColor={'black'}
                        style={styles.input}
                        secureTextEntry={false}
                    />
                </View>

                {!usernameValid && <Text style={styles.error}>Username must contain only letters and numbers</Text>}

                <View style = {styles.root}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        style={styles.input}
                    />
                </View>
                
                {!emailValid && <Text style={styles.error}>Email should be of following format (autism@gmail.com)</Text>}

                <View style = {styles.root}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                {!passwordValid && <Text style={styles.error}>Password must be at least 8 characters and contain at least one number</Text>}

                <View style = {styles.root}>
                    <TextInput
                        value={passwordRepeat}
                        onChangeText={setPasswordRepeat}
                        placeholder="Retype Password"
                        placeholderTextColor={'black'}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                {!passwordRepeatValid && <Text style={styles.error}>Please retype the password correctly</Text>}

                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => handleRoleChange(e)}
                    icon={
                        <Icon
                            name="check-circle"
                            size={25}
                            color="#2c9dd1"
                        />
                    }
                />

                <View style = {styles.root}>
                    <CustomButton text = {loding ? "Loading..." : "Register"} onPress = {handleSubmit(onRegisterPressed)} />
                </View>

                <View style = {[styles.root, {width : "80%", marginHorizontal : 45}]}>
                    <Text>By Registering, you confirm that you accept our {' '}
                    <Text style = {styles.link} onPress = {onTermOfUsePressed}>Term of use</Text> and <Text style = {styles.link} onPress = {onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
                </View>

                <View style = {styles.root}>
                    <Text style = {styles.textCreateAccount} onPress = {onSignInPressed}>Already have Account?Sign In</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems : "center",
    },
    title : {
        fontSize : 40,
        fontWeight : "bold",
        color : "#16B3C0",
        margin : 15,
        fontFamily : "sans-serif-medium"
    },
    text: {
        color : "black",
        fontSize : 13,
    },
    textCreateAccount : {
        color : "black",
        fontSize : 13,
        marginTop : 30,
    },
    link : {
        color : "#FFA03A"
    },
    Logo : {
        marginVertical : 10
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginVertical: 2,
    },
    container : {
        flex            : 1,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
    },
})

export default SignUpScreen;