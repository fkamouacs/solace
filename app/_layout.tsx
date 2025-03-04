import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import type { CustomTheme } from '~/lib/constants';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { DiaryProvider } from '../lib/DiaryContext';
import { Provider } from 'react-redux';
import { store } from '../lib/store';
const LIGHT_THEME: CustomTheme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: CustomTheme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const colorScheme = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter_18pt-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme == 'dark' ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={colorScheme == 'light' ? 'light' : 'dark'} />
        <DiaryProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </DiaryProvider>
      </ThemeProvider>
    </Provider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined'
    ? React.useEffect
    : React.useLayoutEffect;
