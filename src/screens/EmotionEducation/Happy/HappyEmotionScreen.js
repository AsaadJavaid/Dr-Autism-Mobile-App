import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';


const audio1 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy1.wav'));
const audio2 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy2.wav'));
const audio3 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy3.wav'));
const audio4 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy4.wav'));
const audio5 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy5.wav'));
const audio6 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy6.wav'));
const audio7 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy7.wav'));
const audio8 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy8.wav'));
const audio9 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy9.wav'));
const audio10 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy10.wav'));
const audio11 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy11.wav'));
const audio12 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy12.wav'));
const audio13 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy13.wav'));
const audio14 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy14.wav'));
const audio15 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy15.wav'));
const audio16 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy16.wav'));
const audio17 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy17.wav'));
const audio18 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy18.wav'));
const audio19 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy19.wav'));
const audio20 = new Sound(require('../../../../assets/Emotions/Audio/Happy/happy20.wav'));




const HappyEmotionScreen = () => {
  const [image1, setImage1] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image2, setImage2] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image3, setImage3] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image4, setImage4] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image5, setImage5] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image6, setImage6] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image7, setImage7] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image8, setImage8] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image9, setImage9] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image10, setImage10] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image11, setImage11] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image12, setImage12] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image13, setImage13] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image14, setImage14] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image15, setImage15] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image16, setImage16] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image17, setImage17] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image18, setImage18] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image19, setImage19] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image20, setImage20] = useState(require('../../../../assets/Emotions/simple.jpg'));

  const [message1, setMessage1] = useState(' ');
  const [message2, setMessage2] = useState(' ');
  const [message3, setMessage3] = useState(' ');
  const [message4, setMessage4] = useState(' ');
  const [message5, setMessage5] = useState(' ');
  const [message6, setMessage6] = useState(' ');
  const [message7, setMessage7] = useState(' ');
  const [message8, setMessage8] = useState(' ');
  const [message9, setMessage9] = useState(' ');
  const [message10, setMessage10] = useState(' ');
  const [message11, setMessage11] = useState(' ');
  const [message12, setMessage12] = useState(' ');
  const [message13, setMessage13] = useState(' ');
  const [message14, setMessage14] = useState(' ');
  const [message15, setMessage15] = useState(' ');
  const [message16, setMessage16] = useState(' ');
  const [message17, setMessage17] = useState(' ');
  const [message18, setMessage18] = useState(' ');
  const [message19, setMessage19] = useState(' ');
  const [message20, setMessage20] = useState(' ');

  const playAudio1 = () => {
    setImage1(require('../../../../assets/Emotions/Images/Happy/happy1.jpg'));
    audio1.play((success) => {
      if (success) {
        setMessage1('Happy Man');
      } else {
        console.log('Error playing audio 1');
      }
    });
  };

  const playAudio2 = () => {
    setImage2(require('../../../../assets/Emotions/Images/Happy/happy3.jpg'));
    audio2.play((success) => {
      if (success) {
        setMessage2('Happy Man');
      } else {
        console.log('Error playing audio 2');
      }
    });
  };

  const playAudio3 = () => {
    setImage3(require('../../../../assets/Emotions/Images/Happy/happy5.jpg'));
    audio3.play((success) => {
      if (success) {
        setMessage3('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio4 = () => {
    setImage4(require('../../../../assets/Emotions/Images/Happy/happy6.jpg'));
    audio4.play((success) => {
      if (success) {
        setMessage4('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio5 = () => {
    setImage5(require('../../../../assets/Emotions/Images/Happy/happy7.jpg'));
    audio5.play((success) => {
      if (success) {
        setMessage5('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio6 = () => {
    setImage6(require('../../../../assets/Emotions/Images/Happy/happy12.jpg'));
    audio6.play((success) => {
      if (success) {
        setMessage6('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio7 = () => {
    setImage7(require('../../../../assets/Emotions/Images/Happy/happy17.jpg'));
    audio7.play((success) => {
      if (success) {
        setMessage7('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio8 = () => {
    setImage8(require('../../../../assets/Emotions/Images/Happy/happy18.jpg'));
    audio8.play((success) => {
      if (success) {
        setMessage8('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio9 = () => {
    setImage9(require('../../../../assets/Emotions/Images/Happy/happy19.jpg'));
    audio9.play((success) => {
      if (success) {
        setMessage9('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio10 = () => {
    setImage10(require('../../../../assets/Emotions/Images/Happy/happy20.jpg'));
    audio10.play((success) => {
      if (success) {
        setMessage10('Happy Man');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio11 = () => {
    setImage11(require('../../../../assets/Emotions/Images/Happy/happy2.jpg'));
    audio11.play((success) => {
      if (success) {
        setMessage11('Happy Woman');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio12 = () => {
    setImage12(require('../../../../assets/Emotions/Images/Happy/happy4.jpg'));
    audio12.play((success) => {
      if (success) {
        setMessage12('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio13 = () => {
    setImage13(require('../../../../assets/Emotions/Images/Happy/happy8.jpg'));
    audio13.play((success) => {
      if (success) {
        setMessage13('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio14 = () => {
    setImage14(require('../../../../assets/Emotions/Images/Happy/happy9.jpg'));
    audio14.play((success) => {
      if (success) {
        setMessage14('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio15 = () => {
    setImage15(require('../../../../assets/Emotions/Images/Happy/happy10.jpg'));
    audio15.play((success) => {
      if (success) {
        setMessage15('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio16 = () => {
    setImage16(require('../../../../assets/Emotions/Images/Happy/happy11.jpg'));
    audio16.play((success) => {
      if (success) {
        setMessage16('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio17 = () => {
    setImage17(require('../../../../assets/Emotions/Images/Happy/happy13.jpg'));
    audio17.play((success) => {
      if (success) {
        setMessage17('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio18 = () => {
    setImage18(require('../../../../assets/Emotions/Images/Happy/happy14.jpg'));
    audio18.play((success) => {
      if (success) {
        setMessage18('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio19 = () => {
    setImage19(require('../../../../assets/Emotions/Images/Happy/happy15.jpg'));
    audio19.play((success) => {
      if (success) {
        setMessage19('Happy Woman');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio20 = () => {
    setImage20(require('../../../../assets/Emotions/Images/Happy/happy16.jpg'));
    audio20.play((success) => {
      if (success) {
        setMessage20('Happy Women');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  return (
      <View style={{backgroundColor: "#FFF8DE"}}>
        <View style={styles.topTextView}>
          <View style={{ flexDirection: "row", justifyContent: "center", margin: 20, backgroundColor: "#FFF8DE", borderTopLeftRadius: 10, borderBottomLeftRadius: 30, borderTopRightRadius: 10, borderBottomRightRadius: 30, height: 90, alignItems: "center" }}>
            <Text style={styles.topText}>Please Tap on Images</Text>
          </View>
        </View>

        <ScrollView style={{marginBottom : 100}}>
          <View style={{ flex: 1, alignItems: 'center', backgroundColor : "#FFF8DE" , justifyContent: 'center', marginVertical: 20 }}>
{/* 1 */}
            <View style={[styles.imageBack, {backgroundColor : "#C67ACE"}]}>
              <TouchableOpacity onPress={playAudio1}>
                <Image style= {styles.imageFront} source={image1} />
                <Text style={styles.messageText}>{message1}</Text>
              </TouchableOpacity>
            </View>
{/* 2 */}
            <View style={[styles.imageBack, {backgroundColor : "#28DF99"}]}>
              <TouchableOpacity onPress={playAudio2}>
                <Image style= {styles.imageFront} source={image2} />
                <Text style={styles.messageText}>{message2}</Text>
              </TouchableOpacity>
            </View>
{/* 3 */}
            <View style={[styles.imageBack, {backgroundColor : "#FFCB74"}]}>
              <TouchableOpacity onPress={playAudio3}>
                <Image style= {styles.imageFront} source={image3} />
                <Text style={styles.messageText}>{message3}</Text>
              </TouchableOpacity>
            </View>
{/* 4 */}
            <View style={[styles.imageBack, {backgroundColor : "#E7305B"}]}>
              <TouchableOpacity onPress={playAudio4}>
                <Image style= {styles.imageFront} source={image4} />
                <Text style={styles.messageText}>{message4}</Text>
              </TouchableOpacity>
            </View>
{/* 5 */}
            <View style={[styles.imageBack, {backgroundColor : "#FF75A0"}]}>
              <TouchableOpacity onPress={playAudio5}>
                <Image style= {styles.imageFront} source={image5} />
                <Text style={styles.messageText}>{message5}</Text>
              </TouchableOpacity>
            </View>
{/* 6 */}
            <View style={[styles.imageBack, {backgroundColor : "#75CFB8"}]}>
              <TouchableOpacity onPress={playAudio6}>
                <Image style= {styles.imageFront} source={image6} />
                <Text style={styles.messageText}>{message6}</Text>
              </TouchableOpacity>
            </View>
{/* 7 */}
            <View style={[styles.imageBack, {backgroundColor : "#D68060"}]}>
              <TouchableOpacity onPress={playAudio7}>
                <Image style= {styles.imageFront} source={image7} />
                <Text style={styles.messageText}>{message7}</Text>
              </TouchableOpacity>
            </View>
{/* 8 */}
            <View style={[styles.imageBack, {backgroundColor : "#28DF99"}]}>
              <TouchableOpacity onPress={playAudio8}>
                <Image style= {styles.imageFront} source={image8} />
                <Text style={styles.messageText}>{message8}</Text>
              </TouchableOpacity>
            </View>
{/* 9 */}
            <View style={[styles.imageBack, {backgroundColor : "#FF8DC7"}]}>
              <TouchableOpacity onPress={playAudio9}>
                <Image style= {styles.imageFront} source={image9} />
                <Text style={styles.messageText}>{message9}</Text>
              </TouchableOpacity>
            </View>
{/* 10 */}
            <View style={[styles.imageBack, {backgroundColor : "#F47C7C"}]}>
              <TouchableOpacity onPress={playAudio10}>
                <Image style= {styles.imageFront} source={image10} />
                <Text style={styles.messageText}>{message10}</Text>
              </TouchableOpacity>
            </View>
{/* 11 */}
            <View style={[styles.imageBack, {backgroundColor : "#F0997D"}]}>
              <TouchableOpacity onPress={playAudio11}>
                <Image style= {styles.imageFront} source={image11} />
                <Text style={styles.messageText}>{message11}</Text>
              </TouchableOpacity>
            </View>
{/* 12 */}
            <View style={[styles.imageBack, {backgroundColor : "#009FBD"}]}>
              <TouchableOpacity onPress={playAudio12}>
                <Image style= {styles.imageFront} source={image12} />
                <Text style={styles.messageText}>{message12}</Text>
              </TouchableOpacity>
            </View>
{/* 13 */}
            <View style={[styles.imageBack, {backgroundColor : "#9A208C"}]}>
              <TouchableOpacity onPress={playAudio13}>
                <Image style= {styles.imageFront} source={image13} />
                <Text style={styles.messageText}>{message13}</Text>
              </TouchableOpacity>
            </View>
{/* 14 */}
            <View style={[styles.imageBack, {backgroundColor : "#41644A"}]}>
              <TouchableOpacity onPress={playAudio14}>
                <Image style= {styles.imageFront} source={image14} />
                <Text style={styles.messageText}>{message14}</Text>
              </TouchableOpacity>
            </View>
{/* 15 */}
            <View style={[styles.imageBack, {backgroundColor : "#EA5455"}]}>
              <TouchableOpacity onPress={playAudio15}>
                <Image style= {styles.imageFront} source={image15} />
                <Text style={styles.messageText}>{message15}</Text>
              </TouchableOpacity>
            </View>
{/* 16 */}
            <View style={[styles.imageBack, {backgroundColor : "#E11299"}]}>
              <TouchableOpacity onPress={playAudio16}>
                <Image style= {styles.imageFront} source={image16} />
                <Text style={styles.messageText}>{message16}</Text>
              </TouchableOpacity>
            </View>
{/* 17 */}
            <View style={[styles.imageBack, {backgroundColor : "#CE5959"}]}>
              <TouchableOpacity onPress={playAudio17}>
                <Image style= {styles.imageFront} source={image17} />
                <Text style={styles.messageText}>{message17}</Text>
              </TouchableOpacity>
            </View>
{/* 18 */}
            <View style={[styles.imageBack, {backgroundColor : "#579BB1"}]}>
              <TouchableOpacity onPress={playAudio18}>
                <Image style= {styles.imageFront} source={image18} />
                <Text style={styles.messageText}>{message18}</Text>
              </TouchableOpacity>
            </View>
{/* 19 */}
            <View style={[styles.imageBack, {backgroundColor : "#763857"}]}>
              <TouchableOpacity onPress={playAudio19}>
                <Image style= {styles.imageFront} source={image19} />
                <Text style={styles.messageText}>{message19}</Text>
              </TouchableOpacity>
            </View>
{/* 20 */}
            <View style={[styles.imageBack, {backgroundColor : "#65D6CE"}]}>
              <TouchableOpacity onPress={playAudio20}>
                <Image style= {styles.imageFront} source={image20} />
                <Text style={styles.messageText}>{message20}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontSize : 25,
    margin: 15,
    fontWeight: "bold",
    color: "black",
  },
  topTextView: {
    backgroundColor: "#16B3C0",
    width: "100%",
    height: "16%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
  },
  topText: {
    fontSize : 30,
    fontWeight: "bold",
    fontFamily : "Verdana",
    color: "#16B3C0"
  },
  imageBack: {
    width : "80%",
    alignItems: "center",
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    borderBottomLeftRadius : 40,
    borderBottomRightRadius : 40,
    marginBottom: 20
  },
  imageFront: {
    width : 200,
    height : 200,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    borderBottomLeftRadius : 40,
    borderBottomRightRadius : 40,
    marginVertical : 10,
  },
})

export default HappyEmotionScreen;