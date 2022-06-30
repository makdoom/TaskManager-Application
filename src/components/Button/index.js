import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Button = ({ isIcon, iconProvider, iconName, buttonText, isOutlined }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
