// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal } from 'react-native';

// const questions = [
//   {
//     id: 1,
//     question: 'Question 1: Is X true?',
//   },
//   {
//     id: 2,
//     question: 'Question 2: Is Y true?',
//   },
//   {
//     id: 3,
//     question: 'Question 3: Is Y true?',
//   },
//   {
//     id: 4,
//     question: 'Question 4: Is Y true?',
//   },
//   {
//     id: 5,
//     question: 'Question 5: Is Y true?',
//   },
//   {
//     id: 6,
//     question: 'Question 6: Is Y true?',
//   },
//   {
//     id: 7,
//     question: 'Question 7: Is Y true?',
//   },
//   {
//     id: 8,
//     question: 'Question 8: Is Y true?',
//   },
//   {
//     id: 9,
//     question: 'Question 9: Is Y true?',
//   },
//   {
//     id: 10,
//     question: 'Question 10: Is Y true?',
//   },
//   // Add more questions here...
// ];

// const QuizTest = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleAnswer = (optionIndex) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentQuestion] = optionIndex;
//     setAnswers(updatedAnswers);
//   };

//   const calculatePercentage = () => {
//     const totalQuestions = questions.length;
//     const yesCount = answers.filter((answer) => answer === 1).length;
//     const percentage = (yesCount / totalQuestions) * 100;
//     return percentage;
//   };

