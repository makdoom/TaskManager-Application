import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomTabView from "../../components/CustomTabView";
import Header from "../../components/Header";
import styles from "./styles";

const Home = () => {
  let tabButtons = [
    { id: 1, text: "Today" },
    { id: 2, text: "Upcoming" },
    { id: 3, text: "Task Done" },
  ];
  const [tabStatus, setTabStatus] = useState("Today");

  const handleChangeStatus = (status) => setTabStatus(status);

  useEffect(() => {
    console.log(tabStatus);
  }, [tabStatus]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.homeContainer}>
          <Header />

          {/* Intro */}
          <View style={styles.introContainer}>
            <Text style={styles.subtitle}>Welcome Back !</Text>
            <Text style={styles.title}>Here's Update Today</Text>
          </View>

          {/* Custom Tab View */}
          <CustomTabView
            buttonList={tabButtons}
            selectedTab={tabStatus}
            changeSelectedTab={handleChangeStatus}
          />

          {/* Task List */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
