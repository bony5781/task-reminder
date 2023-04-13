import { View, StyleSheet, TextInput, Alert, KeyboardAvoidingView , useWindowDimensions} from 'react-native'
import { useState } from 'react';
import Constants from "expo-constants";
import { Text } from 'react-native';
import config from '../config';
import CustomButton from '../CustomButton';
import { useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Update = ({ route, navigation }) => {

    const { tasks, day } = useSelector(state => state.taskReducer)

    const { id } = route.params;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const windowHeight = useWindowDimensions().height;

    const setTasks = () => {
        tasks.map((task) => {
            if (task.day === day) {
                task.tasks.map((t) => {
                    if (t.id === id) {
                        t.title = title;
                        t.description = description;
                        AsyncStorage.setItem('Tasks', JSON.stringify(tasks));
                    }
                })
            }
        })
    };

    const handleSubmit = () => {
        if (title.length == 0) {
            Alert.alert('Warning', 'Task title is required');
        } else {
            setTasks();
            navigation.replace('Home');
        }
    }

    return (
        <View  style={{ flex: 1,  backgroundColor: "#f6f6fe", justifyContent: 'flex-start' }} >
            <View style={{ flex: 0.5 }}>
                <View style={styles.headingItem1}>
                    <Text style={styles.headingTitleTop}>Update Task</Text>
                </View>
                <View style={styles.headingItem2}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={styles.headingTitle}>Task Title</Text>
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <TextInput
                            style={styles.modalTitleInput}
                            placeholder="Task Title"
                            value={title}
                            onChangeText={(value) => setTitle(value)}
                        />
                    </View>
                </View>
                <View style={styles.headingItem2}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={styles.headingTitle}>Task Description</Text>
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <TextInput
                            style={styles.modalTitleInput}
                            placeholder="Task Description"
                            value={description}
                            onChangeText={(value) => setDescription(value)}
                        />
                    </View>
                </View>
                <View style={styles.headingItem2}>
                    <CustomButton
                        title='Save Task'
                        color='#6b6ee1'
                        onPressFunction={handleSubmit}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingItem1: {
        flex: 0.1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: Constants.statusBarHeight,
        // backgroundColor: "black"
    },
    headingTitleTop: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: 700,
        color: "#6564b3",
        marginLeft: config.deviceWidth * 0.05,
    },
    headingItem2: {
        flex: 0.3,
        flexDirection: 'column',
        // backgroundColor: 'black'
    },
    headingTitle: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: 600,
        color: "#6564b3",
        marginLeft: config.deviceWidth * 0.05,
    },
    modalTitleInput: {
        height: '50%',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: config.deviceWidth * 0.03,
        marginRight: config.deviceWidth * 0.05,
        justifyContent: "center",
        paddingLeft: config.deviceWidth * 0.05,
        paddingRight: config.deviceWidth * 0.05,
        paddingTop: 5,
        paddingBottom: 2,
        borderColor: "#6b6ee1",
    },
})

export default Update;