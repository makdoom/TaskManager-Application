import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { colorList, taskTypeButtonList } from "../../constant/data";
import ButtonSpinner from "react-native-button-spinner";

const AddTask = ({ route, navigation }) => {
  const state = route.params;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [error, setError] = useState({
    taskTitle: "",
    deadline: "",
  });
  const [eidtedField, setEidtedField] = useState({});
  const [newTask, setNewTask] = useState({
    taskTitle: state?.data?.taskTitle ? state?.data?.taskTitle : "",
    deadline: state?.data?.deadline ? state?.data?.deadline : "",
    taskType: state?.data?.taskType ? state?.data?.taskType : "Home",
    colorCode: state?.data?.colorCode
      ? state?.data?.colorCode
      : colorList[0].color,
    taskCategory: state?.data?.taskCategory ? state?.data?.taskCategory : "",
    isCompleted: false,
  });

  const handleTaskChange = (text) => {
    setError({ taskTitle: "", deadline: "" });
    setEidtedField({ ...eidtedField, taskTitle: text });
    setNewTask({ ...newTask, taskTitle: text });
  };

  const handleTaskTypeChange = (text) => {
    setNewTask({ ...newTask, taskType: text });
    setEidtedField({ ...eidtedField, taskType: text });
  };

  const handleChangeColor = (color) => {
    setNewTask({ ...newTask, colorCode: color });
    setEidtedField({ ...eidtedField, colorCode: color });
  };

  // Date Picker
  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setError({ taskTitle: "", deadline: "" });

    let todaysDate = moment(new Date()).format("YYYY-MM-DD");
    let userSelectedDate = moment(date).format("YYYY-MM-DD");

    if (moment(userSelectedDate).isBefore(todaysDate)) {
      return setError({
        ...error,
        deadline: "Please select valid date can not select past date",
      });
    }

    // checking if it is matches with todays date or not
    if (moment(userSelectedDate).isSame(todaysDate)) {
      setNewTask({
        ...newTask,
        deadline: formatDate(date),
        taskCategory: "today",
      });
      setEidtedField({
        ...eidtedField,
        deadline: formatDate(date),
        taskCategory: "today",
      });
    } else {
      setNewTask({
        ...newTask,
        deadline: formatDate(date),
        taskCategory: "upcoming",
      });
      setEidtedField({
        ...eidtedField,
        deadline: formatDate(date),
        taskCategory: "upcoming",
      });
    }

    hideDatePicker();
  };

  // Create new task and saved to firstore
  const createNewTask = async () => {
    if (!newTask.taskTitle) {
      return setError({ ...error, taskTitle: "Please enter task title" });
    }
    if (!newTask.deadline) {
      return setError({
        ...error,
        deadline: "Please select a valid deadline date",
      });
    }

    let docData = {
      taskTitle: newTask?.taskTitle,
      deadline: newTask?.deadline,
      taskType: newTask?.taskType,
      colorCode: newTask?.colorCode,
      taskCategory: newTask?.taskCategory,
      isCompleted: newTask?.isCompleted,
      timestamp: serverTimestamp(),
    };

    const createdTaskRef = await addDoc(collection(db, "Tasks"), docData);
    console.log(createdTaskRef.id);
    if (createNewTask) {
      navigation.navigate("Home");
    }
  };

  // Update Task
  const upadateTask = async () => {
    if (Object.keys(eidtedField).length === 0) return null;

    const updatedDoc = await updateDoc(doc(db, "Tasks", state?.id), {
      ...eidtedField,
      timestamp: serverTimestamp(),
    });

    navigation.navigate("Home");
  };

  return (
    <>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
        style={styles.addTaskContainer}
      >
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
            value={newTask?.taskTitle}
            handleTaskChange={handleTaskChange}
            isError={error?.taskTitle}
          />

          {/* date time picker */}
          <View style={styles.deadlineDateContainer}>
            <Pressable
              style={[
                styles.textField,
                error.deadline && {
                  backgroundColor: colors.errorBackground,
                  borderColor: colors.errorColor,
                },
              ]}
              onPress={showDatePicker}
            >
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
            {error.deadline ? (
              <Text style={styles.error}>{error?.deadline}</Text>
            ) : (
              <></>
            )}
          </View>

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
                      newTask.colorCode === item.color && {
                        elevation: 8,
                        borderWidth: 2,
                        borderColor: "#A9A9A9",
                        transform: [{ scale: 1.2 }],
                      },
                      { backgroundColor: item.color },
                    ]}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>

      {/* Save tak button */}
      <ButtonSpinner
        styleSpinner={{
          style: { marginRight: 8 },
          color: "#fff",
        }}
        onPress={() => (state?.id ? upadateTask() : createNewTask())}
        style={styles.addButton}
      >
        <Text style={styles.btnText}>Save Task</Text>
      </ButtonSpinner>
    </>
  );
};

export default AddTask;
