import React, { Button } from 'react-native';
import { Text } from 'react-native';
import HomeTab from './Screens/Home/HomeTab';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTab from './Screens/Login/LoginTab';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckBox from '@react-native-community/checkbox';
import Account from './Screens/Component/Account';
import { AccountStack } from './Screens/Stack/AccountStack';
import Register from './Screens/Login/Register';

const HomeMenu = ({navigation}:any) => {
  return(
      <View>
        <Text>Home Menu</Text>
        <Button title='Chuyen trang Home' onPress={()=> navigation.navigate('AccountStack')}></Button>
      </View>

  )
};

const Detail = () => {
  return(
    <View>
      <Text>Detail Screen</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Settings = () => (
    <View>
      <Text>Settings Screen</Text>
    </View>
)
const Stack = createNativeStackNavigator();

const TabNavi = () => {
      return(
        <Tab.Navigator screenOptions={{headerShown:false}}> 
          <Tab.Screen name='HomeMenu' component={HomeMenu}/>
          <Tab.Screen name="HomeTab" component={HomeTab} />
          <Tab.Screen name="Account" component={AccountStack}/>
          <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
      )
}


const App = () => {
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Home' component={TabNavi}/>
        <Stack.Screen name='LoginTab' component={LoginTab}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='AccountStack' component={Account}/>
       <Stack.Screen name='HomeMenu' component={HomeMenu}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
      
  )
}
export default App