import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  btnText: {
    fontFamily: "RubikRegular",
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  activeButtonText: {
    color: colors.white,
  },
});
