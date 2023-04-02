import { useContext, useState } from "react";
import {
  Modal,
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
} from "react-native";
import { Visible } from "../components/heading/Heading";
import { Picker } from "@react-native-picker/picker";
import styles from "./addTaskStyles.js";

export default function AddTask() {
  const { modalVisible, setModalVisible } = useContext(Visible);
  const [selectedDay, setSelectedDay] = useState();

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.day}>
            <View style={styles.textDay}>
              <Text style={styles.modalText}>Day</Text>
            </View>
            <View style={styles.dayInput}>
              <Picker
                style={styles.picker}
                selectedValue={selectedDay}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
              </Picker>
            </View>
          </View>
          <View style={styles.modalTitle}>
            <Text style={styles.modalText}>Task Title</Text>
            <TextInput
              style={styles.modalTitleInput}
              placeholder="Task Title"
              // onChangeText
            />
          </View>
          <View style={styles.modalDescription}>
            <Text style={styles.modalText}>Task Description</Text>
            <TextInput
              multiline
              style={styles.modalDescriptionInput}
              placeholder="Task Description"
              // onChangeText
            />
          </View>
          <View style={styles.alarm}>
            <Text style={styles.modalText}>Alarm</Text>
          </View>
          <View style={styles.modalButtons}>
            <View style={styles.cancel}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{color: '#fff'}}>Cancel</Text>
              </Pressable>
            </View>
            <View style={styles.submit}>
              <TouchableHighlight
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{color: '#fff'}}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
