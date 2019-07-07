import { StyleSheet } from "react-native";
import { colors, metrics } from "˜/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },

  containerList: {
    padding: metrics.basePadding
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: "center",
    maxWidth: (metrics.screenWidth - 60) / 2
  },

  contentText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold"
  },

  columnWrapper: {
    marginHorizontal: metrics.baseMargin / 2,
    justifyContent: "space-between"
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  }
});

export default styles;
