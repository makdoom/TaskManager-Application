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
    position: "absolute",
    bottom: 25,
    borderWidth: 1,
    zIndex: 1,
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.primary,
    elevation: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 17,
    fontFamily: "RubikMedium",
    marginLeft: 5,
  },
});
