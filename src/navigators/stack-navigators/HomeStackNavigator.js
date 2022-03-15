import React from 'react'
import { View, Text, Button, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>New Group</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Join Group</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Add Friends</Text>
    </TouchableOpacity>
    {/* <Text>Home screen!</Text>
    <Button title="Create new group"/> */}
  </View>
)

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#B71B1B",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 50,
      marginTop: 40,
      //justifyContent: "center"
    },
    appButtonText: {
      fontSize: 24,
      color: "#fff",
      alignSelf: "center",

    }
})

export default HomeStackNavigator