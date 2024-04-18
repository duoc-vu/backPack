import { StyleSheet, Text, View } from "react-native";
type DanhMucProps = {
    title:String
}

const DanhMuc = ({title}:DanhMucProps) => {
    return(
        <View style={styles.container}>
            <View><Text style={{color:'red' ,fontWeight:'bold' }}>Danh Muc</Text></View>
            <View><Text style={{fontWeight:'bold'}}>Day la chu mau den</Text></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignContent:'center',paddingVertical:15
    }
})

export default DanhMuc;