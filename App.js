import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Baloo2_400Regular,
  Baloo2_700Bold,
  useFonts,
} from "@expo-google-fonts/baloo-2";

import Routes from "./src/routes";
import colors from "./src/styles/colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer
        theme={{ colors: { background: colors.background } }}
      >
        <Routes />
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
