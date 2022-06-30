import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  taskCard: {
    backgroundColor: colors.color4,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
  },
  taskTopCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editIcon: {
    color: colors.primary,
  },
  taskType: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 6,
    fontFamily: "RubikRegular",
  },
  taskMiddleCard: {
    marginVertical: 20,
  },
  taskTitle: {
    fontFamily: "RubikSemiBold",
    fontSize: 21,
  },
  taskFooterCard: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  calenderIconBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  deadlineBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  subTitle: {
    marginLeft: 8,
    fontFamily: "RubikRegular",
  },
});
