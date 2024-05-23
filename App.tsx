import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './Screens/HomeTab';
import LoginTab from './Screens/LoginTab';


const Tab = createBottomTabNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Settings" component={LoginTab} />
          </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default App;