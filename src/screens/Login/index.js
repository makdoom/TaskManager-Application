import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import SVGLogo from "../../../assets/images/Logo.svg";

const Login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <SVGLogo width={200} height={200} />
        <Text>Login</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
