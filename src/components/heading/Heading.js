import { useState, createContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./headingStyles.js";
import { AntDesign } from "@expo/vector-icons";
import AddTask from "../../modals/AddTask.js";

export const Visible = createContext();

export default function Heading() {
  const [modalVisible, setModalVisible] = useState(false);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <>
      <Visible.Provider value={{ modalVisible, setModalVisible }}>
        <View style={styles.headingContainer}>
          <View style={styles.headingItem1}>
            <Text style={styles.headingTitleTop}>Task Reminder</Text>
          </View>
          <View style={styles.headingItem2}>
            <AddTask />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{ flex: 0 }}
            >
              <View style={styles.checklistAddButton}>
                <Text style={{ color: "#999cd2", fontWeight: 600 }}>
                  <AntDesign name="pluscircleo" size={13} color="#999cd2" />
                  {"  "}Add Tasks
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.headingItem3}>
            <Text style={styles.headingTitle}>Today's Tasks({day})</Text>
          </View>
        </View>
      </Visible.Provider>
    </>
  );
}
