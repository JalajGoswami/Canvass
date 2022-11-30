import { DarkTheme as NavigationDarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { lazy, Suspense } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme } from 'react-native-paper';
import Loading from './Screens/Common/Loading';
import Login from './Screens/AuthStack/Login'
import { useSelector } from 'react-redux';
import { noHeader } from './theme/header';

const { LightTheme, DarkTheme } = adaptNavigationTheme({ light: DefaultTheme, dark: NavigationDarkTheme })

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  const isDarkTheme = useColorScheme() === 'dark'
  const { isAuthorized, loading } = useSelector(state => state.user)

  return (
    <Suspense fallback={Loading}>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
        <Navigator>
          {loading ?
            <Screen name='Loading' component={Loading} options={noHeader} />
            :
            isAuthorized ?
              <></>
              :
              <>
                <Screen name='Login' component={Login} options={noHeader} />
              </>
          }
        </Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
