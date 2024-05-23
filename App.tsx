import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeTab'
import LoginScreen from './Screens/LoginTab'
import Account from './Screens/Component/Account';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from './Screens/Product';
import HomeTab from './Screens/HomeTab';
import AccountStack from './Screens/Component/AccountStack';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName:any;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'SanPham') {
              iconName = focused ? 'cart-sharp' : 'cart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Account" component={AccountStack}/>
        <Tab.Screen name="SanPham" component={Product} />
      </Tab.Navigator>
    </NavigationContainer>
    
)
}

export default App;