import { View, Text } from 'react-native'
import React from 'react'
import { baseStyle } from '../../../utlis/baseStyle/theme'

const Register = () => {
  return (
    <View style={baseStyle.alignSelfCenter}>
      <Text style={[baseStyle.txtStyleSofiasBold(20),baseStyle.marginTop('5%')]}> Register</Text>
    </View>
  )
}

export default Register