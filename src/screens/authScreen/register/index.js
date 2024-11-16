import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import NavigationServices from '../../../navigations/NavigationServices';
import {SCREENS} from '../../../navigations/screenConstant';
import {useTheme} from '../../../components/appTheme';
import {baseStyle, lightTheme} from '../../../utlis/baseStyle/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../../../utlis/colors';
import CustomText from '../../../components/customText';
import {Strings, placeholder} from '../../../constants/strings';
import TextInputWithLabel from '../../../components/TextInput';
import CustomSafeArea from '../../../components/customSafeArea';
import Spacer from '../../../components/spacer';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Button from '../../../components/Button';

const Register = () => {
  const {theme, toggleTheme} = useTheme();

  //loacl states
  // const [email, setEmail] = useState('');
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name: Yup.string()
      .matches(
        /^[A-Za-z][A-Za-z\s]*$/,
        'Name can only contain letters and spaces, and must start with a letter',
      )
      .required('Name is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long',
      )
      .required('Password is required'),
  });
  return (
    <CustomSafeArea
      backgroundColor={theme?.backgroundColor}
      style={styles.container}>
      <View style={[{backgroundColor: theme.backgroundColor, flex: 1}]}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            top: heightPercentageToDP('3%'),
          }}>
          <CustomText
            lable={Strings?.getStarted}
            customStyle={[baseStyle?.txtStyleSofiasBold('3.5%')]}
          />
          <Spacer height={heightPercentageToDP('3%')} />
          <CustomText
            lable={Strings?.createAccount}
            customStyle={[baseStyle?.txtStyleSofiaRegular('2%')]}
            color={colors?.grey8A}
          />

          <Formik
            initialValues={{email: '', name: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
              isValid,
            }) => (
              <>
                <TextInputWithLabel
                  label={Strings?.yourEmail}
                  placeholder={placeholder?.email}
                  placeholderTextColor={colors?.grey8A}
                  value={values?.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errmsg={errors?.email}
                  issErrmsg={errors?.email}
                />
                <TextInputWithLabel
                  label={Strings?.name}
                  placeholder={placeholder?.name}
                  placeholderTextColor={colors?.grey8A}
                  value={values?.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  errmsg={errors?.name}
                  issErrmsg={errors?.name}
                />
                <TextInputWithLabel
                  label={Strings?.password}
                  placeholder={placeholder?.password}
                  placeholderTextColor={colors?.grey8A}
                  value={values?.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  errmsg={errors?.password}
                  issErrmsg={errors?.password}
                  secureTextEntry={true}
                />
                <Spacer height={heightPercentageToDP('8%')} />
                <Button
                  lable={Strings?.create}
                  textextColor={baseStyle?.txtStyleSofiaRegular(
                    '1%',
                    colors?.WHITE_FD,
                  )}
                  customStyle={{
                    paddingVertical: heightPercentageToDP('1.5%'),
                    backgroundColor: !isValid
                      ? colors?.lightGrey
                      : colors?.green60,
                  }}
                  disabled={!isValid}
                  onPress={()=>Alert?.alert("hi")}
                />
                <Spacer height={heightPercentageToDP('4%')} />

                <Text
                  style={[baseStyle?.txtStyleSofiaRegular(
                    '1.7%',
                    colors?.black,
                  ),{textAlign:'center'}]}>
                  {Strings?.alreadyHavingAcc}
                
                </Text>
                <TouchableOpacity  style={{backgroundColor:'red'}} onPress={()=>Alert?.alert('Hi')}>
                <Text
                 
                  style={[baseStyle?.txtStyleSofiaRegular(
                    '1.7%',
                    colors?.drakBlueA3,
                  ),{textAlign:'center'}]}>
                  {Strings?.signIn}
                </Text>
                </TouchableOpacity>
               
              </>
            )}
          </Formik>
        </View>

        <Spacer height={heightPercentageToDP('5%')} />
      </View>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Register;
