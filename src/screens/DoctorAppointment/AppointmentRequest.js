import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../Context/UserContext';
import { useContext, useEffect } from 'react';
import { Avatar, Card, } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AppointmentRequest = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext)
  const [data, setData] = useState("")
  const getAppointmentsBetweenDates = async (doctorId) => {
    console.log("doctor id", doctorId)
    try {
      console.log("getting snapshot ", snapshot)
      const snapshot = await firestore().collection('appointments')
        // .where('date', '>=', startDate)
        // .where('date', '<=', endDate)
        .where('doctorId', '==', doctorId)
        .get();
      console.log("snapshot ", snapshot)


      const appointments = [];
      snapshot.forEach((doc) => {
        // for (const doc of snapshot){
          const appointmentData = {id: doc.id, ...doc.data() }
          appointments.push({ ...appointmentData });
        // }

      });
      const userAppointments = []
      for (const appointmentData of appointments){
        const snapshotData = await firestore().collection('users').doc(appointmentData.patientId).get();
        // console.log("User data is = ", userData)
        const userData = snapshotData.data()
        userAppointments.push({ ...appointmentData, userData });
      }
      console.log("User appointments= ", userAppointments)
      setData(userAppointments);
      setLoading(false);
      // console.log("appointments are ", appointments)
      console.log("appointments date are ", appointments[0])
      return userAppointments;
    } catch (error) {
      console.error('Error getting appointments:', error);
      return [];
    }
  };

  useEffect(() => {
    getAppointmentsBetweenDates(user.email);
    console.log("User email = ", user.email)

  }, []);

  const Res = ({ item }) => (
    <View style={{backgroundColor: "white"}}>
    <Card style={styles.but}>
      <View style={{ padding: "1%", flexDirection: 'row' }}>
        <Avatar.Image style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: "2%" }} size={60}
          //source={require('../../../assets/Avatars/5.jpg')}
        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/dr-autism.appspot.com/o/Avatar%2F${item.userData.avatar}.jpg?alt=media` }}
        />
        <Card.Content style={{ marginTop: 'auto', marginBottom: 'auto', padding: 20 }}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '700', marginBottom: 15, color: "#FD8A8A" }}>Appoinment Details</Text>
          <Text style={{}}>UserName:- {item.userData.username}</Text>
          <Text>
            <Text style={{ color: '#C780FA',fontSize: 15 }}>Time: </Text>
            {item.time}
          </Text>

          <Text>
            <Text style={{ color: '#C780FA', fontSize: 15 }}>Status: </Text>
            {item.status}
          </Text>
          
          <Text style={{ color: '#16B3C0' }}><Text style={{ color: '#A7727D', fontSize: 18 }}>Date:- </Text>{item.date.toDate().toLocaleString()}</Text>
        </Card.Content>
        <View style={styles.chat}>
          <TouchableOpacity style={[styles.icons, { marginLeft: "2%" }]} onPress={() => { navigation.navigate("Video Call", { userId: item.patientId, iscaller: true }) }}>
            <MaterialIcons name="camera" size={50} color="#16B3C0" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
    </View>
  );

  if (loading) {
    return "";
  }
  else {
    return (
      <View style={{backgroundColor: "#FFFFFF", marginBottom: 110}}>
         <View style={styles.topTextView}>
          <View style={{ flexDirection: "row", justifyContent: "center", margin: 20, backgroundColor: "#FFF8DE", borderTopLeftRadius: 20, borderBottomLeftRadius: 30, borderTopRightRadius: 20, borderBottomRightRadius: 30, height: 70, alignItems: "center" }}>
            <Text style={styles.topText}>All Appointments</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Res item={item} />}
          keyExtractor={item => item.id} />
      </View>
    );
  }
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
  chat: {
    display: "flex",
    flexDirection: "row",
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: "auto",
    marginRight: 0
  },
  icons: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: "auto",
    marginRight: 0
  },
  but: {
    display: "flex",
    flexDirection: "column",
    width: '90%',
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 20,
    backgroundColor: '#FAF7F0',
    elevation: 10,
    alignSelf: 'center',
    paddingTop: '1%',
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  topTextView: {
    backgroundColor: "#16B3C0",
    width: "100%",
    height: "16%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    marginBottom: 10
  },
  topText: {
    fontSize : 30,
    fontWeight: "bold",
    fontFamily : "Verdana",
    color: "#16B3C0"
  },
});

export default AppointmentRequest;
