import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesome } from '@expo/vector-icons'

import SettingsStackNavigator from './stack-navigators/SettingsStackNavigator'
import ReportStackNavigator from './stack-navigators/ReportStackNavigator'
import InboxStackNavigator from './stack-navigators/InboxStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {
        Object.entries(props.descriptors).map(([key, descriptor], index) => {
          const focused = index === props.state.index
          return (
            <DrawerItem
              key={key}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {descriptor.options.title}
                </Text>
              )}
              onPress={() => descriptor.navigation.navigate(descriptor.route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 60,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#1B1C20" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} options={{
        title: 'Home',
        headerTitle: () => <Image source={require('../assets/logo-simple.png')} />,
        headerRight: () => (
          <View style={styles.headerRight}>
            {/* <Icon name="inbox" size={20} color="#1B1C20" /> */}
            {/* <Drawer.Screen name="InboxStack" component={InboxStackNavigator}/> */}
            <FontAwesome.Button 
              name="inbox" 
              backgroundColor="white" 
              color = "black" 
              onPress = {InboxStackNavigator} />
          </View>
        ),
      }}/>
      <Drawer.Screen name="SettingsStack" component={SettingsStackNavigator} options={{
        title: 'Settings',
        headerTitle: () => <Text style={styles.headerTitle}>Settings</Text>,
      }}/>
      <Drawer.Screen name="ReportStack" component={ReportStackNavigator} options={{
        title: 'Report an issue',
        headerTitle: () => <Text style={styles.headerTitle}>Report an issue</Text>,
      }}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#1B1C20',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ed9c9c',
  },
})

export default DrawerNavigator