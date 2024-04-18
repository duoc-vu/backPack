import React, { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import DanhMuc from '../Component/DanhMuc';
import { useEffect, useState } from 'react';

const Product = () => {
    const listPro =[
        {id:1 , name:'FIFA01'},
        {id:2 , name:'FIFA02'},
        {id:3 , name:'FIFA03'},
        {id:4 , name:'FIFA04'},
        {id:5 , name:'FIFA05'},
        {id:6 , name:'FIFA06'},
        {id:7 , name:'FIFA07'},
        {id:8 , name:'FIFA08'},
        {id:9 , name:'FIFA09'},
    ]

    const [games,setGames] = useState([]);
    const [isLoading,setLoading] = useState(true)
    // const getApi =() => {
    //     return fetch ('https://6620a7e23bf790e070b03688.mockapi.io/games').
    //     then((respone) => respone.json())
    //     .then((data) => setGames(data))
    //     .catch(err =>   console.log(err))
    // }

    const getApi =async () => {
        try {
            const respone = await fetch('https://6620a7e23bf790e070b03688.mockapi.io/games')
            const data = await respone.json();
            setGames(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    
    }

    useEffect(() => {
        getApi();
    },[]);

    return(
        <>
            <DanhMuc title='Sản phẩm'/>
            <View style={styles.container}>
                {isLoading ? (<ActivityIndicator/>) : (
                    <FlatList 
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    scrollEnabled={false}
                    data={games}
                    renderItem={({item}:any)=>
                        <View style={styles.item}>
                            <Image source={{uri:item.avatar}} style={{width:'100%', height:150}}/>
                            <View style={styles.dess}>
                                    <Text style={{color:'#fff' , textAlign:'center', padding:7}}>{item.name}</Text>
                            </View>
                        </View>
                        }
                    />
                )}  
            </View>
            
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    item:{
        width:'45%',
        marginBottom:10
    },
    dess:{
        backgroundColor:'black'
    },
    row:{
        flex:1,
        justifyContent:'space-between'
    }
})
export default Product;