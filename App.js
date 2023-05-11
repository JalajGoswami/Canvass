import {
  Provider as PaperProvider,
  adaptNavigationTheme
} from 'react-native-paper'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme, NavigationContainer
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Suspense, useEffect } from 'react'
import { useColorScheme } from 'react-native'
import Loading from 'Screens/Common/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { noHeader } from 'theme/ScreenOptions'
import StyledToast from 'Components/Common/StyledToast'
import AuthStack from 'Screens/AuthStack/AuthStack'
import HomeTabs from 'Screens/Home/HomeTabs'
import Settings from 'Screens/Settings'
import User from 'Screens/User'
import { setSystemTheme } from 'store/slices/settings'
import { darkTheme, lightTheme } from 'theme/theme'
import getTheme from 'hooks/getTheme'
import { useRootSession } from 'hooks/useSession'

const mainThemes = {
  'dark': darkTheme,
  'light': lightTheme,
}
const { LightTheme, DarkTheme } = adaptNavigationTheme({ light: DefaultTheme, dark: NavigationDarkTheme })
const navigationThemes = {
  'dark': DarkTheme,
  'light': LightTheme,
}

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  const dispatch = useDispatch()
  const OsTheme = useColorScheme()
  const { isAuthorized, loading,user, error } = useSelector(state => state.user)
  const { theme, systemTheme } = getTheme()
  const { restoreSession } = useRootSession()

  useEffect(() => {
    restoreSession()
  }, [])

  useEffect(() => {
    if (systemTheme != OsTheme)
      dispatch(setSystemTheme(OsTheme))
  }, [OsTheme])

  return (
    <PaperProvider theme={mainThemes[theme]}>
      <Suspense fallback={Loading}>
        <NavigationContainer theme={navigationThemes[theme]}>
          <Navigator screenOptions={noHeader}>
            {loading ?
              <Screen name='Loading' component={Loading} />
              :
              isAuthorized ?
                <>
                  <Screen name='Home' component={HomeTabs} />
                  <Screen name='Settings' component={Settings} />
                  <Screen name='User' component={User} />
                </>
                :
                <Screen name='Auth' component={AuthStack} />
            }
          </Navigator>
        </NavigationContainer>
        <StyledToast />
      </Suspense>
    </PaperProvider>
  )
}

export default App