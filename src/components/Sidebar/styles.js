import { StyleSheet } from "react-native";
import { colors, metrics } from "˜/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { bold } from "ansi-colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.soluBackground
  },

  header: {
    paddingTop: 30,
    paddingLeft: 10,
    height: 150,
    backgroundColor: colors.soluFront
    //linearGradient: ("to right", colors.soluFront)
  },

  title: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.white
  },

  borderLogo: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    width: 50,
    height: 50
  },

  button: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row"
  },

  textButton: {
    paddingLeft: 10,
    fontSize: 18
  },

  icon: {
    color: colors.darker
  }
});

export default styles;
