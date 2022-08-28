import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SiginInScreen from "../screens/authScreens/SiginInScreen"
import SiginInWelScreen from "../screens/authScreens/SiginInWelScreen"
import RegisterScreen from '../screens/authScreens/RegisterScreen';


const Stack = createStackNavigator();


export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SiginInWelScreen" component={SiginInWelScreen} />
      <Stack.Screen name="SiginInScreen" component={SiginInScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}