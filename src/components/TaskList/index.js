import { View, Text, FlatList } from "react-native";
import React from "react";
// import taskList from "../../constant/taskList";
import TaskCard from "../TaskCard";
import styles from "./styles";

const TaskList = ({ taskList }) => {
  return (
    <View style={styles.tasklistContainer}>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard item={item.data()} />}
      />
    </View>
  );
};

export default TaskList;
