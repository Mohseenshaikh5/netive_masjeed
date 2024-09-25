import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    DefaultTheme,
    DarkTheme,
    NavigationContainer,
} from '@react-navigation/native';

import SingIn from '../singIn';
import MainScreen from '../../mainTbas';
import SignUp from '../singUp';
import HomeScreen from '../../home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SingIn}>

                <Stack.Screen
                    name="SingIn"
                    component={SingIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Dashboard"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;