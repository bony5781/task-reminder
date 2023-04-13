import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import config from './config';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00000050' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#6b6ee1' : props.color , justifyContent: 'center' },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        height: config.deviceWidth * 0.2,
        marginLeft: config.deviceWidth * 0.05,
        marginRight: config.deviceWidth * 0.05,
        alignItems: 'center',
        borderRadius: 20,
    },
})

export default CustomButton;