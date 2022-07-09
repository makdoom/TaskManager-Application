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
import SkeletonLoading from "../Skeleton";
import EmptyTask from "../EmptyTask";

const CompletedTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          imageSrc={require("../../../assets/images/completed.png")}
          text="You have not completed any task yet..!"
        />
      )}
    </View>
  );
};

export default CompletedTask;
