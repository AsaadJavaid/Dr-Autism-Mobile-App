import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';


const audio1 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angry1.mp3'));
const audio2 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angry2.mp3'));
const audio3 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angry3.mp3'));
const audio4 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angryshout1.mp3'));
const audio5 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angryshout2.mp3'));
const audio6 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angryshout3.mp3'));
const audio7 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angryshout4.mp3'));
const audio8 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angryshout5.mp3'));
const audio9 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angrytalk1.mp3'));
const audio10 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angrytalk2.mp3'));
const audio11 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Angry/angrytalk3.mp3'));


const audio12 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/babyScream.mp3'));
const audio13 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/cartoonScream.mp3'));
const audio14 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/femaleScream1.mp3'));
const audio15 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/femaleScream2.mp3'));
const audio16 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/maleScream1.mp3'));
const audio17 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Fear/maleScream2.mp3'));


const audio18 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/babyLaugh.wav'));
const audio19 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/cartoonLaugh1.wav'));
const audio20 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/cartoonLaugh2.wav'));
const audio21 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/femaleLaugh.wav'));
const audio22 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/happyFemaleTalk.mp3'));
const audio23 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Happy/maleLaugh.mp3'));


const audio24 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Sad/babyCry.mp3'));
const audio25 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Sad/boyCry.mp3'));
const audio26 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Sad/boyPainTalk.mp3'));
const audio27 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Sad/cartoonCry.mp3'));
const audio28 = new Sound(require('../../../../assets/Emotions/Audio/MIX/Sad/girlSadTalk.mp3'));




