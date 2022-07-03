import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "react-native-vector-icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const TaskCard = ({ id, item }) => {
  const handleCheckCompleteTask = async (docId) => {
    // Update document
    const updatedDoc = await updateDoc(doc(db, "Tasks", docId), {
      taskCategory: "completed",
      isCompleted: true,
    });
  };

  return (
    <View style={[styles.taskCard, { backgroundColor: item?.colorCode }]}>
      <View style={styles.taskTopCard}>
        <Text style={styles.taskType}>{item?.taskType}</Text>
        <MaterialCommunityIcons
          name="square-edit-outline"
          style={styles.editIcon}
          size={22}
        />
      </View>
      <View style={styles.taskMiddleCard}>
        <Text style={styles.taskTitle}>{item?.taskTitle}</Text>
      </View>
      <View style={styles.taskFooterCard}>
        <View>
          <View style={styles.calenderIconBox}>
            <Feather name="calendar" size={20} />
            <Text style={styles.subTitle}>
              {item?.deadline?.split(", ")[0]}
            </Text>
          </View>
          <View style={styles.deadlineBox}>
            <Ionicons name="time-outline" size={20} />
            <Text style={styles.subTitle}>
              {item?.deadline?.split(", ")[1]}
            </Text>
          </View>
        </View>
        {item?.isCompleted ? (
          <AntDesign name="checkcircle" size={22} />
        ) : (
          <TouchableOpacity onPress={() => handleCheckCompleteTask(id)}>
            <Feather name="circle" size={22} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TaskCard;
