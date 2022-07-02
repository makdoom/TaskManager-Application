import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign, Feather } from "react-native-vector-icons";
import TextField from "../../components/TextField";
import colors from "../../constant/colors";
import { formatDate } from "../../utils/utlis";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import TButton from "../../components/Button";

const taskTypeButtonList = [
  { id: 1, type: "Home" },
  { id: 2, type: "Work" },
  { id: 3, type: "Important" },
  { id: 4, type: "Urgent" },
  { id: 5, type: "Basic" },
  { id: 6, type: "Lifestyle" },
  { id: 7, type: "Activity" },
];

const colorList = [
  { id: 1, color: colors.color1 },
  { id: 2, color: colors.color2 },
  { id: 3, color: colors.color3 },
  { id: 4, color: colors.color4 },
  { id: 5, color: colors.color5 },
  { id: 6, color: colors.color6 },
  { id: 7, color: colors.color7 },
  { id: 8, color: colors.color8 },
];

const AddTask = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    deadline: "",
    taskType: "Home",
    taskColor: colorList[0].color,
  });

  const handleTaskChange = (text) => setNewTask({ ...newTask, title: text });

  const handleTaskTypeChange = (text) => {
    setNewTask({ ...newTask, taskType: text });
  };

  const handleChangeColor = (color) =>
    setNewTask({ ...newTask, taskColor: color });

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let selectedDate = formatDate(date);

    setNewTask({ ...newTask, deadline: selectedDate });
    hideDatePicker();
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
          handleTaskChange={handleTaskChange}
        />

        {/* date time picker */}
        <Pressable style={styles.textField} onPress={showDatePicker}>
          {newTask?.deadline === "" ? (
            <Text style={styles.label}>Deadline</Text>
          ) : (
            <Text style={styles.date}>{newTask?.deadline}</Text>
          )}
          <Feather name="calendar" size={20} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            is24Hour={false}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Pressable>

        {/* Task Type */}
        <View style={styles.taskTypeContainer}>
          <Text style={styles.taskTitle}>Task Type</Text>
          <View style={styles.taskListContainer}>
            <FlatList
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              data={taskTypeButtonList}
              horizontal={true}
              renderItem={({ item }) => (
                <TButton
                  btnText={item?.type}
                  selectedType={newTask?.taskType}
                  handleTaskChange={handleTaskTypeChange}
                />
              )}
            />
          </View>
          <View></View>
        </View>

        {/* Task Color */}
        <View style={styles.colorTypeContainer}>
          <Text style={styles.taskTitle}>Task Color</Text>
          <View style={styles.colorListContainer}>
            <FlatList
              contentContainerStyle={{ padding: 10, paddingBottom: 20 }}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              data={colorList}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleChangeColor(item.color)}
                  style={[
                    styles.colorContainer,
                    newTask.taskColor === item.color && {
                      elevation: 8,
                      borderWidth: 2,
                      borderColor: "#aaa",
                      transform: [{ scale: 1.2 }],
                    },
                    { backgroundColor: item.color },
                  ]}
                />
              )}
            />
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default AddTask;
