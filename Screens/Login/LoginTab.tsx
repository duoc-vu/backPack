import React, { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from '../Home/HomeTab';

const LoginTab = ({navigation}:any) => {
    const [isCheck , setIsCheck] = useState(false);
    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [checkEmail,setCheckEmail] =useState(false);
    const [errorPass, setCheckPass] =useState('');

    const onSubmit = () => {
        let formData = {
            _email :email,
            _password : password,
            _checkBox :isCheck
        }
        let regexEmail = /^([-!#-\'*+\/-9=?A-Z^-~]{1,64}(\.[-!#-\'*+\/-9=?A-Z^-~]{1,64})*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+$/
        if(regexEmail.test(formData._email))
        {
                setCheckEmail(false);
        }else{
            setCheckEmail(true)
        }
        formData._password ==='' ?setCheckPass('Chưa nhập mật khẩu'): setCheckPass('');
    }
    const Stack = createNativeStackNavigator();
    return(<>
            <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}></StatusBar>
                <View style={styles.title}>
                    <Text style={{fontWeight:'bold' , fontSize:30 ,color:'black'}}>Login</Text>
                    <Text>By signing in you are agreeing </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>our </Text><TouchableOpacity onPress={()=>Alert.alert('sau nay lam')}><Text style={{color:'#1bcdff'}}>Term and privacy policy</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.group}>
                        <Icon style={styles.icon} name="email" size={30} color="gray" />
                        <TextInput placeholder='Email Adress' style={styles.input} onChangeText={(value)=>setEmail(value)}></TextInput>
                        <Text style={{color:'red',} }>{checkEmail?'Sai định dạng Email':''}</Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <View style={styles.group}>
                        <Icon style={styles.icon} name="locked" size={30} color="gray" />
                        <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}></TextInput>
                        <Text style={{color:'red'}}>{errorPass}</Text>
                    </View>
                </View>
                <View style={styles.group1}>
                    <View style={styles.items}>
                        <CheckBox
                            disabled={false}
                            value={isCheck}
                            onValueChange={() => setIsCheck(!isCheck)}
                            tintColors={{true:'red'} }
                        />
                        <Text style={{marginTop:5 , color:'blue'}}>Ghi nhớ tài khoản</Text>
                    </View>
                    <View style={{marginTop:25}}>
                        <TouchableOpacity onPress={()=>Alert.alert('Quên mật khẩu')}><Text style={{color:'blue'}}>Quên mật khẩu</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Home')}>
                    <Text style={{color:'#fff'}}>Login</Text>
                </TouchableOpacity>
                <Text> Email :{email}</Text>
                <Text> Password :{password}</Text>
                <View>
                    <Image source={require('../assets/Subtract.png')} style ={styles.footer} />
                </View>



        </SafeAreaView> 
        </>
    )
}
    const styles = StyleSheet.create({
    container:{

        // justifyContent:'center',
        backgroundColor:'#ffffff',


    },
    title:{
        marginTop:30,
        alignItems:'center'
    },
    form:{
        paddingHorizontal:30,
        marginTop:30
    },
    group:{
        marginTop:10
    },
    input:{
        borderBottomWidth:1,
        borderColor:'gray',
        backgroundColor:'white',
        paddingLeft:35

    },
    icon:{
        fontSize:25,
        position:'absolute',
        top:10,
        zIndex:100
    },
    group1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15
    },
    items:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:20,

    },
    main: {
        backgroundColor:'#ffffff',

    },
    buttons:{
        alignItems:'center',
        marginTop:10,
        backgroundColor:'#1bcdff',
        paddingVertical:10,
        borderRadius:10
    },
    footer:{
        justifyContent:'center',
        marginTop:70
    }

})

export default LoginTab;