const MixEmotionScreen = () => {
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
  const [image21, setImage21] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image22, setImage22] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image23, setImage23] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image24, setImage24] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image25, setImage25] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image26, setImage26] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image27, setImage27] = useState(require('../../../../assets/Emotions/simple.jpg'));
  const [image28, setImage28] = useState(require('../../../../assets/Emotions/simple.jpg'));


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
  const [message21, setMessage21] = useState(' ');
  const [message22, setMessage22] = useState(' ');
  const [message23, setMessage23] = useState(' ');
  const [message24, setMessage24] = useState(' ');
  const [message25, setMessage25] = useState(' ');
  const [message26, setMessage26] = useState(' ');
  const [message27, setMessage27] = useState(' ');
  const [message28, setMessage28] = useState(' ');

  const playAudio1 = () => {
    setImage1(require('../../../../assets/Emotions/Images/MIX/Angry/angry1.jpg'));
    audio1.play((success) => {
      if (success) {
        setMessage1('Angry Man Grunts');
      } else {
        console.log('Error playing audio 1');
      }
    });
  };

  const playAudio2 = () => {
    setImage2(require('../../../../assets/Emotions/Images/MIX/Angry/angry2.jpg'));
    audio2.play((success) => {
      if (success) {
        setMessage2('Angry Man Grunts');
      } else {
        console.log('Error playing audio 2');
      }
    });
  };

  const playAudio3 = () => {
    setImage3(require('../../../../assets/Emotions/Images/MIX/Angry/angry3.jpg'));
    audio3.play((success) => {
      if (success) {
        setMessage3('Angry Man Laugh');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio4 = () => {
    setImage4(require('../../../../assets/Emotions/Images/MIX/Angry/angryshout1.jpg'));
    audio4.play((success) => {
      if (success) {
        setMessage4('Shout Angrily');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio5 = () => {
    setImage5(require('../../../../assets/Emotions/Images/MIX/Angry/angryshout2.jpg'));
    audio5.play((success) => {
      if (success) {
        setMessage5('Talk Angrily');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio6 = () => {
    setImage6(require('../../../../assets/Emotions/Images/MIX/Angry/angryshout3.jpg'));
    audio6.play((success) => {
      if (success) {
        setMessage6('Talk Angrily');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio7 = () => {
    setImage7(require('../../../../assets/Emotions/Images/MIX/Angry/angryshout4.jpg'));
    audio7.play((success) => {
      if (success) {
        setMessage7('Angrily Shout');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio8 = () => {
    setImage8(require('../../../../assets/Emotions/Images/MIX/Angry/angryshout5.jpg'));
    audio8.play((success) => {
      if (success) {
        setMessage8('Angrily Talk');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio9 = () => {
    setImage9(require('../../../../assets/Emotions/Images/MIX/Angry/angrytalk1.jpg'));
    audio9.play((success) => {
      if (success) {
        setMessage9('Speaking in anger');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio10 = () => {
    setImage10(require('../../../../assets/Emotions/Images/MIX/Angry/angrytalk2.jpg'));
    audio10.play((success) => {
      if (success) {
        setMessage10('Angry Woman talk');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio11 = () => {
    setImage11(require('../../../../assets/Emotions/Images/MIX/Angry/angrytalk3.jpg'));
    audio11.play((success) => {
      if (success) {
        setMessage11('Angry Man Talk');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio12 = () => {
    setImage12(require('../../../../assets/Emotions/Images/MIX/Fear/babyScream.jpg'));
    audio12.play((success) => {
      if (success) {
        setMessage12('Baby Scream');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio13 = () => {
    setImage13(require('../../../../assets/Emotions/Images/MIX/Fear/cartoonScream.jpg'));
    audio13.play((success) => {
      if (success) {
        setMessage13('Cartoon Scream');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio14 = () => {
    setImage14(require('../../../../assets/Emotions/Images/MIX/Fear/femaleScream1.jpg'));
    audio14.play((success) => {
      if (success) {
        setMessage14('Female Screaming');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio15 = () => {
    setImage15(require('../../../../assets/Emotions/Images/MIX/Fear/femaleScream2.jpg'));
    audio15.play((success) => {
      if (success) {
        setMessage15('Female Slight Scream');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio16 = () => {
    setImage16(require('../../../../assets/Emotions/Images/MIX/Fear/maleScream1.jpg'));
    audio16.play((success) => {
      if (success) {
        setMessage16('Male Painful Scream');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio17 = () => {
    setImage17(require('../../../../assets/Emotions/Images/MIX/Fear/maleScream2.jpg'));
    audio17.play((success) => {
      if (success) {
        setMessage17('Male Screaming');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio18 = () => {
    setImage18(require('../../../../assets/Emotions/Images/MIX/Happy/babyLaugh.jpg'));
    audio18.play((success) => {
      if (success) {
        setMessage18('Baby Laughing');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio19 = () => {
    setImage19(require('../../../../assets/Emotions/Images/MIX/Happy/cartoonLaugh1.jpg'));
    audio19.play((success) => {
      if (success) {
        setMessage19('Cartoon Laughing');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio20 = () => {
    setImage20(require('../../../../assets/Emotions/Images/MIX/Happy/cartoonLaugh2.jpg'));
    audio20.play((success) => {
      if (success) {
        setMessage20('Female Laughing');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio21 = () => {
    setImage21(require('../../../../assets/Emotions/Images/MIX/Happy/femaleLaugh.jpg'));
    audio21.play((success) => {
      if (success) {
        setMessage21('Girl Laughing');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio22 = () => {
    setImage22(require('../../../../assets/Emotions/Images/MIX/Happy/happyFemaleTalk.jpg'));
    audio22.play((success) => {
      if (success) {
        setMessage22('Female talking pleasently');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio23 = () => {
    setImage23(require('../../../../assets/Emotions/Images/MIX/Happy/maleLaugh.jpg'));
    audio23.play((success) => {
      if (success) {
        setMessage23('Male Laughing');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio24 = () => {
    setImage24(require('../../../../assets/Emotions/Images/MIX/Sad/babyCry.jpg'));
    audio24.play((success) => {
      if (success) {
        setMessage24('Baby Crying');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio25 = () => {
    setImage25(require('../../../../assets/Emotions/Images/MIX/Sad/boyCry.jpg'));
    audio25.play((success) => {
      if (success) {
        setMessage25('Boy Crying');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio26 = () => {
    setImage26(require('../../../../assets/Emotions/Images/MIX/Sad/boyPainTalk.jpg'));
    audio26.play((success) => {
      if (success) {
        setMessage26('Man Talking in Pain');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio27 = () => {
    setImage27(require('../../../../assets/Emotions/Images/MIX/Sad/cartoonCry.jpg'));
    audio27.play((success) => {
      if (success) {
        setMessage27('Cartoon Crying');
      } else {
        console.log('Error playing audio 3');
      }
    });
  };

  const playAudio28 = () => {
    setImage28(require('../../../../assets/Emotions/Images/MIX/Sad/girlSadTalk.jpg'));
    audio28.play((success) => {
      if (success) {
        setMessage28('Girl Talking Scaredly');
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
              <TouchableOpacity onPress={playAudio1} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image1} />
                <Text style={styles.messageText}>{message1}</Text>
              </TouchableOpacity>
            </View>
{/* 2 */}
            <View style={[styles.imageBack, {backgroundColor : "#28DF99"}]}>
              <TouchableOpacity onPress={playAudio2} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image2} />
                <Text style={styles.messageText}>{message2}</Text>
              </TouchableOpacity>
            </View>
{/* 3 */}
            <View style={[styles.imageBack, {backgroundColor : "#FFCB74"}]}>
              <TouchableOpacity onPress={playAudio3} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image3} />
                <Text style={styles.messageText}>{message3}</Text>
              </TouchableOpacity>
            </View>
{/* 4 */}
            <View style={[styles.imageBack, {backgroundColor : "#E7305B"}]}>
              <TouchableOpacity onPress={playAudio4} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image4} />
                <Text style={styles.messageText}>{message4}</Text>
              </TouchableOpacity>
            </View>
{/* 5 */}
            <View style={[styles.imageBack, {backgroundColor : "#FF75A0"}]}>
              <TouchableOpacity onPress={playAudio5} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image5} />
                <Text style={styles.messageText}>{message5}</Text>
              </TouchableOpacity>
            </View>
{/* 6 */}
            <View style={[styles.imageBack, {backgroundColor : "#75CFB8"}]}>
              <TouchableOpacity onPress={playAudio6} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image6} />
                <Text style={styles.messageText}>{message6}</Text>
              </TouchableOpacity>
            </View>
{/* 7 */}
            <View style={[styles.imageBack, {backgroundColor : "#D68060"}]}>
              <TouchableOpacity onPress={playAudio7} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image7} />
                <Text style={styles.messageText}>{message7}</Text>
              </TouchableOpacity>
            </View>
{/* 8 */}
            <View style={[styles.imageBack, {backgroundColor : "#28DF99"}]}>
              <TouchableOpacity onPress={playAudio8} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image8} />
                <Text style={styles.messageText}>{message8}</Text>
              </TouchableOpacity>
            </View>
{/* 9 */}
            <View style={[styles.imageBack, {backgroundColor : "#FF8DC7"}]}>
              <TouchableOpacity onPress={playAudio9} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image9} />
                <Text style={styles.messageText}>{message9}</Text>
              </TouchableOpacity>
            </View>
{/* 10 */}
            <View style={[styles.imageBack, {backgroundColor : "#F47C7C"}]}>
              <TouchableOpacity onPress={playAudio10} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image10} />
                <Text style={styles.messageText}>{message10}</Text>
              </TouchableOpacity>
            </View>
{/* 11 */}
            <View style={[styles.imageBack, {backgroundColor : "#F0997D"}]}>
              <TouchableOpacity onPress={playAudio11} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image11} />
                <Text style={styles.messageText}>{message11}</Text>
              </TouchableOpacity>
            </View>
{/* 12 */}
            <View style={[styles.imageBack, {backgroundColor : "#009FBD"}]}>
              <TouchableOpacity onPress={playAudio12} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image12} />
                <Text style={styles.messageText}>{message12}</Text>
              </TouchableOpacity>
            </View>
{/* 13 */}
            <View style={[styles.imageBack, {backgroundColor : "#9A208C"}]}>
              <TouchableOpacity onPress={playAudio13} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image13} />
                <Text style={styles.messageText}>{message13}</Text>
              </TouchableOpacity>
            </View>
{/* 14 */}
            <View style={[styles.imageBack, {backgroundColor : "#41644A"}]}>
              <TouchableOpacity onPress={playAudio14} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image14} />
                <Text style={styles.messageText}>{message14}</Text>
              </TouchableOpacity>
            </View>
{/* 15 */}
            <View style={[styles.imageBack, {backgroundColor : "#EA5455"}]}>
              <TouchableOpacity onPress={playAudio15} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image15} />
                <Text style={styles.messageText}>{message15}</Text>
              </TouchableOpacity>
            </View>
{/* 16 */}
            <View style={[styles.imageBack, {backgroundColor : "#E11299"}]}>
              <TouchableOpacity onPress={playAudio16} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image16} />
                <Text style={styles.messageText}>{message16}</Text>
              </TouchableOpacity>
            </View>
{/* 17 */}
            <View style={[styles.imageBack, {backgroundColor : "#CE5959"}]}>
              <TouchableOpacity onPress={playAudio17} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image17} />
                <Text style={styles.messageText}>{message17}</Text>
              </TouchableOpacity>
            </View>
{/* 18 */}
            <View style={[styles.imageBack, {backgroundColor : "#579BB1"}]}>
              <TouchableOpacity onPress={playAudio18} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image18} />
                <Text style={styles.messageText}>{message18}</Text>
              </TouchableOpacity>
            </View>
{/* 19 */}
            <View style={[styles.imageBack, {backgroundColor : "#763857"}]}>
              <TouchableOpacity onPress={playAudio19} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image19} />
                <Text style={styles.messageText}>{message19}</Text>
              </TouchableOpacity>
            </View>
{/* 20 */}
            <View style={[styles.imageBack, {backgroundColor : "#65D6CE"}]}>
              <TouchableOpacity onPress={playAudio20} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image20} />
                <Text style={styles.messageText}>{message20}</Text>
              </TouchableOpacity>
            </View>
{/* 21 */}
            <View style={[styles.imageBack, {backgroundColor : "#698269"}]}>
              <TouchableOpacity onPress={playAudio21} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image21} />
                <Text style={styles.messageText}>{message21}</Text>
              </TouchableOpacity>
            </View>
{/* 22 */}
            <View style={[styles.imageBack, {backgroundColor : "#BFDB38"}]}>
              <TouchableOpacity onPress={playAudio22} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image22} />
                <Text style={styles.messageText}>{message22}</Text>
              </TouchableOpacity>
            </View>
{/* 23 */}
            <View style={[styles.imageBack, {backgroundColor : "#CCD5AE"}]}>
              <TouchableOpacity onPress={playAudio23} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image23} />
                <Text style={styles.messageText}>{message23}</Text>
              </TouchableOpacity>
            </View>
{/* 24 */}
            <View style={[styles.imageBack, {backgroundColor : "#FFACAC"}]}>
              <TouchableOpacity onPress={playAudio24} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image24} />
                <Text style={styles.messageText}>{message24}</Text>
              </TouchableOpacity>
            </View>
{/* 25 */}
            <View style={[styles.imageBack, {backgroundColor : "#3A98B9"}]}>
              <TouchableOpacity onPress={playAudio25} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image25} />
                <Text style={styles.messageText}>{message25}</Text>
              </TouchableOpacity>
            </View>
{/* 26 */}
            <View style={[styles.imageBack, {backgroundColor : "#F7C8E0"}]}>
              <TouchableOpacity onPress={playAudio26} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image26} />
                <Text style={styles.messageText}>{message26}</Text>
              </TouchableOpacity>
            </View>
{/* 27 */}
            <View style={[styles.imageBack, {backgroundColor : "#B2A4FF"}]}>
              <TouchableOpacity onPress={playAudio27} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image27} />
                <Text style={styles.messageText}>{message27}</Text>
              </TouchableOpacity>
            </View>
{/* 28 */}
            <View style={[styles.imageBack, {backgroundColor : "#FEFF86"}]}>
              <TouchableOpacity onPress={playAudio28} style={{alignItems: "center", padding: 10, margin: 10}}>
                <Image style= {styles.imageFront} source={image28} />
                <Text style={styles.messageText}>{message28}</Text>
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

export default MixEmotionScreen;