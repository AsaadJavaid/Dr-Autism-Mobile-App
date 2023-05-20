import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Detection = ({navigation}) => {
  const openCamera = () => {
    Alert.alert("Open Camera")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openCamera}>
        <Text>Upload Image</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Detection;