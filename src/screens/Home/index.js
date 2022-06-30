import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomTabView from "../../components/CustomTabView";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import colors from "../../constant/colors";
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
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{}]}
          keyExtractor={() => null}
          renderItem={() => (
            <View style={styles.homeContainer}>
              <Header />

              <View style={styles.introContainer}>
                <Text style={styles.subtitle}>Welcome Back !</Text>
                <Text style={styles.title}>Here's Update Today</Text>
              </View>

              <CustomTabView
                buttonList={tabButtons}
                selectedTab={tabStatus}
                changeSelectedTab={handleChangeStatus}
              />

              <TaskList />
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
