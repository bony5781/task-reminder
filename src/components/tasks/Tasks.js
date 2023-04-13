import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./tasksStyles.js";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from 'react-redux'
import ShowTask from "../../modals/ShowTask.js"
import { setTasks, setShowModalVisibility } from "../../redux/actions.js";

const Tasks = () => {

  const navigation = useNavigation();
  const { tasks, modalVisible, day, showModalVisible, isChecked } = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()

  const [dayTasks, setDayTasks] = useState([]);

  const getTask = async () => {
    AsyncStorage.getItem('Tasks')
      .then(tasks => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTasks(parsedTasks));
          parsedTasks.map((task) => {
            if (task.day === day) {
              setDayTasks(task.tasks);
            }
          })
        }
      })
      .catch(err => console.log(err));
  }

  const updateTask = (id) => {
    navigation.navigate('Update', { id: id })
  }

  const removeTask = (id) => {
    let idx = 0;
    dayTasks.map((task) => {
      if (task.id == id) {
        dayTasks.splice(idx, 1);
      }
      idx++;
    })
    dispatch(setTasks(tasks));
    AsyncStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const setCompleteTask = (id) => {
    dayTasks.map((task) => {
      if (task.id === id) {
        if (task.isChecked === true) {
          task.isChecked = false;
        } else {
          task.isChecked = true;
        }
      }
    })
    dispatch(setTasks(tasks))
    AsyncStorage.setItem('Tasks', JSON.stringify(tasks));
  }

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
    getTask()
  }, [modalVisible, day]);

  return (
    <View style={styles.TasksContainer}>
      <ScrollView>
        {dayTasks.map((task) => (
          <View key={task.id}>
            <ShowTask title={task.title} description={task.description} />
            <View style={styles.scrollViewItems} >
              <View style={styles.scrollViewItemsCheckbox}>
                <Checkbox
                  style={styles.checkbox}
                  onValueChange={() => setCompleteTask(task.id)}
                  value={task.isChecked}
                  color={task.isChecked ? "#6b6ee1" : "#fff"}
                />
              </View>
              <View style={{ flex: 0.3, marginLeft: 10 }}>
                {/* <Pressable onPress={() => dispatch(setShowModalVisibility(!showModalVisible))} key={task.id}> */}
                <View style={styles.scrollViewItemsTitle}>
                  <Text style={styles.scrollViewTitle}>{task.title}</Text>
                </View>
                <View style={styles.scrollViewItemsDescription}>
                  <Text style={styles.scrollViewDescription} numberOfLines={1}>
                    {task.description}
                  </Text>
                </View>
                {/* </Pressable> */}
              </View>
              <View
                style={{
                  flex: 0.16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pressable onPress={() => dispatch(setShowModalVisibility(!showModalVisible))} key={task.id}>
                  <FontAwesome5 name="envelope-open" size={30} color="white" />
                </Pressable>
              </View>
              <View
                style={{
                  flex: 0.16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pressable onPress={() => updateTask(task.id)}>
                  <MaterialCommunityIcons name="update" size={30} color="#fff" />
                </Pressable>
              </View>
              <View
                style={{
                  flex: 0.16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pressable onPress={() => removeTask(task.id)}>
                  <Entypo name="trash" size={30} color="#fff" />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tasks;
