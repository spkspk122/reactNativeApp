import React from 'react'
import AppStack from './navigations'
import { persistor, store } from './redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { ThemeProvider } from './components/appTheme';

const App = () => {
  return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
        <AppStack />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  
  )
}

export default App