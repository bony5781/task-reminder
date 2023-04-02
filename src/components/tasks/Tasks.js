import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./tasksStyles.js";
import Checkbox from "expo-checkbox";

export default function Tasks() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.TasksContainer}>
      <ScrollView>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>

        <View style={styles.scrollViewItems}>
          <View style={styles.scrollViewItemsCheckbox}>
            <Checkbox
              style={styles.checkbox}
              onValueChange={setChecked}
              value={isChecked}
              color={isChecked ? "#9396f2" : undefined}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <View style={styles.scrollViewItemsTitle}>
              <Text style={styles.scrollViewTitle}>Run 3 km</Text>
            </View>
            <View style={styles.scrollViewItemsDescription}>
              <Text style={styles.scrollViewDescription}>At Park</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
