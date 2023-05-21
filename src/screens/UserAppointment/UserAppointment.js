import React, {useState, useEffect, useContext} from 'react';
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
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import {Avatar, Card, Title, IconButton} from 'react-native-paper';
import createAvatarObject from '../Util/CreateAvatar';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {white} from 'react-native-paper/lib/typescript/styles/colors';

const Doctors = ({navigation, route}) => {
  //const {doctor, setDoctor, backendUrl, selectedCat, setSelectedCat} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [allDocs, setAllDocs] = useState([]);
  const [popular, setPopular] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [doctor, setDoctor] = useState([]);
  const [doctorAvatar, setDoctorAvatar] = useState(null)

  // const searchCategory = route.params?.searchCategory;
  // const [cat, setCat] = useState(searchCategory);
  

    const getDoc = async () => {
      const tempList = []
      await firestore()
        .collection('users')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(doc => {
            const { username, email, avatar, fee, role } = doc.data()
            tempList.push({
              id: doc.id,
              avatar,
              username,
              fee,
              email,
              role, 
            })
          });
          // setDocList(tempList)
          console.log("The Doctor Data is ", tempList)
          setDoctor(tempList)
          // setLoading(false)
        })
    }


  const getDocByCat = async (cat) => {
    try {
      console.log("Getting Docs by cat", cat)
      const response = await axios.post(backendUrl + 'doctors/search/speciality/'+cat.title);
      // console.log(response.data);
      // console.log(response.data);
      setPopular(response.data);
      setAllDocs(response.data)
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      logout()
    }
  }

  const filterByName = async (name) => {
    console.log(name)
    const filteredDoc = allDocs.filter(o => o.Record.name.toLowerCase().includes(name.toLowerCase()));
      console.log("filteredDoc ", filteredDoc.length)
      setPopular(filteredDoc)
  }
  
  const doctorDetails = element => {
    setDoctor(element.Record);
    // setDoctorData(element);
    console.log(element.Record);
    navigation.navigate('Doctor Details');
  };

  const bookAppointment = element => {
    // setDoctor(element.Record);
    // setDoctorData(element);
    console.log(element);
    navigation.navigate('Book Appointment', {doctor: element});
  };
  // const PopularDoctors = [
  //   {
  //     key: 0,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 1,
  //     name: 'Dr. Arif Shahzad',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 2000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 2,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 3,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 4,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 5,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 5,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 6,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  //   {
  //     key: 7,
  //     name: 'Dr. Saima Riaz',
  //     specialization: 'Heart Surgeon',
  //     avatar: require('../assets/avatar2.jpg'),
  //     price: 'Rs. 1000/-',
  //     startTime: '10 AM',
  //     endTime: '4 PM',
  //     days: 'Mon - Fri',
  //   },
  // ];


  useEffect(() => {
      getDoc();
      console.log("getting avatar")
      setDoctorAvatar(createAvatarObject());
  },[]);

  const renderItem = ({item}) => (
    (item.role == "Doctor") && <Card
    style={{
      padding: 10,
      marginBottom: 15,
      borderRadius: 10,
    }}
    onPress={() => doctorDetails(item)}>
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
      }}>
      <Avatar.Image
        style={{marginTop: 'auto', marginBottom: 'auto'}}
        size={60}
        // source= { require ('../../../assets/Avatars/1.jpg')}
        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/dr-autism.appspot.com/o/Avatar%2F${item.avatar}.jpg?alt=media` }}
      />
      <Card.Content>
        <Text
          style={{
            fontSize: 18,
            color: '#6E85B7',
            fontWeight: 'bold',
          }}>
          {item.username}
        </Text>
        <Text>{item.email}</Text>
        <Text
          style={{
            marginTop: 5,
            fontStyle: 'italic',
            color: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* <Text>{item.Record.timeStart} - {item.Record.timeEnd}</Text> */}
          <Text></Text>
        </Text>
      </Card.Content>
      <Text
        style={{
          fontSize: 15,
          color: '#A7727D',
          fontWeight: '700',
        }}>
        Rs. {item.fee} /-
      </Text>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#B2A4FF',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }} onPress={() => bookAppointment(item)}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Confirm
      </Text>
    </TouchableOpacity>
  </Card>
    
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#E6EFF9',
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row', backgroundColor: "#E6EFF9"}}>

        
        <TextInput
          placeholder="Search"
          style={{
            padding: 10,
            backgroundColor: '#AAE3E2',
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 5,
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 3,
          }} 
          onChangeText={text => {
            console.log("setting search text")
            setSearchText(text)
            }}
          value={searchText}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#16B3C0',
              padding: 10,
              borderRadius: 5,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }} onPress={() => filterByName(searchText)}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>

        {/* {selectedCat && 

        <Card
          style={{
            margin: 10,
            padding: 10,
            marginBottom: 15,
            borderRadius: 10,
          }}
          
          >
          <View
            style={{
              padding: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar.Image size={30} source={selectedCat.avatar} />
          
            <Card.Content style={{ alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {selectedCat.title}
              </Text>
            </Card.Content>
            
          

          <TouchableOpacity
            style={{
              backgroundColor: '#f74545',
              padding: 5,
              borderRadius: 5,
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 5,
            }} onPress={() => {setSelectedCat(null)}}>
           
            <MaterialCommunityIcons
              name="close"
              size={20}
              color="white"
              style={{fontWeight: 'bold'}}
            />
          </TouchableOpacity>
          </View>
        </Card>
        
          
      } */}

      <View
        style={{
          marginTop: 15,
          backgroundColor: '#AAE3E2',
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
        }}>
        <View>
          <FlatList
            data={doctor}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Doctors;
