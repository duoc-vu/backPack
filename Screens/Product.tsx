import React, { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

import DanhMuc from './Component/DanhMuc';
import { useEffect, useState } from 'react';
import Waitting from './Component/Waitting';

const Product = () => {


    const [isLoading, setLoading] = useState(true)
    const [games, setGames] = useState([]);
    // const getApi = () =>{
    //     return fetch('https://6620a7e23bf790e070b03688.mockapi.io/games').
    //     then((respon) => respon.json())
    //     .then((data) =>setGames(data))
    //     .catch(err=>console.log(err))

    // }

    const getApi = async () => {
        try {
            const respon = await fetch('https://6620a7e23bf790e070b03688.mockapi.io/games')
            const data = await respon.json();
            setGames(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getApi();
    }, []);


    return (
        <>
            <DanhMuc title='DanhMuc' />
            <View style={styles.container}>
                {isLoading ? (<Waitting />) : (
                    <FlatList style={{ flex: 1 }}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        data={games}
                        renderItem={({ item }: any) =>
                            <View style={styles.item}>
                                <Image source={{ uri: item.avatar }} style={{ width: '100%', height: 120 }} />
                                <View style={styles.dess}>
                                    <Text style={{ color: '#fff', textAlign: 'center', padding: 7 }}>{item.name}</Text>
                                </View>
                            </View>
                        }
                    />
                )}


            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    item: {
        width: '45%',
        marginBottom: 10
    },
    dess: {
        backgroundColor: 'black'
    },
    row: {
        flex: 1,
        justifyContent: 'space-between'
    }
})
export default Product;