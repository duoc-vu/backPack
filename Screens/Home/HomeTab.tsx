import React, { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Screens/Component/Header';
import ListCategory from './ListCategory';
import Product from './Product';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
            
        </>
    )
}
const styles = StyleSheet.create({
    header:{
        paddingHorizontal : 15,
    }
})

export default HomeTab;