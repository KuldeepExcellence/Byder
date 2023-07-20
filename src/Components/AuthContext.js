
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(null);
  

    
    const login = async () => {
        // setUserToken("TestUser");
        // AsyncStorage.setItem('userToken', "TestUser");
        // console.log("login presed");
        let accessToken = await AsyncStorage.getItem('userToken');
        setUserToken(accessToken);
    }

    const signup = async () => {
        setUserToken("TestUser");
        AsyncStorage.setItem('userToken', "TestUser");
        console.log("login presed");

    }

    
    const logout = () => {
        setUserToken(null);
        
        AsyncStorage.removeItem('userToken')
       
    }
    const isLoggedIn = async () => {
        try {
           
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);

        } catch (e) {
            console.log(`isLogged in error ${e}`)
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, userToken , signup }}>
            {children}
        </AuthContext.Provider>
    );
}