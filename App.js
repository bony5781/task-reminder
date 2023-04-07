import { useCallback} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Heading from "./src/components/heading/Heading";
import { useFonts } from "expo-font";
import Tasks from "./src/components/tasks/Tasks";
import { ContextProvider } from "./src/context/HeadingContext";

export default function App() {

  let [fontsLoaded] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Light.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
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
    <ContextProvider>
      <View style={styles.container}>
        <Heading />
        <Tasks />
        <StatusBar style="auto" />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6fe",
    fontFamily: "Poppins",
  },
});
