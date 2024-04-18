import React from 'react';
import { View ,Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return(
        <>
            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>Microsoft</Text>
                </View>
                <View>
                    <Image source={require('../../assets/logo.png')}/>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    title:{
        color:'#FF0000',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
    }
})


export default Header;