import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Video from 'react-native-video';
import axios from 'axios';

const Detection = ({ navigation }) => {
  const [videoUri, setVideoUri] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [score, setScore] = useState(null);

  const selectVideo = async () => {

    try {

      const videos = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });
      const res = videos[0];

      const formData = new FormData();
      formData.append('file', res);
      console.log("form data =", formData)
//http://192.168.43.186:8000/predict
      const response = await axios.post('http://192.168.18.39:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { average_prediction, average_score } = response.data;
      console.log('Average Prediction:', average_prediction);
      console.log('Average Score:', average_score);

      setPrediction(average_prediction);
      setScore(average_score);

      setVideoUri('' + (res.fileCopyUri || res.uri));
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled video picker');
      } else {
        console.log('Error selecting video:', error);
      }
    }
  };

  const giveAssessment = () => {
    Alert.alert("☠Attention Parents!☠", "Before answering the following Questions regarding your child's health, remember to read each question thoroughly and select 'Yes' or 'No' accurately. Your responses will help us provide the best support for your child. Thank you for your cooperation in ensuring their well-being.")
    navigation.navigate("QuizTest");
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileIcon}>
        {/* <View style={{ flexDirection: "row", justifyContent: "center", margin: 20, backgroundColor: "#AAE3E2", borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, height: 160, width: 350 }}>
          <ImageBackground source={require('../../../assets/Detection/autism.jpg')} style={{ height: 160, width: 350 }} imageStyle={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30 }} />
        </View> */}
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
          <TouchableOpacity onPress={selectVideo}>
            <View style={{
              height: 210,
              width: 165,
              backgroundColor: "#579BB1",
              borderRadius: 20,
              alignItems: "center",
              marginBottom: 30,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 10,
            }}>
              <ImageBackground
                source={require('../../../assets/Detection/upload.jpg')}
                style={{ height: 160, width: 165 }}
                imageStyle={{ borderRadius: 20 }}
              />
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#F7ECDE" }}>Upload Video</Text>
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "#F7ECDE" }}>☠ Not more than <Text style={{fontSize:12, color:"#FF6363"}}>30s</Text> long ☠</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={giveAssessment}>
            <View style={{
              height: 210,
              width: 165,
              backgroundColor: "#EC7272",
              borderRadius: 20,
              alignItems: "center",
              marginBottom: 30,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 10,
            }}>
              <ImageBackground
                source={require('../../../assets/Detection/assessment.jpg')}
                style={{ height: 160, width: 165 }}
                imageStyle={{ borderRadius: 20 }}
              />
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#F7ECDE" }}>Assessment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ borderRadius: 20, borderWidth: 5, borderColor: "#ADA2FF", alignItems: "center", width: "100%" }}>
          {videoUri && (
            <Video source={{ uri: videoUri }} style={{ width: "100%", height: 280, borderRadius: 15 }} controls={false} />
          )}
        </View>
        {prediction && (
          <View style={{
            backgroundColor: "#FAF8F1", margin: 20, padding: 30, alignItems: "center", shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 10,
          }}>
            <Text style={{ fontSize: 25, color: "#FD8A8A", fontWeight: "bold" }}><Text style={{ color: "#579BB1", fontSize: 20 }}>Prediction:-</Text> {prediction}</Text>
            <Text style={{ fontSize: 10, color: "#D77FA1" }}><Text style={{ fontSize: 15, color: "red" }}>Important Advisory:- </Text>
              Parents, please note that while our application
              predicts results based on your responses, there
              may be limitations. Other factors may impact your
              child's health. We strongly recommend consulting medical
              experts for a comprehensive evaluation. Your child's well-being
              is our priority. Seek professional guidance for accurate assessment and care.</Text>
          </View>
        )}



      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: '#F7ECDE',
    alignItems: "center"
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
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  profileIcon: {
    backgroundColor: "#16B3C0",
    width: "100%",
    height: "8%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});

export default Detection;

// {
//   uri: res.fileCopyUri || res.uri,
//   name: 'video.mp4',
//   type: 'video/mp4',
// }

// {prediction && score && (
//   <View style={styles.resultContainer}>
//     <Text style={styles.resultText}>Prediction: {prediction}</Text>
//     <Text style={styles.resultText}>Score: {score}</Text>
//   </View>
// )}