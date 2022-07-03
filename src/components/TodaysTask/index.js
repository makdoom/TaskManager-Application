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
import Skeleton from "../Skeleton";

const TodaysTask = () => {
  const [isLoading, setIsLoading] = useState(true);
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
      {/* <Skeleton /> */}
      {taskList.length > 0 ? <TaskList taskList={taskList} /> : <Skeleton />}
    </View>
  );
};

export default TodaysTask;
