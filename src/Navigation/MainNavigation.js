import React,{useState,useEffect} from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Screens/Home/Home";
import DrawerNavigation from "./DrawerNavigation";
import DetailSearch from "../DetailSearch/DetailSearch";
import ReserveOrder from "../Screens/ReserveOrder/ReserveOrder";
import BrandDetail from "../Screens/BrandScreens/BrandDetail";
import BrandSeeAll from "../Screens/BrandScreens/BrandSeeAll";
import EditPrefrence from "../Screens/Profile/EditPrefrence";
import Support from "../Screens/Profile/Support";
import Onboarding from "../Screens/Onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const MainNavigation = () => {


    const [showWellcome, setShowWellcome] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowWellcome(false)
        }, 1000);
    }, []);

    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
    const appcheck = async () => {
      try {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        // console.log("hello",appData);
        if (appData == null) {
          setIsAppFirstLaunched(true);
          // console.log("yarr Anmulle",isAppFirstLaunched)
          AsyncStorage.setItem('isAppFirstLaunched', 'false');
        }
        else {
          setIsAppFirstLaunched(false);
        }
        //  AsyncStorage.removeItem('isAppFirstLaunched');
      }
      catch (e) {
        console.log(e)
      }
      return
    }
  
    React.useEffect(() => {
    
      appcheck();
   
      
    }, []);

    return ( 
        isAppFirstLaunched != null && (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* {showWellcome ? <Stack.Screen name="WelCome" component={Welcome} /> : null} */}


        {isAppFirstLaunched && (<>
           
            <Stack.Screen name="Onboarding" component={Onboarding} />
            {/* <Stack.Screen name="Gettingstarted" component={Gettingstarted} /> */}
          </>
          )}
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="DetailSearch" component={DetailSearch} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="ReserveOrder" component={ReserveOrder} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="BrandDetail" component={BrandDetail} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="BrandSeeAll" component={BrandSeeAll} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="EditPrefrence" component={EditPrefrence} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Support" component={Support} options={{ headerShown: false }}></Stack.Screen>

           
        </Stack.Navigator>
        )
    )
}
export default MainNavigation