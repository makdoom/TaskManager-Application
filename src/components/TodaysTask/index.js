import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import TaskList from "../TaskList";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const TodaysTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // fetch data from firebase
    const unsubscribe = onSnapshot(
      query(
        collection(db, "Tasks"),
        where("taskCategory", "==", "today"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setTaskList(snapshot.docs);
      }
    );
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

export default TodaysTask;
