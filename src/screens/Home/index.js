import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomTabView from "../../components/CustomTabView";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import colors from "../../constant/colors";
import styles from "./styles";
import { Entypo } from "react-native-vector-icons";
import TodaysTask from "../../components/TodaysTask";
import UpcomingTask from "../../components/UpcomingTask";
import CompletedTask from "../../components/CompletedTask";

const Home = ({ navigation }) => {
  let tabButtons = [
    { id: 1, text: "Today" },
    { id: 2, text: "Upcoming" },
    { id: 3, text: "Task Done" },
  ];
  const [tabStatus, setTabStatus] = useState("Today");

  const handleChangeStatus = (status) => setTabStatus(status);

  const handleAddTask = () => navigation.navigate("AddTask");

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

              {tabStatus === "Today" ? (
                <TodaysTask />
              ) : tabStatus === "Upcoming" ? (
                <UpcomingTask />
              ) : (
                <CompletedTask />
              )}
              {/* <TaskList /> */}
            </View>
          )}
        />
        {/* Add task */}
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Entypo name="plus" size={20} color={colors.white} />
          <Text style={styles.btnText}>Add Task</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
