import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const CustomTabView = ({ buttonList, selectedTab, changeSelectedTab }) => {
  return (
    <View style={styles.tabViewContainer}>
      {buttonList.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => changeSelectedTab(item.text)}
          style={[
            styles.button,
            item.text === selectedTab && styles.activeButton,
          ]}
        >
          <Text
            style={[
              styles.btnText,
              item.text === selectedTab && styles.activeButtonText,
            ]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomTabView;
