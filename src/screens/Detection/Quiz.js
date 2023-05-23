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
    question: 'Question 1: Is X true?',
  },
  {
    id: 2,
    question: 'Question 2: Is Y true?',
  },
    {
      id: 3,
      question: 'Question 3: Is Y true?',
    },
    {
      id: 4,
      question: 'Question 4: Is Y true?',
    },
    {
      id: 5,
      question: 'Question 5: Is Y true?',
    },
    {
      id: 6,
      question: 'Question 6: Is Y true?',
    },
    {
      id: 7,
      question: 'Question 7: Is Y true?',
    },
    {
      id: 8,
      question: 'Question 8: Is Y true?',
    },
    {
      id: 9,
      question: 'Question 9: Is Y true?',
    },
    {
      id: 10,
      question: 'Question 10: Is Y true?',
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
        <Text style={{ color: 'green', fontWeight: 'bold' }}>Very Less</Text>
      );
    } else if (percentage >= 20 && percentage < 50) {
      return (
        <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Less</Text>
      );
    } else if (percentage >= 50 && percentage < 75) {
      return (
        <Text style={{ color: 'orange', fontWeight: 'bold' }}>Severe</Text>
      );
    } else {
      return (
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Very Severe</Text>
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {currentQuestion < questions.length && (
        <View>
          <Text>{questions[currentQuestion].question}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
              onPress={() => handleAnswer(1)}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  marginRight: 5,
                  borderColor: answers[currentQuestion] === 1 ? 'green' : 'gray',
                  backgroundColor: answers[currentQuestion] === 1 ? 'green' : 'transparent',
                }}
              />
              <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => handleAnswer(0)}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  marginRight: 5,
                  borderColor: answers[currentQuestion] === 0 ? 'red' : 'gray',
                  backgroundColor: answers[currentQuestion] === 0 ? 'red' : 'transparent',
                }}
              />
              <Text>No</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={handlePrevious}>
              <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Done</Text>
          <Text>Percentage: {calculatePercentage()}%</Text>
          <Text>Severity: {getMessage(calculatePercentage())}</Text>
          <TouchableOpacity onPress={handleClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default QuizTest;
