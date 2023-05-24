import React, {useState, useEffect, useContext, useReducer} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {Avatar, Card, Title, IconButton} from 'react-native-paper';
import CalendarPicker from 'react-native-calendar-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const BookAppointment = ({navigation, route}) => {
  //const {doctor, user, appointment, setAppointment, backendUrl} = useContext(AuthContext);
  const doctorData = route.params?.doctor
  console.log("Book appointment doctor ", doctorData)
  const [selectedTime, setSelectedTime] = useState({});

  const HandleAppointment = async () => {

    Alert.alert("Success  ✅","Your Appointment has been booked successfully. you will recieve Video call at your selected time. be online!!!!!")
    const date = new Date(selectedDate)
    date.setUTCHours(0,0,0,0);
    const appointmentDetails = {
      doctorId: doctorData.email,
      patientId: auth().currentUser.uid,
      time: ''+selectedTime.key,
      date: date,
      status: 'pending',
    }
    console.log('Appointment details ', appointmentDetails)

    try {

      const response = await firestore().collection('appointments').doc().set({
        ...appointmentDetails
        // isVarified : false
    });
      // console.log(response.data);
      console.log(response);
      // if(response.data.status != "success"){
      //   alert("Unable to book appointment at the moment")
      // }else{
      //   alert(response.data.message)
      // }
    } catch (error) {
      console.log(error);
      alert("Unable to book appointment at the moment")

    }
    // setCreateApt({
    //   doctorId: doctor.key,
    //   patientId: user.identifier,
    //   doctorMSP: 'org2.department1',
    //   time: selectedTime.key,
    //   date: selectedDate,
    //   status: 'pending',
    // });
    // console.log(createApt);
    // setAppointment({
    //   doctorId: doctor.key,
    //   patientId: user.identifier,
    //   doctorMSP: 'org2.department1',
    //   time: selectedTime.key,
    //   date: selectedDate,
    //   status: 'pending'
    // });
    // Alert.alert('Success', 'Appointment Booked Successfully!', [
    //   {text: 'OK', onPress: () => navigation.navigate('Appointments')},
    // ]);
  };

  const [date, setDate] = useState(new Date());
  const [allSlots, setAllSlots] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);
  const selectedDate = date ? date.toString() : '';

  
  

  const createIntervals = (startTime, endTime) => {
    const [Stime, Smodifier] = startTime.split(' ');
    const [Etime, Emodifier] = endTime.split(' ');
    const timesArray = [];

    let [Shours, Sminutes] = Stime.split(':');
    let [Ehours, Eminutes] = Etime.split(':');

    if (!Sminutes) {
      Sminutes = '00';
    }
    if (!Eminutes) {
      Eminutes = '00';
    }

    if (Shours === '12') {
      Shours = '00';
    }

    if (Ehours === '12') {
      Ehours = '00';
    }

    if (Smodifier === 'PM') {
      Shours = parseInt(Shours, 10) + 12;
    }

    if (Emodifier === 'PM') {
      Ehours = parseInt(Ehours, 10) + 12;
    }

    let finished = false;

    while (!finished) {
      const MilitaryTime = Shours * 100 + parseInt(Sminutes, 10);
      const MilitaryEndTime = Ehours * 100 + parseInt(Eminutes, 10);
      console.log(MilitaryTime, MilitaryEndTime);
      if (MilitaryTime <= MilitaryEndTime) {
        if (MilitaryTime < 1200) {
          timesArray.push({
            key: MilitaryTime,
            value: (Shours % 12) + ':' + Sminutes + ' AM',
          });
        } else {
          var hour = Shours % 12;
          if (hour == 0) {
            timesArray.push({
              key: MilitaryTime,
              value: 12 + ':' + Sminutes + ' PM',
            });
          } else {
            timesArray.push({
              key: MilitaryTime,
              value: (Shours % 12) + ':' + Sminutes + ' PM',
            });
          }
        }

        if (Sminutes == '00') {
          Sminutes = '30';
          const MilitaryTime = Shours * 100 + parseInt(Sminutes, 10);
          if (MilitaryTime <= MilitaryEndTime) {
            if (MilitaryTime < 1200) {
              var hour = Shours % 12;
              console.log(hour);
              if (hour == 0) {
                timesArray.push({
                  key: MilitaryTime,
                  value: 12 + ':' + Sminutes + ' PM',
                });
              } else {
                timesArray.push({
                  key: MilitaryTime,
                  value: (Shours % 12) + ':' + Sminutes + ' PM',
                });
              }
            } else {
              var hour = Shours % 12;
              if (hour == 0) {
                timesArray.push({
                  key: MilitaryTime,
                  value: 12 + ':' + Sminutes + ' PM',
                });
              } else {
                timesArray.push({
                  key: MilitaryTime,
                  value: (Shours % 12) + ':' + Sminutes + ' PM',
                });
              }
            }
          }
        }
        Shours = parseInt(Shours, 10) + 1;
        Sminutes = '00';
      } else {
        finished = true;
      }
    }
    // const availableSlots = timesArray.filter( ( el ) => !docAppointments.includes( el.key ) );
    // console.log(availableSlots)
    setAllSlots(timesArray);
    setAvailableTime(timesArray);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const getAppointmentsBetweenDates = async (startDate, endDate, doctorId) => {
    try {
      console.log("getting snapshot ",snapshot)
      const snapshot = await firestore().collection('appointments')
        // .where('date', '>=', startDate)
        // .where('date', '<=', endDate)
        .where('doctorId', '==', doctorId)
        .get();
      console.log("snapshot ",snapshot)


      const appointments = [];
      snapshot.forEach((doc) => {
        appointments.push({ id: doc.id, ...doc.data() });
      });
      const filteredAppointments = appointments.filter((appointment) => {
        const appointmentDate = appointment.date.toDate();
        console.log(appointment.date)
        console.log(new Date(startDate), new Date(endDate), new Date(appointmentDate))
        // console.log("appointment date ",appointmentDate, startDate.toDate(), endDate.toDate())
        return (
          (new Date(appointmentDate) >= new Date(startDate)) && (new Date(appointmentDate) <= new Date(endDate))
        );
      });
      
      console.log("appointments are ",filteredAppointments)
      return filteredAppointments;
    } catch (error) {
      console.error('Error getting appointments:', error);
      return [];
    }
  };

  const getAppointments = async () => {

    // const todayDateString = date.getDate()+"-"+date.getMonth()+"-"+date.getUTCFullYear()
    const tempDate = new Date(date);
    const todayDateString = formatDate(tempDate);
    console.log(todayDateString)
    const currentDate = new Date(todayDateString);
    // currentDate.setHours(0,0,0,0);
    console.log('Date Changed', currentDate.toISOString())
    let nextDate = new Date();
    nextDate.setDate(currentDate.getDate() + 1);
    // nextDate.setHours(0,0,0,0);
    const nextDateString = formatDate(nextDate)
    console.log(nextDateString)
    nextDate = new Date(nextDateString)
    console.log('Next day date', nextDate.toISOString())

    let startDate = currentDate.toISOString();
    let endDate = nextDate.toISOString();
    // startDate = startDate.slice(0, startDate.length-5);
    // endDate = endDate.slice(0, endDate.length-1);
    try {
      console.log("Getting Doc appointment for ",doctorData.email)
      console.log("Getting Doc appointment for ",startDate, endDate)
      // console.log("url " +backendUrl + 'appointments/doc_queryDate/'+doctor.cnic )
      const response = await getAppointmentsBetweenDates(startDate, endDate,doctorData.email)
      // const response = await axios.post(backendUrl + 'appointments/doc_queryDate/'+doctor.cnic,{
      //   startDate,
      //   endDate
      // });
      // console.log(response.data);
      console.log(response);
      const allApp = response.filter( el => el.status == "pending" || el.status == "approved" );
      const timingArray = []
      allApp.forEach(element => {
        timingArray.push(element.time)
      });
      console.log(timingArray)
      // setDocAppointments(timingArray);
      const availableSlots = allSlots.filter( ( el ) => !timingArray.includes( ""+el.key ) );
      console.log("avalible slots ",availableSlots)
      setAvailableTime(availableSlots);
      // SetPopularDoctors(response.data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    createIntervals("10:30 AM", "5:30 PM");
    
  }, []);

  useEffect(() => {

    getAppointments();

  }, [date]);

  

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        width: '36.5%',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <TouchableOpacity
        style={{
          width: '70%',
          borderRadius: 50,
          backgroundColor: item.key == selectedTime.key ? 'green' : 'grey',
          borderWidth: 1,
          padding: 5,
        }}
        
        // disabled= {docAppointments.includes(item.key)}
        onPress={() => {
          setSelectedTime({key: item.key, value: item.value});
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#AAE3E2',
        marginTop: 0,
      }}>
      <Card
        style={{
          padding: 10,
          marginBottom: 15,
          borderRadius: 10,
          width: '90%',
          margin: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 5,
          }}>
          <Avatar.Image
            style={{marginTop: 'auto', marginBottom: 'auto'}}
            size={60}
            source={{ uri: `https://firebasestorage.googleapis.com/v0/b/dr-autism.appspot.com/o/Avatar%2F${doctorData.avatar}.jpg?alt=media` }}
            // source= { require (`../../../assets/Avatars/${doctorData.avatar}.jpg`)}
            // source={{ uri: doctor.profile? 'data:image/png;base64,'+doctor.profile: DummyAvatar }}
          />
          <Card.Content>
            <Text
              style={{
                fontSize: 18,
                color: '#6E85B7',
                fontWeight: 'bold',
              }}>
              {doctorData.username}
            </Text>
            <Text>{doctorData.email}</Text>
            <Text
              style={{
                marginTop: 5,
                fontStyle: 'italic',
                color: 'black',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* <Text>{doctor.days}</Text> */}
              {/* <Text> | </Text> */}
              <Text>
                10:30am - 5:30pm
                {/* {doctor.timeStart} - {doctor.timeEnd} */}
              </Text>
              <Text></Text>
            </Text>
          </Card.Content>
          <Text
            style={{
              fontSize: 15,
              color: '#A7727D',
              fontWeight: '700',
            }}>
            Rs. {doctorData.fee}
          </Text>
        </View>
      </Card>

      <View
        // style={{
        //   backgroundColor: '#E6EFF9',
        //   flex: 1,
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
          
        // }}
        style={{
            flex: 1,
            backgroundColor: '#FAF7F0',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          }}
        >
        
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              padding: 10,
            }}>
            <MaterialCommunityIcons
              name="calendar-outline"
              size={20}
              color="#16B3C0"
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: "#3A98B9"
              }}>
              Select Date:
            </Text>
          </View>

          {/* <View style={{ width: '80%'}}> */}
            <CalendarPicker onDateChange={setDate} minDate={new Date()} />
            {/* <Text>{selectedDate}</Text>
          </View> */}

          <Text style={{textAlign: 'center', color: '#16B3C0'}}>
            _________________________________________________________________
          </Text>
          <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >
          <View
            style={{
              flexDirection: 'row',
              marginTop: 4,
              padding: 10,
            }}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={20}
              color="#16B3C0"
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: "#3A98B9",
                marginBottom: 2
              }}>
              Select Time:
            </Text>
          </View>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 20,
            }}>
            <FlatList
              data={availableTime}
              renderItem={renderItem}
              numColumns={3}
              keyExtractor={item => item.key}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#16B3C0',
            padding: 12,
            borderRadius: 7,
            width: '90%',
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onPress={() => HandleAppointment()}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookAppointment;
