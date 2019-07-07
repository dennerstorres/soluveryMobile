import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: colors.white
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: metrics.baseMargin * 2
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    fontSize: 16,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin
  },
  button: {
    height: 48,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.white
  }
});

export default styles;
