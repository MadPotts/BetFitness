import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const GroupChat = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Group Chat screen!</Text>
  </View>
)

const GroupChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="GroupChat" component={GroupChat} />
    </Stack.Navigator>
  )
}

export default GroupChatStackNavigator