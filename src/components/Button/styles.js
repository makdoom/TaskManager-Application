import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderRadius: 30,
  },

  btnText: {
    fontFamily: "RubikMedium",
  },
});
