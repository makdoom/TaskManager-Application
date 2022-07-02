import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../constant/colors";

const TButton = ({ selectedType, btnText, handleTaskChange }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        selectedType === btnText && {
          backgroundColor: colors.primary,
          elevation: 10,
          shadowColor: colors.gray,
        },
      ]}
      onPress={() => handleTaskChange(btnText)}
    >
      <Text
        style={[
          styles.btnText,
          selectedType === btnText && { color: colors.white },
        ]}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default TButton;
