import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import TaskList from "../TaskList";

const CompletedTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Fetch upcoming task from firestore
    const unsubscribe = onSnapshot(
      query(
        collection(db, "Tasks"),
        where("taskCategory", "==", "completed"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setTaskList(snapshot.docs);
      }
    );

    return unsubscribe;
  }, []);
  return (
    <View>
      {taskList.length > 0 ? (
        <TaskList taskList={taskList} />
      ) : (
        <Text>No Completed task yet</Text>
      )}
    </View>
  );
};

export default CompletedTask;
