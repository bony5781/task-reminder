import { View, Text, TouchableOpacity } from "react-native";
import styles from "./headingStyles.js";
import { AntDesign } from "@expo/vector-icons";
import AddTask from "../../modals/AddTask.js";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/HeadingContext.js";
import { Picker } from "@react-native-picker/picker";

export default function Heading() {

  const { modalVisible, setModalVisible, selectedDay, setSelectedDay } = useContext(Context)
 
  useEffect(() => {
  }, [selectedDay, setSelectedDay])

  return (
    <View style={styles.headingContainer} >
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
        <Text style={styles.headingTitle}>Today's Tasks({selectedDay})</Text>
      </View>
      <View style={styles.headingItem4}>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Text style={styles.headingTitle}>Select Day</Text>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }} >
          <Picker
            style={styles.picker}
            selectedValue={selectedDay}
            onValueChange={(itemvalue) => setSelectedDay(itemvalue)}
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
    </View>
  );
}