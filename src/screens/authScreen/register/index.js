import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import NavigationServices from '../../../navigations/NavigationServices';
import { SCREENS } from '../../../navigations/screenConstant';
import { useTheme } from '../../../components/appTheme';
import { lightTheme } from '../../../utlis/baseStyle/theme';

const Register = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        This is an example component using {theme === lightTheme ? 'light' : 'dark'} theme.
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.button}>Toggle Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => NavigationServices.navigate(SCREENS.Splash)}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default Register;
