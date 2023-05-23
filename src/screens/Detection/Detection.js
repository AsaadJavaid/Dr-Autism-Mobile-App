import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Video from 'react-native-video';

const Detection = ({navigation}) => {
  const [videoUri, setVideoUri] = useState(null);

  const giveTest= () => {
    navigation.navigate('QuizTest');
  }

  const selectVideo = async () => {
    try {
      const videos = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });
      const res = videos[0]
      console.log(res)
      console.log('Video URI:', res.fileCopyUri || res.uri);
      setVideoUri(""+(res.fileCopyUri || res.uri)); // Use fileCopyUri if available, otherwise fallback to uri
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
          <Video source={{ uri: videoUri }} style={{ width: 300, height: 300 }} controls={true} />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={giveTest}>
        <Text style={styles.buttonText}>Give Test</Text>
      </TouchableOpacity>
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

