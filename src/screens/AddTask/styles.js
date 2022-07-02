import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  addTaskContainer: {
    paddingTop: 50,
  },
  addTaskHeader: {
    marginTop: 22,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    padding: 10,
    borderRadius: 50,
    elevation: 7,
    backgroundColor: "white",
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontFamily: "RubikMedium",
    fontSize: 18,
    paddingRight: 20,
  },
  addTaskBody: {
    marginVertical: 40,
    paddingHorizontal: 16,
  },
  textField: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "RubikMedium",
    fontSize: 16,
    flex: 1,
    color: colors.gray,
  },
  date: {
    fontFamily: "RubikMedium",
    fontSize: 16,
  },
  taskTypeContainer: {
    marginBottom: 25,
  },
  taskTitle: {
    fontFamily: "RubikMedium",
    fontSize: 16,
    marginBottom: 15,
  },
  taskListContainer: {
    paddingTop: 10,
  },
  colorTypeContainer: {
    marginTop: 10,
  },
  colorContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 15,
  },
});
