import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.homeContainer}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
