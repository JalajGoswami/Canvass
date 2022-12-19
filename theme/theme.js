import { MD3LightTheme, MD3DarkTheme, configureFonts } from 'react-native-paper';

export const BodyFont = 'Inter'
export const DisplayFont = 'Montserrat'

const fontConfig = {
    fontFamily: 'Inter',
    letterSpacing: 0,
}

const lightColors = {
    primary: "#4955B3",
    onPrimary: "#F0F1FF",
    primaryContainer: "#DFE0FF",
    onPrimaryContainer: "#000C62",
    secondary: "#1660A5",
    onSecondary: "#F0F6FF",
    secondaryContainer: "#D3E4FF",
    onSecondaryContainer: "#001C38",
    tertiary: "#9A3E66",
    onTertiary: "#FFF2F6",
    tertiaryContainer: "#FFD9E4",
    onTertiaryContainer: "#3E0021",
    error: "#BA1A1A",
    onError: "#FFF2F0",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    background: "#FFFBFF",
    onBackground: "#1B1B1F",
    surface: "#EEECF5",
    onSurface: "#28282F",
    surfaceVariant: "#E3E1EC",
    onSurfaceVariant: "#46464F",
    outline: "#777680",
}
const darkColors = {
    primary: "#BCC2FF",
    onPrimary: "#152383",
    primaryContainer: "#303C9A",
    onPrimaryContainer: "#DFE0FF",
    secondary: "#A3C9FF",
    onSecondary: "#00315C",
    secondaryContainer: "#004882",
    onSecondaryContainer: "#D3E4FF",
    tertiary: "#FFB0CC",
    onTertiary: "#5F0D37",
    tertiaryContainer: "#7C264E",
    onTertiaryContainer: "#FFD9E4",
    error: "#FFB4AB",
    onError: "#690005",
    errorContainer: "#93000A",
    onErrorContainer: "#FFDAD6",
    background: "#1B1B1F",
    onBackground: "#E4E1E6",
    surface: "#28282F",
    onSurface: "#D9D5DC",
    surfaceVariant: "#46464F",
    onSurfaceVariant: "#C7C5D0",
    outline: "#90909A",
}

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        // ...MD3LightTheme.colors,
        ...lightColors,
    },
    fonts: configureFonts({config: fontConfig})
}

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        // ...MD3DarkTheme.colors,
        ...darkColors,
    },
    fonts: configureFonts({config: fontConfig})
}
