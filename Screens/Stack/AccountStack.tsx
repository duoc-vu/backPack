import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTab from '../Login/LoginTab';
import Register from '../Login/Register';
import Account from '../Component/Account';

const Stack = createNativeStackNavigator();
export const AccountStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Account' component={Account}></Stack.Screen>
            <Stack.Screen name='SignUp' component={LoginTab}></Stack.Screen>
            <Stack.Screen name='SignIn' component={Register}></Stack.Screen>
        </Stack.Navigator>
    )
}