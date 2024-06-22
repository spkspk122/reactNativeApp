import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import NavigationServices from '../../../navigations/NavigationServices'
import { SCREENS } from '../../../navigations/screenConstant'
import { baseStyle, flexDirections } from '../../../utlis/baseStyle/theme'

const Splash = () => {
  useEffect(()=>{
setTimeout(()=>{
NavigationServices.navigate(SCREENS.Register)
},3000)
  },[])
  return (
    <View style={[{flex:1,backgroundColor:'red'}]}>
      <Text>Spash</Text>
      <Text style={baseStyle}>Hello</Text>
    </View>
  )
}

export default Splash