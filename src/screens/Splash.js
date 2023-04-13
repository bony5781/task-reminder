import React, { useCallback, useEffect } from 'react'
import { Image } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000)
    })

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <Text style={styles.name}>Task-reminder-lite</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#576CBC'
    },
    image: {
        width: 150,
        height: 150,
        margin: 20,
    },
    name: {
        fontSize: 23,
        color: '#fff',
    }
});

export default Splash