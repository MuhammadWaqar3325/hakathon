import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/FontEnd/MapScreen';
import DrawerList from './DrawerList';


const App = createStackNavigator();

export default function AppStack() {
    return (
        <App.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <App.Screen name="DrawerList" component={DrawerList} />
            <App.Screen name="MapScreen" component={MapScreen} />
        </App.Navigator>
    )
}






