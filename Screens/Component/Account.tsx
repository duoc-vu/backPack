import React from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Account = ({navigation}:any) => {
    return(
        <>
            <SafeAreaView>
                <View style={{flexDirection:'row' ,justifyContent:'space-around' , marginVertical:10}}>
                    <TouchableOpacity style={{padding:15 , backgroundColor:'#27B7C0' , borderRadius:10}} onPress={() => navigation.navigate('LoginTab')}><Text>Sign Up</Text></TouchableOpacity>
                    <TouchableOpacity style={{padding:15 , backgroundColor:'#27B7C0' , borderRadius:10}} onPress={() => navigation.navigate('Register')}><Text>Sign In</Text></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity><Text>Lịch sử mua hàng</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Chờ thanh toán</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Chờ vận chuyển</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Đơn hàng</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Account;