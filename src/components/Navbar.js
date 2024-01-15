import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
export default function NavBar () {
    return (
        <View style={styles.container}>
            <>
                <MaterialIcons name="message" size={40} color="#F64A69" />
                <Text style={{color:"#FFFF",fontSize:15}}>Add new Message</Text>
            </>
           
           <FontAwesome5 name="archive" size={24} color="#BADAFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        paddingHorizontal: 18
    }
})