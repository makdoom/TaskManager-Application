import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constant/colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    position: "relative",
  },
  homeContainer: {
    position: "relative",
  },
  introContainer: {
    marginVertical: 30,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontFamily: "RubikLight",
    fontSize: 17,
    marginBottom: 5,
  },
  title: {
    fontFamily: "RubikSemiBold",
    fontSize: 22,
  },
  buttonContainer: {
    backgroundColor: "white",
    alignItems: "center",
  },
  addButton: {
    borderWidth: 1,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    paddingVertical: 18,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  btnText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "RubikMedium",
    marginLeft: 5,
  },
});
