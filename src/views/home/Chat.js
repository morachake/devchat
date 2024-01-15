import { View,Text,StyleSheet, StatusBar } from "react-native";
import {COLORS} from "../../constants/index"
export default function Chat () {
    return(
        <>
        <StatusBar style="auto"/>
        <View style={styles.container}>
           
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : COLORS.background,
    }
})