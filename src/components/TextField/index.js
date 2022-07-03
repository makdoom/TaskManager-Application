import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import colors from "../../constant/colors";

const TextField = ({ isError, placeholder, handleTaskChange }) => {
  return (
    <View style={[styles.textContainer]}>
      <TextInput
        style={[
          styles.textField,
          isError && {
            backgroundColor: colors.errorBackground,
            borderColor: colors.errorColor,
          },
        ]}
        placeholder={placeholder}
        placeholderStyle={{ fontFamily: "RubikLight" }}
        onChangeText={(text) => handleTaskChange(text)}
      />
      {/* {isError && <Text>Please enter task title</Text>} */}
      {isError ? (
        <Text style={styles.error}>Please enter task title</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default TextField;
