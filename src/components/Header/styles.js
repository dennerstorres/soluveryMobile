import { StyleSheet } from "react-native";
import { colors, metrics } from "˜/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.soluSecondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.soluSecondary
  },

  headerCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white
  },

  user: {
    marginTop: metrics.baseMargin / 2,
    fontSize: 10,
    color: colors.white
  },

  icon: {
    color: colors.white
  }
});

export default styles;
