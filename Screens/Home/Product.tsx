import React, { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import DanhMuc from '../Component/DanhMuc';

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
    return(
        <>
            <DanhMuc title='DanhMuc'/>
            <View style={styles.container}>
                <FlatList 
                numColumns={2}
                columnWrapperStyle={styles.row}
                scrollEnabled={false}
                data={listPro}
                renderItem={({item})=>
                    <View style={styles.item}>
                        <Image source={require('../../assets/biaDanhBa.jpg')} style={{width:'100%', height:150}}/>
                        <View style={styles.dess}>
                                <Text style={{color:'#fff' , textAlign:'center', padding:7}}>{item.name}</Text>
                        </View>
                    </View>
                }
                />
                
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