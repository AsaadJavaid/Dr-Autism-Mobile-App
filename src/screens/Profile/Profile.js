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
    const {control, handleSubmit, watch} = useForm();


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
                setName(documentSnapshot.data().username);
                setPassword(documentSnapshot.data().password);
              }
            });
        }
      }, [update]);

    const onSignOutPressed = () => {
        auth()
            .signOut()
            .then(() => {
                alert("Signed out already!!!")
                navigation.navigate('SignIn')
            })
            .catch(error => {
                if (error) {
                    alert("Wrong input", error.message)
                }
            });
    }

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.root1}>
                <StatusBar />
                <ScrollView>
                    <View style={styles.root}>
                        <View style={styles.spacing}>
                            <TouchableOpacity>
                                <MaterialIcons name="person" size={150} color="#02AABD" />

                            </TouchableOpacity>
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
                                    setPress(!press); await auth().currentUser.updateEmail(Email); await firestore().collection('users')
                                        .doc(auth().currentUser.uid).update({ email: Email })
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

                        <View style={styles.container}>
                            <TextInput
                                value={Password}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor={'#02AABD'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity ><MaterialIcons name={press2 ? 'edit' : 'done'} style={styles.edit1} size={20} color="#02AABD"
                                onPress={async () => {
                                    setPress(!press); await firestore().collection('users')
                                        .doc(auth().currentUser.uid).update({ password: Password })
                                }} />
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.root1}>
                            <CustomButton text = {loding ? "Loading..." : "Sign Out"} onPress = {handleSubmit(onSignOutPressed)} />
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>

    );
};
const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '4%',
        marginRight: '4%',

    },
    root1: {
        alignItems : "center",
    },

    root1: {
        flex: 1,

    },

    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '18%',
        borderColor: '#02AABD',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
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
    },
    spacing: {
        height: 170,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
        paddingBottom: 10,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#02AABD',

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