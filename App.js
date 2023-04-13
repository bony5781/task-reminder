import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Update from './src/screens/Update';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash' screenOptions={{ header: () => null }}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Update' component={Update} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
