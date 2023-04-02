import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import config from "../../config.js";

export default StyleSheet.create({
  TasksContainer: {
    flex: 3,
    // justifyContent: "flex-start",
    // alignItems: 'center',
    // marginTop: Constants.statusBarHeight,
    // marginLeft: config.deviceWidth * 0.05,
  },
  scrollViewItems: {
    height: config.deviceWidth * 0.2,
    marginBottom: config.deviceWidth * 0.05,
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#6b6ee1",
  },
  scrollViewItemsCheckbox: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewItemsTitle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollViewItemsDescription: {
    flex: 1,
    justifyContent: "flex-start",
  },
  scrollViewTitle: {
    color: "#fff",
    fontSize: 16,
  },
  scrollViewDescription: {
    color: "#fff",
    fontSize: 14,
  },
  checkbox: {
    marginLeft: config.deviceWidth * 0.05,
  },
});
