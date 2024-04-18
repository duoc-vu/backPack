import { Text, View ,Image, StyleSheet } from "react-native";
import DanhMuc from "../Component/DanhMuc";

const ListCategory = () => {
    return(
        <>
            <View>
                <DanhMuc title='DanhMuc'></DanhMuc>
            </View>
            <View style={styles.container}>
                <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:80}}/></View>
                <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:80}}/></View>
                <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:80}}/></View>
                <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:80}}/></View>

            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    item:{
        width:'20%',
        borderWidth: 1,
        borderColor:'black',
        borderRadius:10,
        overflow:'hidden'
    }
});

export default ListCategory;