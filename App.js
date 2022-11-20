import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { lazy, Suspense } from 'react';
import Loading from './Screens/Common/Loading';

const Login = lazy(() => import('./Screens/AuthStack/Login'))


const App = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Suspense fallback={Loading}>
      <NavigationContainer>
        <Navigator>
          <Screen name='Login' component={Login} />
        </Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
