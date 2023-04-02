import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import config from "../config";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6fe",
  },
  modalView: {
    flex: 0.5,
    marginTop: config.deviceHeight * 0.08,
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
    backgroundColor: "#edf2f4",
    borderRadius: 15,
  },
  day: {
    flex: 0.1,
    flexDirection: "row",
  },
  textDay: {
    flex: 0.3,
    justifyContent: "center",
  },
  modalText: {
    color: "#6564b3",
    fontSize: 15,
    marginLeft: config.deviceWidth * 0.05,
    fontFamily: "Roboto-Bold",
  },
  dayInput: {
    flex: 0.7,
    justifyContent: "center",
  },
  modalTitle: {
    flex: 0.2,
  },
  modalTitleInput: {
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: config.deviceWidth * 0.03,
    marginRight: config.deviceWidth * 0.05,
    justifyContent: "center",
    paddingLeft: config.deviceWidth * 0.05,
    paddingTop: 5,
    paddingBottom: 2,
    borderColor: "#6b6ee1",
  },
  modalDescription: {
    flex: 0.4,
    justifyContent: 'center'

  },
  modalDescriptionInput: {
    flex: 1,
    textAlignVertical: 'top',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#6b6ee1",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: config.deviceWidth * 0.03,
    marginRight: config.deviceWidth * 0.05,
    paddingLeft: config.deviceWidth * 0.05,
    paddingLeft: config.deviceWidth * 0.05,
    paddingTop: config.deviceWidth * 0.02,
  },
  alarm: {
    flex: 0.1,
    justifyContent: 'center'
  },
  modalButtons: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    marginRight: 6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#6b6ee1",
    color: '#fff',
  }
});
