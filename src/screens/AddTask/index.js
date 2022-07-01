import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from "react-native-vector-icons";
import TextField from "../../components/TextField";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTask = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);
    setDate(selectedDate);
  };

  const handleTextFocused = (value) => {
    console.log(value);
    setIsFocused(value);
  };

  return (
    <View style={styles.addTaskContainer}>
      <View style={styles.addTaskHeader}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} />
        </TouchableOpacity>
        <Text style={styles.heading}>New Task</Text>
      </View>

      <View style={styles.addTaskBody}>
        <TextField
          placeholder="Task Title"
          isFocused={isFocused}
          changeFocus={handleTextFocused}
        />

        {/* <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          display={"clock"}
          onChange={onChange}
        /> */}
      </View>
    </View>
  );
};

export default AddTask;
