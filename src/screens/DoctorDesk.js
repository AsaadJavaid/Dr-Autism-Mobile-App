// import { View, Text, Alert, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView, ImageBackground, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
// import React from 'react'
// // import { Auth } from "aws-amplify";
// import { useState } from 'react';
// import { useForm } from 'react-hook-form'
// import auth from '@react-native-firebase/auth';
// import Logo2 from "../../assets/images/docDesk.png"
// // import Entypo from 'react-native-vector-icons/Entypo';



// const DoctorHome = ({ navigation }) => {
//     const { height } = useWindowDimensions();
//     const [loding, setLoding] = useState(false);
//     const { control, handleSubmit, formState: { errors } } = useForm();
//     // const navigation = useNavigation();
//     const signOut = async () => {

//         auth()
//             .signOut()
//             .then(() => {
//                 navigation.navigate('SignIn')
//             })
//             .catch(error => {
//                 if (error) {
//                     Alert.alert("Email already in use", error.message)
//                 }
//             });

//     }
//     return (
//         <ScrollView>

//             <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>

//                 <View style={styles.root}>
//                     <View style={styles.logoBack}>
//                         <Image
//                             source={Logo2}
//                             style={[styles.Logo, { height: height * 0.4 }]}
//                             resizeMode="center">
//                         </Image>
//                     </View>
//                 </View>

//                 <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 20, borderColor: "#16B3C0", marginBottom: 20, backgroundColor: "#B5EAEA" }}>
//                     <TextInput style={{ marginHorizontal: 20, color: "white" }} placeholder='Search.......'></TextInput>
//                 </View>


//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//         alignItems: "center",
//         alignContent: "center",
//     },
//     Logo: {
//         marginBottom: 20,
//         backgroundColor: "#FFFFFF",
//     },
// })

// export default DoctorHome


/////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';

// const App = () => {
//   const [game1Animation] = useState(new Animated.Value(-100));
//   const [game2Animation] = useState(new Animated.Value(100));

//   const animateGameButtons = () => {
//     Animated.parallel([
//       Animated.timing(game1Animation, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(game2Animation, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.gameButton} onPress={() => console.log('Game 1 clicked')}>
//         <Text style={styles.gameButtonText}>Game 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.gameButton} onPress={() => console.log('Game 2 clicked')}>
//         <Text style={styles.gameButtonText}>Game 2</Text>
//       </TouchableOpacity>
//       <Animated.View
//         style={[
//           styles.gameButtonShadow,
//           { transform: [{ translateY: game1Animation }] },
//         ]}
//       />
//       <Animated.View
//         style={[
//           styles.gameButtonShadow,
//           { transform: [{ translateY: game2Animation }] },
//         ]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gameButton: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//   },
//   gameButtonText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   gameButtonShadow: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#000',
//     opacity: 0.3,
//     position: 'absolute',
//   },
// });

// export default App

//////////////////////////////////////////////////////////

import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

const OpenBrowserButton = () => {
  const handlePress = async () => {
    const url = 'https://asaadkhan.itch.io/my-first-game'; // Replace with your desired URL
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Unable to open URL: ${url}`);
    }
  };

  return (
    <TouchableOpacity style={styles.gameButton} onPress={handlePress}>
        <Text style={styles.gameButtonText}>Open Game</Text>
    </TouchableOpacity>
    // <TouchableOpacity onPress={handlePress}>
    //   <Text>Open Browser</Text>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gameButton: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    gameButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    gameButtonShadow: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#000',
      opacity: 0.3,
      position: 'absolute',
    },
  });

export default OpenBrowserButton;



