import { Modal, View, Text, Pressable } from "react-native";
import styles from "./addTaskStyles.js";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalVisibility } from "../redux/actions.js";
import { ScrollView } from "react-native-gesture-handler";

export default function ShowTask({ title, description }) {

    const { showModalVisible, day } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch()

    return (
        <View style={styles.modalContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModalVisible}
                statusBarTranslucent={true}
                onRequestClose={() => {
                    dispatch(setShowModalVisibility(!showModalVisible));
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.day}>
                        <View style={styles.textDay}>
                            <Text style={styles.modalText}>Day</Text>
                        </View>
                        <View style={styles.dayInput}>
                            <Text>{day}</Text>
                        </View>
                    </View>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalText}>Task Title</Text>
                        <Text style={styles.modalTextValue}>{title}</Text>
                    </View>
                    <View style={styles.modalDescription}>
                        <ScrollView>
                        <Text style={styles.modalText}>Task Description</Text>
                        <Text style={styles.modalTextValue}>{description}</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.modalButtons}>
                        <View style={styles.cancel}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => dispatch(setShowModalVisibility(!showModalVisible))}
                            >
                                <Text style={{ color: "#fff" }}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
