import { View , StyleSheet , Text } from 'react-native'
import React from 'react'
import Heading from '../components/heading/Heading'
import Tasks from '../components/tasks/Tasks'

const Home = () => {
  return (
    <View style={styles.container1}>
      <Heading />
      <Tasks />
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#f6f6fe",
  },
});

export default Home