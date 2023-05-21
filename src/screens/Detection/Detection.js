// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const Detection = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const openCamera = () => {
//     const options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'video',
//         mediaType: "video"
//       },
//     };

//     launchImageLibrary(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode === 'camera_unavailable') {
//         console.log('Camera not available on device');
//       } else if (response.errorCode === 'permission') {
//         console.log('Permission not granted');
//       } else if (response.errorCode === 'others') {
//         console.log(response.errorMessage);
//       } else {
//         setImageUri(response.uri);
//         console.log('Response = ', response);
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={openCamera}>
//         <Text style={styles.buttonText}>Upload Image</Text>
//       </TouchableOpacity>
//       <View style={styles.imageContainer}>
//         {imageUri && (
//           <Image
//             source={{ uri: imageUri }}
//             style={styles.image}
//             resizeMode="contain"
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 20,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   imageContainer: {
//     alignItems: 'center',
//   },
//   image: {
//     height: 500,
//     width: 400,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
// });

// export default Detection;

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { launchCamera } from 'react-native-image-picker';

// const Detection = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//       includeBase64: false,
//     };

//     launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode === 'camera_unavailable') {
//         console.log('Camera not available on device');
//       } else if (response.errorCode === 'permission') {
//         console.log('Permission not granted');
//       } else if (response.errorCode === 'others') {
//         console.log(response.errorMessage);
//       } else {
//         setImageUri(response.uri);
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={openCamera}>
//         <Text style={styles.buttonText}>Upload Image</Text>
//       </TouchableOpacity>
//       <View style={styles.imageContainer}>
//         {imageUri ? (
//           <Image
//             source={{ uri: imageUri }}
//             style={styles.image}
//             resizeMode="contain"
//           />
//         ) : (
//           <Text>No image selected</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 20,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   imageContainer: {
//     alignItems: 'center',
//   },
//   image: {
//     height: 500,
//     width: 400,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
// });

// export default Detection;


//////////////////////////////////////////////
/////////////////////////////////////////////

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const Detection = () => {
//   const [videoUri, setVideoUri] = useState(null);

//   const selectVideo = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.video],
//       });

//       setVideoUri(res.uri);
//       console.log('Video URI:', res.uri);
//     } catch (error) {
//       if (DocumentPicker.isCancel(error)) {
//         console.log('User cancelled video picker');
//       } else {
//         console.log('Error selecting video:', error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={selectVideo}>
//         <Text style={styles.buttonText}>Select Video</Text>
//       </TouchableOpacity>
//       <View style={styles.videoContainer}>
//         {videoUri && (
//           <Video
//             source={{ uri: videoUri }}
//             style={styles.video}
//             controls
//             resizeMode="contain"
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 20,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   videoContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   video: {
//     height: 300,
//     width: 300,
//   },
// });

// export default Detection;

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const Detection = () => {
  const [videoUri, setVideoUri] = useState(null);

  const selectVideo = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      setVideoUri(res.fileCopyUri || res.uri); // Use fileCopyUri if available, otherwise fallback to uri
      console.log('Video URI:', res.fileCopyUri || res.uri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled video picker');
      } else {
        console.log('Error selecting video:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectVideo}>
        <Text style={styles.buttonText}>Select Video</Text>
      </TouchableOpacity>
      <View style={styles.videoContainer}>
        {videoUri && (
          <Video
            source={{ uri: videoUri }}
            style={styles.video}
            controls
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height: 300,
    width: 300,
  },
});

export default Detection;

