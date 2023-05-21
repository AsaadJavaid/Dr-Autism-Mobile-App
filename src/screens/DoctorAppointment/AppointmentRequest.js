import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../Context/UserContext';
import { useContext, useEffect } from 'react';
import { Avatar, Card, } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AppointmentRequest = () => {
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
        appointments.push({ id: doc.id, ...doc.data() });
        
      });
      setData(appointments);
      setLoading(false);
      // console.log("appointments are ", appointments)
      console.log("appointments date are ", appointments[0])
      return appointments;
    } catch (error) {
      console.error('Error getting appointments:', error);
      return [];
    }
  };

  useEffect(() => {
    getAppointmentsBetweenDates(user.email);

  }, []);

  const Res = ({ item }) => (
    <Card style={styles.but}>
      <View style={{ padding: "1%", flexDirection: 'row' }}>
        <Avatar.Image style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: "2%" }} size={60}
          // source={require('../../../public/images/231516.jpg')} 
          source={{ uri: `https://firebasestorage.googleapis.com/v0/b/dr-autism.appspot.com/o/Avatar%2F${item.avatar}.jpg?alt=media` }}
        />
        <Card.Content style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Asaad Khan</Text>
          <Text>{item.time}</Text>
          <Text>{item.status}</Text>
          <Text>{item.patientId}</Text>
        </Card.Content>
        <View style={styles.chat}>
          <TouchableOpacity style={[styles.icons, { marginLeft: "15%" }]} onPress={() => { Alert.alert("pressed") }}>
            <MaterialIcons name="video-outline" size={30} color="#555DF2" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  if (loading) {
    return "";
  }
  else {
    return (
      <View>
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
    width: '95%',
    marginTop: "2%",
    marginBottom: "1%",
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 7,
    alignSelf: 'center',
    paddingTop: '1%',
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%"
  },
});

export default AppointmentRequest;
