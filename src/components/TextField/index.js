import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import colors from "../../constant/colors";

const TextField = ({ isFocused, changeFocus, placeholder }) => {
  return (
    <View style={styles.textContainer}>
      <TextInput
        style={[styles.textField, isFocused && { borderColor: colors.primary }]}
        placeholder={placeholder}
        placeholderStyle={{ fontFamily: "RubikLight", borderColor: "red" }}
        onFocus={() => changeFocus(true)}
        onBlur={(e) => changeFocus(false)}
      />
    </View>
  );
};

export default TextField;
