import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../constant/colors";
import { SkeletonContainer, Skeleton } from "@nlazzos/react-native-skeleton";

const SkeletonLoading = () => {
  return (
    <View style={styles.skeletonContainer}>
      <View style={styles.cardContainer}>
        <SkeletonContainer animation="wave">
          <Skeleton style={styles.taskType} />
          <Skeleton style={styles.taskTitle} />
          <Skeleton style={styles.deadline} />
          <Skeleton style={styles.time} />
        </SkeletonContainer>
      </View>
      <View style={styles.cardContainer}>
        <SkeletonContainer animation="wave">
          <Skeleton style={styles.taskType} />
          <Skeleton style={styles.taskTitle} />
          <Skeleton style={styles.deadline} />
          <Skeleton style={styles.time} />
        </SkeletonContainer>
      </View>
    </View>
  );
};

export default SkeletonLoading;