//   const getMessage = (percentage) => {
//     if (percentage < 20) {
//       return 'Very Less';
//     } else if (percentage >= 20 && percentage < 50) {
//       return 'Less';
//     } else if (percentage >= 50 && percentage < 75) {
//       return 'Severe';
//     } else {
//       return 'Very Severe';
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowModal(true);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {currentQuestion < questions.length && (
//         <View>
//           <Text>{questions[currentQuestion].question}</Text>
//           <TouchableOpacity
//             style={{ backgroundColor: answers[currentQuestion] === 1 ? 'green' : 'transparent' }}
//             onPress={() => handleAnswer(1)}
//           >
//             <Text style={{ color: answers[currentQuestion] === 1 ? 'white' : 'black' }}>Yes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{ backgroundColor: answers[currentQuestion] === 0 ? 'red' : 'transparent' }}
//             onPress={() => handleAnswer(0)}
//           >
//             <Text style={{ color: answers[currentQuestion] === 0 ? 'white' : 'black' }}>No</Text>
//           </TouchableOpacity>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <TouchableOpacity onPress={handlePrevious}>
//               <Text>Previous</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleNext}>
//               <Text>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//       <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Done</Text>
//           <Text>
//             Percentage of "Yes" answers: {calculatePercentage().toFixed(2)}%
//           </Text>
//           <Text>Message: {getMessage(calculatePercentage())}</Text>
//           <TouchableOpacity onPress={() => setShowModal(false)}>
//             <Text>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default QuizTest;



///////////////////////////////
//////////////////////////////

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const questions = [
  {
    id: 1,
    question: 'Does your child repeat the same actions or behaviors over and over again?',
  },
  {
    id: 2,
    question: 'Does your child find it hard to make friends or understand others feelings?',
  },
    {
      id: 3,
      question: 'Does your child struggle with talking or using words to communicate?',
    },
    {
      id: 4,
      question: 'Does your child need to follow the same routines or get upset with changes?',
    },
    {
      id: 5,
      question: 'Does your child have strong likes or interests in specific things?',
    },
    {
      id: 6,
      question: 'Does your child get bothered by certain sounds, textures, or lights?',
    },
    {
      id: 7,
      question: 'Does your child find it difficult to switch from one activity to another?',
    },
    {
      id: 8,
      question: 'Does your child have trouble balancing or coordinating movements?',
    },
    {
      id: 9,
      question: 'Does your child have a hard time understanding jokes or sarcasm?',
    },
    {
      id: 10,
      question: 'Does your child avoid looking at peoples faces or making eye contact?',
    },
    {
      id: 11,
      question: 'Does your child repeat words or phrases they hear from others?',
    },
    {
      id: 12,
      question: 'Does your child get upset when things are not organized in a certain way?',
    },
    {
      id: 13,
      question: 'Does your child have trouble understanding simple instructions or questions?',
    },
    {
      id: 14,
      question: 'Does your child prefer to play alone rather than with other children?',
    },
    {
      id: 15,
      question: 'Does your child have unusual ways of playing with toys or objects?',
    },
    {
      id: 16,
      question: 'Does your child flap their hands, rock their body, or engage in repetitive movements?',
    },
    {
      id: 17,
      question: 'Does your child get upset by changes in their daily routine?',
    },
    {
      id: 18,
      question: 'Does your child have difficulty understanding personal space boundaries?',
    },
    {
      id: 19,
      question: 'Does your child struggle with following directions or rules?',
    },
    {
      id: 20,
      question: 'Does your child have trouble expressing their needs or emotions verbally?',
    },
  // Add more questions here...
];

const QuizTest = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAnswer = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const calculatePercentage = () => {
    const totalQuestions = questions.length;
    const yesCount = answers.filter((answer) => answer === 1).length;
    const percentage = (yesCount / totalQuestions) * 100;
    return percentage;
  };

  const getMessage = (percentage) => {
    if (percentage < 20) {
      return (
        <Text style={{ color: 'green', fontWeight: 'bold' }}>Very Less.</Text>
      );
    } else if (percentage >= 20 && percentage < 50) {
      return (
        <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Less.</Text>
      );
    } else if (percentage >= 50 && percentage < 75) {
      return (
        <Text style={{ color: 'orange', fontWeight: 'bold' }}>Severe.</Text>
      );
    } else {
      return (
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Very Severe.</Text>
      );
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigation.navigate('Detection'); // Replace 'Detection' with your desired screen name
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"white" }}>
      {currentQuestion < questions.length && (
        <View style={{backgroundColor:"#F9F3DF",shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10, margin:10, borderRadius:20}}>
          <Text style={{fontSize:25, color:"#9A86A4", marginBottom:10, fontWeight:"bold", margin:20}}>{questions[currentQuestion].question}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
              onPress={() => handleAnswer(1)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  borderWidth: 1,
                  marginRight: 5,
                  margin:20,
                  borderColor: answers[currentQuestion] === 1 ? 'green' : 'gray',
                  backgroundColor: answers[currentQuestion] === 1 ? 'green' : 'transparent',
                }}
              />
              <Text style={{fontSize:20}}>Yes</Text>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => handleAnswer(0)}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  borderWidth: 1,
                  marginRight: 5,
                  margin:20,
                  borderColor: answers[currentQuestion] === 0 ? 'red' : 'gray',
                  backgroundColor: answers[currentQuestion] === 0 ? 'red' : 'transparent',
                }}
              />
              <Text style={{fontSize:20}}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={handlePrevious}>
              <Text style={{backgroundColor:"#AD8B73", margin:20, padding:20, color:"white", fontSize:20, borderRadius:20}}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <Text style={{backgroundColor:"#F47C7C", margin:20, padding:20, color:"white", fontSize:20, borderRadius:20}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F9F3DF", margin: 50, padding: 50, borderRadius: 100,shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10, }}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"#FF9999"}}>☠ Results ☠</Text>
          {/* <Text>Percentage: {calculatePercentage()}%</Text> */}
          <Text style={{backgroundColor: "#98DDCA", margin: 10, padding: 20, borderRadius: 20,shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,fontSize:15, color: "#E93B81"}}>Based on the responses provided, the likelihood of autism appears to be:- {getMessage(calculatePercentage())}</Text>
          <Text style={{color:"#B980F0", margin: 20}}>However, it is important to note that these questions serve as a preliminary screening tool and should not be considered a definitive diagnosis. For a comprehensive assessment, we recommend consulting with a qualified healthcare professional or specialist experienced in autism diagnosis. They can provide a thorough evaluation and offer appropriate guidance based on your child's unique situation.</Text>
          <TouchableOpacity style={{backgroundColor: "#84DFFF", margin: 20, padding: 20, borderRadius: 20,shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 10,}} onPress={handleClose}>
            <Text style={{color:"red", fontSize: 20}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default QuizTest;
