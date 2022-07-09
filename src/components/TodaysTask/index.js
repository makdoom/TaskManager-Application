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
import EmptyTask from "../EmptyTask";

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
        <EmptyTask
          imageSrc={require("../../../assets/images/notask.png")}
          text={`You have no tasks to do enjoy your day or add some tasks..!`}
        />
      )}
    </View>
  );
};

export default TodaysTask;
