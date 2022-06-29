import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.homeContainer}>
          {/* <Text>Home</Text> */}
          <Header />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
