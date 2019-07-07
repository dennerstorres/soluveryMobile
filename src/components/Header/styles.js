import { StyleSheet } from "react-native";
import { colors, metrics } from "˜/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },

  headerCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darker
  },

  user: {
    marginTop: metrics.baseMargin / 2,
    fontSize: 10,
    color: colors.dark
  },

  icon: {
    color: colors.darker
  }
});

export default styles;
