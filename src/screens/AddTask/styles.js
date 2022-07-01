import { Dimensions, StyleSheet } from "react-native";

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
});
