import axios, { isCancel, AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import React, { Alert, Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const API = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const intervalRef = useRef<any>(null);
    const [newUser, setNewUser] = useState({ email: '', password: '' });
    const [editingUser, setEditingUser] = useState(null);

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

    useEffect(() => {
        getApi();
        intervalRef.current = setInterval(getApi, 10000); // Gọi API mỗi 5 giây

        return () => {
            clearInterval(intervalRef.current); // Dừng interval khi component bị unmount
        };
    }, []);


    const addUser = async () => {
        try {
            setIsLoading(true);
            await fetch('https://6620a7e23bf790e070b03688.mockapi.io/Account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            setNewUser({ email: '', password: '' });
            getApi(); // Gọi lại API để cập nhật danh sách
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    

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
                    (<View style={styles.userRow}>
                        <Text style={styles.userText}>{item.id}</Text>
                        <Text style={styles.userText}>{item.email}</Text>
                        <Text style={styles.userText}>{item.password}</Text>
                    </View>
                    )}
                />
            )}
        </View>

        <View style={styles.editForm}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setNewUser({ ...newUser, email: text })}
                                value={newUser.email}
                                placeholder="Email"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setNewUser({ ...newUser, password: text })}
                                value={newUser.password}
                                placeholder="Password"
                            />
                            <Button title="Thêm user" onPress={addUser} />
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