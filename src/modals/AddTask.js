import { useContext, useEffect, useState } from "react";
import { Modal, View, Text, Alert, Pressable, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./addTaskStyles.js";
import { Context } from "../context/HeadingContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AddTask() {
  const { modalVisible, setModalVisible, tasks, setTasks, selectedDay } = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const storeData = async (data) => {
    try {
      let fullData = await AsyncStorage.getItem("@DATA");
      fullData = JSON.parse(fullData);
      if (fullData !== null) {
        fullData.map((task) => {
          if (task.day === selectedDay) {
            task.items.push(data);
          }
        })
        setTasks(fullData);
        await AsyncStorage.setItem("@DATA", JSON.stringify(fullData));
      } else {
        tasks.map((task) => {
          if (task.day === selectedDay) {
            task.items.push(data);
            setTasks(tasks);
          }
        })
        await AsyncStorage.setItem("@DATA", JSON.stringify(tasks));
      }
    } catch (e) {
      // console.log(e);
    }
  };

  const getItem = async () => {
    try {
      let fullData = await AsyncStorage.getItem("@DATA");
      fullData = JSON.parse(fullData)
      if (fullData !== null) {
        setTasks(fullData);
      } else {
        setTasks(tasks)
      }
    } catch (e) {
      // saving error
    }
  }

  useEffect(()=> {
    getItem()
    console.log("Hi")
  },[])

  const onSubmitHandler = () => {
    const data = {
      id: Math.floor(Math.random() * 1000000),
      title: title,
      description: description,
    };
    storeData(data);
    setModalVisible(!modalVisible);
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
          <View style={styles.alarm}>
            <Text style={styles.modalText}>Alarm</Text>
          </View>
          <View style={styles.modalButtons}>
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
        </View>
      </Modal>
    </View>
  );
}
