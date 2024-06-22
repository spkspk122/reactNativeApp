import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import NavigationServices from '../../../navigations/NavigationServices'
import { SCREENS } from '../../../navigations/screenConstant'
import { baseStyle, flexDirections, lightTheme } from '../../../utlis/baseStyle/theme'
import { useSelector } from 'react-redux'
import { useTheme } from '../../../components/appTheme'

const Splash = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(()=>{
  },[])
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Text style={[styles.text, { color: theme.textColor }]}>
      Splash Screen
    </Text>
    <TouchableOpacity onPress={toggleTheme}>
      <Text style={styles.button}>Toggle Theme</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => NavigationServices.navigate(SCREENS.Register)}>
      <Text style={styles.button}>Next</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
  },
});

export default Splash