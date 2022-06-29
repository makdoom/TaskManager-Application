import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    RubikLight: require("./assets/fonts/Rubik-Light.ttf"),
    RubikMedium: require("./assets/fonts/Rubik-Medium.ttf"),
    RubikRegular: require("./assets/fonts/Rubik-Regular.ttf"),
    RubikSemiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
    RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
