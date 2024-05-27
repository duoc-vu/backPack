import React from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginTab';
import RegisterScreen from './RegisterScreen';


const Stack = createNativeStackNavigator();
const AccountStack = () => {
    
    return(
        <Stack.Navigator screenOptions={{headerShown:false }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AccountStack;