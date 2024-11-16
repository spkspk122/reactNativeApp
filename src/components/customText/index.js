import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../appTheme';

export default function CustomText({
    customStyle,
    lable,
    color
}) {
    const { theme, toggleTheme } = useTheme();
  return (
    <View>
        <Text style={[customStyle,{ color:color?color: theme.textColor }]}>
       {lable}
      </Text>
    </View>
  )
}