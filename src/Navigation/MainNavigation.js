import React,{useState,useEffect} from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Screens/Home/Home";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {


    const [showWellcome, setShowWellcome] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowWellcome(false)
        }, 1000);
    }, []);

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* {showWellcome ? <Stack.Screen name="WelCome" component={Welcome} /> : null} */}


             {/* <Stack.Screen name="Home" component={Home}></Stack.Screen>            */}
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }}></Stack.Screen>

           
        </Stack.Navigator>

    )
}
export default MainNavigation