import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//screens
import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import CalendarStackNavigator from './stack-navigators/CalendarStackNavigator'
import GroupChatStackNavigator from './stack-navigators/GroupChatStackNavigator'
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigator'
import AddActivityStackNavigator from './stack-navigators/AddActivityStackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={30} color={focused ? '#1B1C20' : '#C3CBCE'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
        }}
        />
        <Tab.Screen name="CalendarStack" component={CalendarStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="calendar" size={30} color={focused ? '#1B1C20' : '#C3CBCE'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Calendar</Text>
        }}
        />
        <Tab.Screen name="AddActivityStack" component={AddActivityStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="plus-circle" size={30} color={focused ? '#B71B1B' : '#C3CBCE'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Add Activity</Text>
        }}
        />
        <Tab.Screen name="GroupChatStack" component={GroupChatStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="comments" size={30} color={focused ? '#1B1C20' : '#C3CBCE'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Group Chat</Text>
        }}
        />
        <Tab.Screen name="ProfileStack" component={ProfileStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={30} color={focused ? '#1B1C20' : '#C3CBCE'} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Profile</Text>
        }}
        />
      </Tab.Navigator>
    )
  }
  
  const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },
  })

export default BottomTabNavigator