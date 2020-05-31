import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  store  from './Store'

import Routes from './Routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFA500',
    accent: '#0080FF',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <PaperProvider theme={theme}>
            <Routes />
          </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
