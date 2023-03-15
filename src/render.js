import { View, Text, Image } from 'react-native'
import React from 'react'

const render = (data) => {
  return (
    <View>
      <Image source={data.Image} style = {{height : 150, width : 300, borderRadius : 10}}></Image>
    </View>
  )
}

export default render