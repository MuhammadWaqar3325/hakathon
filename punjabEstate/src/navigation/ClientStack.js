import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/FontEnd/SearchScreen'
import ResultSearch from '../screens/FontEnd/ResultSearch'

const ClinetSearch = createStackNavigator()

export default function ClientStack() {
    return (
        <ClinetSearch.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <ClinetSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
            />

            <ClinetSearch.Screen
                name="ResultSearch"
                component={ResultSearch}
            />

        </ClinetSearch.Navigator>
    )
}