import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Octicons, Ionicons } from "react-native-vector-icons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Octicons name="apps" size={20} style={styles.appsIcon} />
      <Text style={styles.title}>Task Manager</Text>
      <Ionicons
        name="ios-notifications-outline"
        size={25}
        style={styles.notificationIcon}
      />
    </View>
  );
};

export default Header;
