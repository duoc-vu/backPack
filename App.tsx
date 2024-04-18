
import React, { Button } from 'react-native';
import { Text } from 'react-native';
import HomeTab from './Screens/Home/HomeTab';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTab from './Screens/Login/LoginTab';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckBox from '@react-native-community/checkbox';


const HomeMenu = ({navigation}:any) => {
  return(
      <View>
        <Text>Home Menu</Text>
        <Button title='Chuyen trang Home' onPress={()=> navigation.navigate('LoginTab')}></Button>
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
          <Tab.Screen name="Detail" component={Detail}/>
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
       <Stack.Screen name='HomeMenu' component={HomeMenu}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
      
  )
}
export default App