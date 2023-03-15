import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import Logo2 from "../../../assets/images/Logo2.png"

const ActivityLoader = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      {/* <Image
          source={Logo2}
          style = {[styles.Logo, {height : height * 0.5} ]}
          resizeMode = "center">
      </Image> */}
      <Text style = {{fontSize : 20, fontWeight : "bold", color : "#16B3C0"}}>Loading...</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   Logo:{
//         width : "100%",
//         maxHeight : 200,
//         maxWidth : 300,
//     },
// })

export default ActivityLoader