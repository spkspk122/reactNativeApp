import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {colors} from '../../utlis/colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {baseStyle} from '../../utlis/baseStyle/theme';
import {useTheme} from '../appTheme';
import Spacer from '../spacer';

const TextInputWithLabel = ({
  placeholder = '',
  placeholderTextColor,
  value,
  onChange = () => {},
  secureTextEntry = false,
  label,
  errmsg,
  issErrmsg,
  onBlur,
}) => {
  const {theme, toggleTheme} = useTheme();
  const [show, setShow] = useState(secureTextEntry);
  return (
    <>
      <Spacer height={heightPercentageToDP('2%')} />
      <Text style={[baseStyle?.txtStyleSofiaRegular('1.9%', colors?.black)]}>
        {label}
      </Text>
      <View style={secureTextEntry?styles?.container1: styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={show}
          style={{
            marginLeft: widthPercentageToDP('5%'),
            color: theme?.textColor,
         
          }}
        />
        {secureTextEntry && (
          <Text
            style={[baseStyle?.txtStyleSofiaRegular('1.5%', colors?.black),{left:heightPercentageToDP('-2%')}]} onPress={()=>setShow(!show)}>
            {show ? 'Show' : 'Hide'}
          </Text>
        )}
      </View>
      {issErrmsg && (
        <Text style={[baseStyle?.txtStyleSofiaRegular('1.5%', colors?.red)]}>
          {errmsg}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: heightPercentageToDP('0.1%'),
    borderColor: colors?.grey8A,
    borderRadius: heightPercentageToDP('1%'),
    paddingVertical: heightPercentageToDP('1.5%'),
  },
  container1: {
    borderWidth: heightPercentageToDP('0.1%'),
    borderColor: colors?.grey8A,
    borderRadius: heightPercentageToDP('1%'),
    paddingVertical: heightPercentageToDP('1.5%'),
    flexDirection:'row',
    justifyContent:'space-between'
  },
});

export default TextInputWithLabel;
