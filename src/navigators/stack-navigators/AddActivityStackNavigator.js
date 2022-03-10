import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const AddActivity = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Add Activity screen!</Text>
  </View>
)

const AddActivityStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="AddActivity" component={AddActivity} />
    </Stack.Navigator>
  )
}

export default AddActivityStackNavigator