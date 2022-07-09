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
import SkeletonLoading from "../Skeleton";
import EmptyTask from "../EmptyTask";

const UpcomingTask = () => {
  const [isLoading, setIsLoading] = useState(true);
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
          imageSrc={require("../../../assets/images/noupcomingtask.png")}
          text="You have no upcomming tasks to do ..!"
        />
      )}
    </View>
  );
};

export default UpcomingTask;
