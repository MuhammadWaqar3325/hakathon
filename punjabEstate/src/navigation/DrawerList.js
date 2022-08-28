import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTab from './ClientTab'
import BusinessConsoleScr from '../screens/FontEnd/BusinessConsoleScr'
import DrawerContent from '../components/DrawerContent'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Drawer = createDrawerNavigator()

export default function DrawerList() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent{...props} />}
      screenOptions={
        {
          headerShown: false,
        }
      }
    >

      <Drawer.Screen
        name="RootClientTab"
        component={RootClientTab}
        options={{
          title: 'client',
          drawerIcon: ({ focussed, size }) => (
            <Icon
              name='house-user'
              color={focussed ? "blue" : "black"}
              size={size}
            />

          )
        }}
      />

      <Drawer.Screen
        name="BusinessConsoleScr"
        component={BusinessConsoleScr}
        options={{
          title: 'Business Console',
          drawerIcon: ({ focussed, size }) => (
            <Icon
              name='business-time'
              color={focussed ? "blue" : "black"}
              size={size}
            />

          )
        }}
      />
    </Drawer.Navigator>
  )
}