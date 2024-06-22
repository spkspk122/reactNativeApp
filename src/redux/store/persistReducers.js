import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'FoodApp',
      storage: AsyncStorage,
      whitelist: ['authReducer', 'commonReducer'],
    },
    reducers,
  );

  return persistedReducer;
};
