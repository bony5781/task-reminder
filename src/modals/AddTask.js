import { useState } from "react";
import { Modal, View, Text, Alert, Pressable, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./addTaskStyles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from 'react-redux'
import { setDay, setModalVisibility } from "../redux/actions.js";


export default function AddTask() {

  const { tasks, modalVisible, day } = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const setTasks = (data) => {
    tasks.map((task) => {
      if (task.day === day) {
        task.tasks.push(data);
        AsyncStorage.setItem('Tasks', JSON.stringify(tasks));
      }
    })
  };

  const onSubmitHandler = () => {
    if (title.length == 0) {
      Alert.alert('Warning', 'Task title is required');
    } else {
      const data = {
        id: Math.floor(Math.random() * 1000000),
        isChecked: false,
        title: title,
        description: description,
      };
      setTasks(data);
      dispatch(setModalVisibility(!modalVisible));
    }
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          dispatch(setModalVisibility(!modalVisible));
        }}>
        <View style={styles.modalView}>
          <View style={styles.day}>
            <View style={styles.textDay}>
              <Text style={styles.modalText}>Day</Text>
            </View>
            <View style={styles.dayInput}>
              <Picker
                style={styles.picker}
                selectedValue={day}
                onValueChange={(itemValue) => dispatch(setDay(itemValue))}
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
              value={title}
              onChangeText={(value) => setTitle(value)}
            />
          </View>
          <View style={styles.modalDescription}>
            <Text style={styles.modalText}>Task Description</Text>
            <TextInput
              multiline
              style={styles.modalDescriptionInput}
              placeholder="Task Description"
              value={description}
              onChangeText={(value) => setDescription(value)}
            />
          </View>
          <View style={styles.modalButtons}>
            <View style={styles.cancel}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => dispatch(setModalVisibility(!modalVisible))}
              >
                <Text style={{ color: "#fff" }}>Cancel</Text>
              </Pressable>
            </View>
            <View style={styles.submit}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onSubmitHandler}
              >
                <Text style={{ color: "#fff" }}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// <Modal
// animationType="slide"
// transparent={true}
// visible={modalVisible}
// statusBarTranslucent={true}
// onRequestClose={() => {
//   Alert.alert("Modal has been closed.");
//   setModalVisible(!modalVisible);
// }}
// >
{/* <View style={styles.modalView}>
  <View style={styles.day}>
    <View style={styles.textDay}>
      <Text style={styles.modalText}>Day</Text>
    </View>
    <View style={styles.dayInput}>
      <Picker
        style={styles.picker}
        selectedValue={selectedDay}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
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
      value={title}
      onChangeText={(value) => setTitle(value)}
    />
  </View>
  <View style={styles.modalDescription}>
    <Text style={styles.modalText}>Task Description</Text>
    <TextInput
      multiline
      style={styles.modalDescriptionInput}
      placeholder="Task Description"
      value={description}
      onChangeText={(value) => setDescription(value)}
    />
  </View>
  {/* <View style={styles.alarm}>
    <Text style={styles.modalText}>Alarm</Text>
  </View> */}
{/* <View style={styles.modalButtons}>
  <View style={styles.cancel}>
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={{ color: "#fff" }}>Cancel</Text>
    </Pressable>
  </View>
  <View style={styles.submit}>
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={onSubmitHandler}
    >
      <Text style={{ color: "#fff" }}>Submit</Text>
    </Pressable>
  </View>
</View>
</View >
</Modal > * /} */}