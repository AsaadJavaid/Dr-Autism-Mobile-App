/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Button,
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CustomButton from '../../components/CustomButton'
import { FlatList } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form'

const Profile = function ({ navigation }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [update, setupdate] = useState('');
    const [press, setPress] = useState(true);
    const [press1, setPress1] = useState(true);
    const [press2, setPress2] = useState(true);
    const [loding, setLoding] = useState(false);
    const { control, handleSubmit, watch } = useForm();
    const [avatar, setAvatar] = useState("1");
    const [oldPassword, seOldPassword] = useState("");


    // useEffect(() => {
    //     setEmail(auth().currentUser.email);
    //     firestore()
    //         .collection('users')
    //         .doc(auth().currentUser.uid)
    //         .get()
    //         .then(documentSnapshot => {
    //             if (documentSnapshot.exists) {
    //                 setName(documentSnapshot.data().username);
    //                 setPassword(documentSnapshot.data().password);
    //             }
    //         });
    // }, [update])

    useEffect(() => {
        if (auth().currentUser) {
            setEmail(auth().currentUser.email);
            firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log(documentSnapshot.data())
                        setName(documentSnapshot.data().username);
                        seOldPassword(documentSnapshot.data().password);
                        console.log("checking")
                        setAvatar(documentSnapshot.data().avatar);
                        console.log("checking")
                    }
                });
        }
    }, [update]);

    const onSignOutPressed = () => {
        auth()
            .signOut()
            .then(() => {
                alert("Signed out Successfully!!!")
                navigation.navigate('SignIn')
            })
            .catch(error => {
                if (error) {
                    alert("Wrong input", error.message)
                }
            });
    }

    const reauthenticate = (currentPassword) => {
        var user = auth().currentUser;
        var cred = auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
    const changePassword = (currentPassword, newPassword) => {
        reauthenticate(currentPassword).then(() => {
            var user = auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                console.log("Password updated!");
                seOldPassword(newPassword)
                firestore().collection('users')
                    .doc(auth().currentUser.uid).update({ password: newPassword })
            })
                .catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }
    const changeEmail = async (currentPassword, newEmail) => {
        reauthenticate(currentPassword).then(() => {
            var user = auth().currentUser;
            user.updateEmail(newEmail).then(() => {
                console.log("Email updated!");
                firestore().collection('users')
                    .doc(auth().currentUser.uid).update({ email: Email })
            })
                .catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView>
                <StatusBar />
                <ScrollView>

                    <View style={styles.root}>
                        <View style={styles.spacing}>
                            <Image style={{ height: 200, width: 200, borderRadius: 100, borderColor: "#16B3C0", borderWidth: 2 }} source={{ uri: auth().currentUser.photoURL }} />

                        </View>
                        <View style={styles.container}>


                            <TextInput
                                value={Email}
                                onChangeText={setEmail}
                                placeholder="email@gmail.com"
                                placeholderTextColor={'#02AABD'}
                                style={styles.input}
                            />
                            <TouchableOpacity ><MaterialIcons name={press ? 'edit' : 'done'} style={styles.edit1} size={20} color="#02AABD"
                                onPress={async () => {
                                    await changeEmail(oldPassword, Email)
                                    // setPress(!press); 
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={Name}
                                onChangeText={setName}
                                placeholder="Name"
                                placeholderTextColor={'#02AABD'}
                                style={styles.input}
                            />
                            <TouchableOpacity ><MaterialIcons name={press1 ? 'edit' : 'done'} style={styles.edit1} size={20} color="#02AABD"
                                onPress={async () => {
                                    setPress(!press); await auth().currentUser.updatePassword(Password); await firestore().collection('users')
                                        .doc(auth().currentUser.uid).update({ username: Name })
                                }} />
                            </TouchableOpacity>


                        </View>


                        {/* <View style={styles.container}>
                            <TextInput
                                value={oldPassword}
                                onChangeText={seOldPassword}
                                placeholder="Old Password"
                                placeholderTextColor={'#02AABD'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </View> */}

                        <View style={styles.container}>
                            <TextInput
                                value={Password}
                                onChangeText={setPassword}
                                placeholder="New Password"
                                placeholderTextColor={'#02AABD'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity ><MaterialIcons name={press2 ? 'edit' : 'done'} style={styles.edit1} size={20} color="#02AABD"
                                onPress={async () => {
                                    changePassword(oldPassword, Password)
                                }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logOutButtonView} >
                            {/* <CustomButton text = {loding ? "Loading..." : "Sign Out"} onPress = {handleSubmit(onSignOutPressed)} />
                             */}

                            <CustomButton text="LogOut" onPress={handleSubmit(onSignOutPressed)} btnBorder="#DD4D44" bgColor="#FAFAFA" fgColor="#DD4D44" />
                        </View>

                        {/* <View style= {styles.logOutButtonView}>
                            <Button title='LogOut' onPress={handleSubmit(onSignOutPressed)} style= {styles.logOutButton}></Button>
                        </View> */}

                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>

    );
};
const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        marginBottom: "20%"

    },
    // logOutButton:{
    //     color : "black"

    // },
    logOutButtonView: {
        borderRadius: 20,
        borderWidth: 0,
        height: 70,
        alignContent: "center",
        alignItems: "center",
        width: "80%"
    },

    container: {
        backgroundColor: '#EDEDED',
        paddingLeft: "5%",
        paddingRight: "5%",
        width: '80%',
        borderColor: '#02AABD',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    edit1: {
        paddingLeft: 0,

    },

    input: {

        color: '#02AABD',
        width: "80%",
        fontSize: 16
    },
    spacing: {
        height: "50%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        marginBottom: 30,
        backgroundColor: '#16B3C0'

    },
    linearGradient1: {
        flex: 1,
    },

});
export default Profile

















// auth()
//             .signOut()
//             .then(() => {
//                 Alert.alert("Signed out already!!!")
//                 navigation.navigate('SignIn')
//             })
//             .catch(error => {
//                 if (error) {
//                     Alert.alert("Wrong input", error.message)
//                 }
//             });