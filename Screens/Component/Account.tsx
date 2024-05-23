import React, { Text, View,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = ({navigation}:any) => {
    return(
        <>
        <SafeAreaView>
            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:10}}>
                <TouchableOpacity style={{padding:15, backgroundColor:"#27B7C0", borderRadius:10}} onPress={() => navigation.navigate('Login')}><Text>Dang nhap</Text></TouchableOpacity>
                <TouchableOpacity style={{padding:15, backgroundColor:"#27B7C0", borderRadius:10}} onPress={() => navigation.navigate('Register')}><Text>Dang ki</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity><Text>Lich su mua hang</Text></TouchableOpacity>
                <TouchableOpacity><Text>Cho thanh toan</Text></TouchableOpacity>
                <TouchableOpacity><Text>Cho van chuyen</Text></TouchableOpacity>
                <TouchableOpacity><Text>Don hang da giao</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

export default Account;