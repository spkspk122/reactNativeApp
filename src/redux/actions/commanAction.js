//app theme action
import { TOGGLE_THEME,SET_INITIAL_THEME } from "../actionTypes";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setInitialTheme = (initialTheme) => (
  {
  type: SET_INITIAL_THEME,
  payload: initialTheme,
});
