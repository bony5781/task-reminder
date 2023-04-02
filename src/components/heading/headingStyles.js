import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import config from "../../config.js";

export default StyleSheet.create({
  headingContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: Constants.statusBarHeight,
  },
  headingItem1: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "black"
  },
  headingTitleTop: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    color: "#6564b3",
    marginLeft: config.deviceWidth * 0.05,
  },
  headingItem2: {
    flex: 0.6,
    // backgroundColor: "red",
  },
  checklistAddButton: {
    height: config.deviceWidth * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: "dashed",
    borderColor: "#999cd2",
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
  },
  headingItem3 : {
    flex : 0.2,
    justifyContent: 'center',
    // backgroundColor: "yellow"
  },
  headingTitle: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    color: "#6564b3",
    marginLeft: config.deviceWidth * 0.05,
  },
  
});
