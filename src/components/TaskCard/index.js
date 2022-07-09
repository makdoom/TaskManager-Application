import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import React from "react";
import styles from "./styles";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "react-native-vector-icons";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";

const TaskCard = ({ id, item }) => {
  const navigation = useNavigation();

  const handleCheckCompleteTask = async (docId) => {
    const updatedDoc = await updateDoc(doc(db, "Tasks", docId), {
      taskCategory: "completed",
      isCompleted: true,
    });
  };

  const deleteTask = async () => {
    await deleteDoc(doc(db, "Tasks", id));
  };

  // Left swipe action button
  const rightSwipeAction = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.6],
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    return (
      <TouchableOpacity style={styles.deleteContainer}>
        <Animated.View
          style={[styles.deleteBox, { transform: [{ scale: scale }] }]}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={25}
            style={styles.deleteIcon}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      friction={1}
      rightThreshold={80}
      renderRightActions={rightSwipeAction}
    >
      <View style={[styles.taskCard, { backgroundColor: item?.colorCode }]}>
        <View style={styles.taskTopCard}>
          <Text style={styles.taskType}>{item?.taskType}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTask", { id, data: item })}
          >
            <MaterialCommunityIcons
              name="square-edit-outline"
              style={styles.editIcon}
              size={22}
            />
          </TouchableOpacity>
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
    </Swipeable>
  );
};

export default TaskCard;
