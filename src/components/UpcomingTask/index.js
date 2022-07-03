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
import TaskList from "../TaskList";
import { db } from "../../config/firebase";

const UpcomingTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Fetch upcoming task from firestore
    const unsubscribe = onSnapshot(
      query(
        collection(db, "Tasks"),
        where("taskCategory", "==", "upcoming"),
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
        <Text>No task yet</Text>
      )}
    </View>
  );
};

export default UpcomingTask;
