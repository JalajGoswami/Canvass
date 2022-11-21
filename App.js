import { DarkTheme as NavigationDarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { lazy, Suspense } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme } from 'react-native-paper';
import Loading from './Screens/Common/Loading';
import Login from './Screens/AuthStack/Login'

const { LightTheme, DarkTheme } = adaptNavigationTheme({ light: DefaultTheme, dark: NavigationDarkTheme })

const { Navigator, Screen } = createStackNavigator();
const App = () => {
  const isDarkTheme = useColorScheme() === 'dark'
  return (
    <Suspense fallback={Loading}>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
        <Navigator>
          <Screen name='Login' component={Login} />
          <Screen name='Loading' component={Loading} />
        </Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
