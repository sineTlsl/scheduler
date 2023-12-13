import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { customTheme } from '@styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import TabNavigator from '@components/TabNavigator';
import LoginPage from '@screens/Login';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <ThemeProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLogin ? (
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          ) : (
            <Stack.Screen name="Login" component={LoginPage} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
