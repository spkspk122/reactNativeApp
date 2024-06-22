// reducers.js
import { TOGGLE_THEME, SET_INITIAL_THEME } from '../actionTypes';
import { lightTheme, darkTheme } from '../../utlis/baseStyle/theme'; // Import your theme styles
import { Appearance } from 'react-native';

const systemTheme = Appearance.getColorScheme(); // Import from react-native
const initialTheme = systemTheme === 'dark' ? darkTheme : lightTheme;

const initialState = {
  theme: initialTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    case SET_INITIAL_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
