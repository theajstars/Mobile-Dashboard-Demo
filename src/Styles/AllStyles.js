import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { margin, padding } from "./StyleProps";

const AllStyles = StyleSheet.create({
  FlexRow: {
    display: "flex",
    flexDirection: "row",
  },
  FlexColumn: {
    display: "flex",
    flexDirection: "column",
  },
});

export { AllStyles };
