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
import SkeletonLoading from "../Skeleton";

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
        setIsLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <View>
      {isLoading ? (
        <SkeletonLoading />
      ) : taskList.length > 0 ? (
        <TaskList taskList={taskList} />
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
};

export default TodaysTask;
