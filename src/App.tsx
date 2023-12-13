import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { customTheme } from '@styles/theme';
import { NavigationContainer } from '@react-navigation/native';

// components
import TabNavigator from '@components/TabNavigator';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
