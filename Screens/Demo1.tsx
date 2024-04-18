import React, { FlatList, Image, ScrollView, View } from 'react-native';
import { Text } from 'react-native';
const Demo1 = () => {
    const dataFake=[
        {id :1 , name:'dat09' , image:'https://png.pngtree.com/element_origin_min_pic/16/06/09/205759612b2a595.jpg'},
        {id :2 , name:'dat07' , image:'https://png.pngtree.com/element_origin_min_pic/16/06/09/205759612b2a595.jpg'},
        {id :3 , name:'dat G' , image:'https://png.pngtree.com/element_origin_min_pic/16/06/09/205759612b2a595.jpg'},
        {id :4 , name:'dat 1 lit' , image:'https://png.pngtree.com/element_origin_min_pic/16/06/09/205759612b2a595.jpg'},
        {id :5 , name:'dat 1 lit' , image:'https://png.pngtree.com/element_origin_min_pic/16/06/09/205759612b2a595.jpg'}
    ]
    return(
        <>
         <Text style={{backgroundColor:'#1bcdff',padding:10 ,color:'white' ,textAlign:'center'}}>Demo Flast List</Text>
        {/* <ScrollView horizontal>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg')} style={{width:200 ,height:200}}/>
                </View>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg')}style={{width:200 ,height:200}}/>
                </View>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg') }style={{width:200 ,height:200}}/>
                </View>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg')}style={{width:200 ,height:200}}/>
                </View>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg')}style={{width:200 ,height:200}}/>
                </View>
                <View style={{margin:15}}>
                    <Text>Duoc Vu</Text>
                    <Image source={require('../assets/bia1.jpg')}style={{width:200 ,height:200}}/>
                </View>
        </ScrollView> */}
            <FlatList data={dataFake} renderItem={({item})=>
                <View style={{margin:15}}>
                    <Text>{item.name}</Text>
                    <Image source={{uri:item.image}}style={{width:200 ,height:200}}/>
                </View>
            } />
        </>
    )
}

export default Demo1;