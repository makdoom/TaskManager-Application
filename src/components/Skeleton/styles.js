import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  skeletonContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  cardContainer: {
    height: 200,
    width: "100%",
    padding: 20,
    backgroundColor: "#EDF2F4",
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskType: {
    height: 30,
    width: 90,
    borderRadius: 3,
  },
  taskTitle: {
    height: 20,
    width: 280,
    borderRadius: 3,
    marginTop: 30,
  },
  deadline: {
    height: 20,
    width: 100,
    borderRadius: 3,
    marginTop: 30,
  },
  time: {
    height: 20,
    width: 50,
    borderRadius: 3,
    marginTop: 5,
  },
});
