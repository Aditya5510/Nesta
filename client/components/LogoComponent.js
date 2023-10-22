import React from 'react'
import { View,Image } from 'react-native'


const LogoComponent = () => {
  return (
    <View style={{marginVertical:10,justifyContent:"center"}}><Image source={require("../assets/splash.png")} style={{height:200,width:350}}/></View>
  )
}

export default LogoComponent