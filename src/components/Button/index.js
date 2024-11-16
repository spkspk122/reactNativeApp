import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {baseStyle} from '../../utlis/baseStyle/theme';
import {useTheme} from '../appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../../utlis/colors';

const Button = ({lable, customStyle, textColor,onPress,disabled}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles?.container, customStyle]}>
      <Text style={[styles?.textStyle, textColor]}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('90%'),
    backgroundColor: colors?.green60,
    paddingVertical: heightPercentageToDP('0.5%'),
    borderRadius: heightPercentageToDP('1%'),
  },
  textStyle: [
    baseStyle?.textAlignCenter,
    baseStyle.txtStyleSofiaSemiBold('2.5%', colors.WHITE_FA),
  ],
});
