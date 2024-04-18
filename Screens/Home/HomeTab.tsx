import React, { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Screens/Component/Header';
import ListCategory from './ListCategory';
import Product from './Product';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginTab from '../Login/LoginTab';

const HomeTab = () => {

    return(
        <>
            
            <GestureHandlerRootView>
                <View>
                    <ScrollView>
                        <Header />
                        <ListCategory></ListCategory>
                        <Product/>
                    </ScrollView>
                </View>
            </GestureHandlerRootView>
            {/* <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeTab}/>
                <Tab.Screen name='Login' component={LoginTab}/>
            </Tab.Navigator> */}
        </>
            
    )
}
const styles = StyleSheet.create({
    header:{
        paddingHorizontal : 15,
    }
})

export default HomeTab;