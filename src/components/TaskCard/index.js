import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "react-native-vector-icons";

const TaskCard = ({ item }) => {
  const [isCheckedTask, setIsCheckedTask] = useState(true);

  return (
    <View style={styles.taskCard}>
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
            <Text style={styles.subTitle}>{item?.deadlineDate}</Text>
          </View>
          <View style={styles.deadlineBox}>
            <Ionicons name="time-outline" size={20} />
            <Text style={styles.subTitle}>{item?.deadlineTime}</Text>
          </View>
        </View>
        {isCheckedTask ? (
          <TouchableOpacity onPress={() => setIsCheckedTask(!isCheckedTask)}>
            <Feather name="circle" size={22} />
          </TouchableOpacity>
        ) : (
          <AntDesign name="checkcircle" size={22} />
        )}
      </View>
    </View>
  );
};

export default TaskCard;
