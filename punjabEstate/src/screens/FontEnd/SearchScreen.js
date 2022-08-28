import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/FontEnd/HomeScreen'
import SearchScreen from '../screens/FontEnd/SearchScreen'
import MyAccountScreen from '../screens/FontEnd/MyAccountScreen'
import { colors } from '../golbal/Styles'
import MyOrdersScreen from '../screens/FontEnd/MyOrdersScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ClientStack from './ClientStack'


const ClientTab = createBottomTabNavigator()


export default function RootClientTab() {
  return (
    <ClientTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.buttons
      }}
    >

      <ClientTab.Screen name='HomeScreen' component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}

      />
      <ClientTab.Screen name='ClientStack' component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" color={color} size={size} />
          ),
        }} />
      <ClientTab.Screen name='MyOrdersScreen' component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="th-list" color={color} size={size} />
            ),
          }} />
          <ClientTab.Screen name='MyAccountScreen' component={MyAccountScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user-circle" color={color} size={size} />
              ),
            }} />

    </ClientTab.Navigator>
  )
}