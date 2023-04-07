import { useContext, useState, useEffect } from "react";
import { View, ScrollView, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./tasksStyles.js";
import { Context } from "../../context/HeadingContext.js";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { NativeModules } from "react-native";


const Tasks = () => {

  const [isChecked, setChecked] = useState(false);
  const [day, setDay] = useState([]);
  const [rerender, setRerender] = useState(false);

  const { tasks, setTasks, selectedDay, modalVisible } = useContext(Context);

  const getItem = async () => {
    try {
      AsyncStorage.getItem("@DATA").then(value => {
        if (value != null) {
          let fullData = JSON.parse(value)
          if (fullData !== null) {
            setTasks(fullData);
            tasks.map((task) => {
              if (task.day === selectedDay) {
                setDay(task.items)
              }
            })
          }
        }
      })
    } catch (e) {
      // saving error
    }
  }

  const removeItem = async (id) => {
    try {
      let idx = 0;
      tasks.map((task) => {
        if (task.day === selectedDay) {
          task.items.map((item) => {
            if (item.id == id) {
              task.items.splice(idx, 1);
            }
            idx++;
          })
          setTasks(tasks)
        }
      })
      await AsyncStorage.setItem("@DATA", JSON.stringify(tasks));
    } catch (e) {
      // saving error
    }
  };

  // clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (e) {
  //     // clear error
  //   }
  //   console.log("Done.");
  // };

  // clearAll()

  useEffect(() => {
    getItem()
  }, [day, selectedDay, modalVisible]);

  return (
    <View style={styles.TasksContainer}>
      <ScrollView>
        {day.map((task) => (
          <View style={styles.scrollViewItems} key={task.id}>
            <View style={styles.scrollViewItemsCheckbox}>
              <Checkbox
                style={styles.checkbox}
                onValueChange={setChecked}
                value={isChecked}
                color={isChecked ? "#9396f2" : undefined}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <View style={styles.scrollViewItemsTitle}>
                <Text style={styles.scrollViewTitle}>{task.title}</Text>
              </View>
              <View style={styles.scrollViewItemsDescription}>
                <Text style={styles.scrollViewDescription}>
                  {task.description}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => removeItem(task.id)}>
                <Entypo name="trash" size={22} color="#fff" />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tasks;
