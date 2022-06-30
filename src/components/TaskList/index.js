import { View, Text, FlatList } from "react-native";
import React from "react";
import taskList from "../../constant/taskList";
import TaskCard from "../TaskCard";

const TaskList = () => {
  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard item={item} />}
      />
    </View>
  );
};

export default TaskList;
