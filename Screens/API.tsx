import axios, { isCancel, AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import React, { Alert, Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const API = () => {

    const [selectedUser, setSelectedUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const intervalRef = useRef<any>(null);
    const [emailSel,setEmailSel] = useState('');

    const getApi = async () => {
        try {
            setIsLoading(true);
            const respon = await fetch('https://6620a7e23bf790e070b03688.mockapi.io/Account')
            const data = await respon.json();
            setUser(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }




    const addUser = async () => {
        try {
          setIsLoading(true);
          const formData = {
            email: email,
            password: password
          };
      
          if (selectedUser) {
            // Update the existing user
            await axios.put(`https://6620a7e23bf790e070b03688.mockapi.io/Account/${selectedUser}`, formData);
            Alert.alert(`Đã sửa user có id là ${selectedUser}`)
          } else {
            // Add a new user
            await axios.post('https://6620a7e23bf790e070b03688.mockapi.io/Account', formData);
            Alert.alert(`Đã thêm mới user`)
          }
        } catch (error) {
          console.error('Error adding/updating user:', error);
        } finally {
          setIsLoading(false);
          // Call the getApi() function to refresh the user list
          await getApi();
          setSelectedUser(null); // Reset the selected user
        }
      };

     const deleteUser = async () =>{
        if (selectedUser) {
            axios.delete(`https://6620a7e23bf790e070b03688.mockapi.io/Account/${selectedUser}`);
            Alert.alert(`Đã xóa user có id là ${selectedUser}`)
            await getApi();
        }
     }

    useEffect(() => {
        getApi();
        intervalRef.current = setInterval(getApi, 10000); // Gọi API mỗi 5 giây

        return () => {
            clearInterval(intervalRef.current); // Dừng interval khi component bị unmount
        };
    }, []);




    return (
        <>
            <GestureHandlerRootView >
                <View style={styles.container}>
                    {isLoading ? (
                        <Text>Loading...</Text>
                    ) : (
                        <FlatList
                            numColumns={1}
                            data={user}
                            renderItem={({ item }: any) =>
                            (
                                <TouchableOpacity
                                    style={styles.userRow}
                                    onPress={() => setSelectedUser(item.id)}
                                >
                                    <Text style={styles.userText}>{item.id}</Text>
                                    <Text style={styles.userText}>{item.email}</Text>
                                    <Text style={styles.userText}>{item.password}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>

                <View style={styles.editForm}>
                    <TextInput
                        style={styles.input}
                        
                        onChangeText={(value) => setEmail(value)}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        
                        onChangeText={(value) => setPassword(value)}
                        placeholder="Password"
                    />
                    <Button title="Thêm user" onPress={addUser} />
                    <Button title='Xóa' onPress={deleteUser} />
                </View>
            </GestureHandlerRootView>

        </>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    userText: {
        fontSize: 16,
        color: '#333',
        marginHorizontal: 8,
    },
    row: {
        flex: 1,
    },
    editForm: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
});

export default API;