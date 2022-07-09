import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const EmptyTask = ({ imageSrc, text }) => {
  return (
    <View style={styles.emptyTaskContainer}>
      <Image source={imageSrc} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyTask;
