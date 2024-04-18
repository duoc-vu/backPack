
import React, { Button } from 'react-native';
import { Text } from 'react-native';
import HomeTab from './Screens/Home/HomeTab';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTab from './Screens/Login/LoginTab';
import { NavigationContainer } from '@react-navigation/native';

const HomeMenu = ({navigation}:any) => {
  return(
      <View>
        <Text>Home Menu</Text>
        <Button title='Chuyen trang Login' onPress={()=> navigation.navigate('Home')}></Button>
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
const Stack = createNativeStackNavigator();

const App = () => {
  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeMenu" component={HomeMenu} />
        <Stack.Screen name='Home' component={HomeTab}/>
        <Stack.Screen name="Login" component={LoginTab}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App