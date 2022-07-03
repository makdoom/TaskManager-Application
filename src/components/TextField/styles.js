import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  textContainer: {
    marginBottom: 25,
  },
  label: {
    fontFamily: "RubikRegular",
    color: colors.gray,
  },
  textField: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontFamily: "RubikMedium",
    borderWidth: 1,
    fontSize: 16,
    borderColor: colors.gray,
    marginTop: 5,
  },
  error: {
    color: colors.errorColor,
    fontFamily: "RubikMedium",
    marginTop: 5,
    paddingLeft: 5,
  },
});
