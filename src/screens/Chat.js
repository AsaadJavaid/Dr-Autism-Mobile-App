import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {collection, addDoc, orderBy, query, onSnapShot} from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function ChatScreen({navigation}) {
  const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            })))
      });

    // Stop listening for updates when no longer required
    return () => unsubscribe();
  }, [navigation]);

//   const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
//         const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
//             snapshot.docs.map(doc => ({
//                 _id: doc.data()._id,
//                 createdAt: doc.data().createdAt.toDate(),
//                 text: doc.data().text,
//                 user: doc.data().user,
//             }))
//         ));

    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user, } = messages[0]
        firestore()
            .collection('chats')
            .add({
                _id, createdAt,
                text, user
            })
            .then(() => {
                console.log('new message added');
            });
        // addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);



  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth().currentUser.uid,
        name: auth().currentUser.displayName,
        avatar: auth().currentUser.photoURL
        
      }}
    />
  )
}