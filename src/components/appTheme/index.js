import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialTheme, toggleTheme } from '../../redux/actions/commanAction';
import { darkTheme, lightTheme } from '../../utlis/baseStyle/theme';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const theme = useSelector(state => state.themeReducer.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sync with system color scheme changes
    if (systemColorScheme === 'dark') {
      dispatch(setInitialTheme(darkTheme));
    } else {
      dispatch(setInitialTheme(lightTheme));
    }
  }, [systemColorScheme, dispatch]);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
