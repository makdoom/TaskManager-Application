import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  headerContainer: {
    marginTop: 22,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appsIcon: {
    backgroundColor: colors.primary,
    padding: 10,
    paddingHorizontal: 12,
    borderRadius: 60,
    color: colors.white,
  },
  title: {
    fontFamily: "RubikMedium",
    fontSize: 18,
  },
  notificationIcon: {},
});
