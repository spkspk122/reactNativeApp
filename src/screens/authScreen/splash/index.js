import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import NavigationServices from '../../../navigations/NavigationServices'
import { SCREENS } from '../../../navigations/screenConstant'
import { baseStyle, flexDirections, lightTheme } from '../../../utlis/baseStyle/theme'
import { useSelector } from 'react-redux'
import { useTheme } from '../../../components/appTheme'
import { scale,verticalScale as vs,moderateScale as ms } from "react-native-size-matters";
import { iconPathUrl } from '../../../assets/iconPath'
import CustomSafeArea from '../../../components/customSafeArea'
import { colors } from '../../../utlis/colors'

const Splash = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(()=>{
    setTimeout(()=>{
      NavigationServices.navigate(SCREENS.Register)
    },3000)
  },[])
  return (
    <CustomSafeArea backgroundColor={colors?.green3}>
<View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Image source={iconPathUrl?.splash} style={{width:scale(350),height:scale(740)}}/>
    
  </View>
    </CustomSafeArea>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

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