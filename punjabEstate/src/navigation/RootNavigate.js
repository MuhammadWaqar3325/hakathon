import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { SignInContext } from '../context/authContext'

export default function RootNavigate() {

    const  {signIn } = useContext(SignInContext)

    return (
        <NavigationContainer>
            {
                signIn.userToken === null ?
                    <AuthStack />
                    :
                    <AppStack />

            }
        </NavigationContainer>
    )
}