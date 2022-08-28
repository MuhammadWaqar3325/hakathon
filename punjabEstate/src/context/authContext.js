import React, { createContext, useReducer } from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()

export default function SignInContextProvider(props) {

    const [signIn, dispatchSignIn] = useReducer(SignInReducer, {
        userToken:null
    })

    return (
        <SignInContext.Provider value={{ signIn, dispatchSignIn }}>
            {props.children}
        </SignInContext.Provider>

    )
}