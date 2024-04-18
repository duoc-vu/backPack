import React, { Image, SectionList, StyleSheet, Text, View } from 'react-native';

const DanhBa = () => {
    const dataFake =[
        {title: "A", data:[{id:1,name :'Anh Duoc'}, {id:2,name :'Anh dz'}]},
        {title: "B", data:[{id:3,name :'BoBui'}, {id:4,name :'Boooo'} ,{id:9,name :'Bo000'}]},
        {title: "C", data:[{id:5,name :'Cuong'}, {id:6,name :'Ciu'},{id:7,name :'Chó'} , {id:8,name :'Chim'}]}

    ]
    return(
        <>
            <Text style={{backgroundColor:'gray' ,color:'white' ,fontSize:26 ,textAlign:'center'}}>Danh sách Bia</Text>
            <SectionList
                sections={dataFake}
                renderItem={({item})=>
                    <View style={styles.item}>
                        <Image source={require('../assets/biaDanhBa.jpg')} style={styles.avatar}/>
                        <Text>{item.name}</Text>
                    </View>
                }
                renderSectionHeader={({section})=><Text style={{backgroundColor:'#1bcdff' ,color:'white'}}>{section.title}</Text>}
            />
            
            
            

        </>
    )
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        margin:15
    },
    avatar :{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:15
    }
})
export default DanhBa;