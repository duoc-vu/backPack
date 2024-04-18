import { Text, View ,Image, StyleSheet } from "react-native";
import DanhMuc from "../Component/DanhMuc";
import { ScrollView } from "react-native-gesture-handler";

const ListCategory = () => {
    return(
        <>
            <View>
                <DanhMuc title='Danh Mục'></DanhMuc>
            </View>
            
            <View style={styles.container}>
                <ScrollView horizontal>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                    <View style={styles.item}><Image source={require('../../assets/bia1.jpg')} style={{width:'100%', height:100}}/></View>
                </ScrollView>
            </View>
            
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    item:{
        width:88,
        alignItems:'center',
        borderWidth: 1,
        borderColor:'black',
        borderRadius:10,
        overflow:'hidden',
        marginHorizontal:5,
    }
});

export default ListCategory;