import { combineReducers } from 'redux';
import themeReducer from './commanReducer';

const reducers = combineReducers({
    themeReducer:themeReducer
});

export default reducers;
