import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import colors from "../../constant/colors";

const TextField = ({ placeholder, handleTaskChange }) => {
  return (
    <View style={styles.textContainer}>
      <TextInput
        style={[styles.textField]}
        placeholder={placeholder}
        placeholderStyle={{ fontFamily: "RubikLight", borderColor: "red" }}
        onChange={(text) => handleTaskChange(text)}
      />
    </View>
  );
};

export default TextField;
