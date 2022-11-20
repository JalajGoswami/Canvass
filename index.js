import 'react-native-gesture-handler';
import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import store from './store/store'
import { Provider as PaperProvider } from 'react-native-paper'
import { darkTheme, lightTheme } from './theme/theme';

export default function Main() {
    const isDarkTheme = useColorScheme() === 'dark'
    return (
        <Provider store={store}>
            <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
