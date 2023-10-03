"use client"
import { createContext, useReducer, useState } from "react";

export const AuthContextData = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ... state, isAuthenticated: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null};
        default:
            return state;
    }
}

export default function AuthContext({ children }) {

    const [authState, dispatch] = useReducer(authReducer, initialState);
    console.log(authState.isAuthenticated)

    return (
        <AuthContextData.Provider value={{authState, dispatch}}>
            {children}
        </AuthContextData.Provider>
    )
}