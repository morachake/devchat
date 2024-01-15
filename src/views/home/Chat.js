import { View,Text,StyleSheet, StatusBar } from "react-native";
import {COLORS} from "../../constants/index"
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Chat () {
    return(
        <SafeAreaView>
        <StatusBar style="auto"/>
            <View style={styles.container}>
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : COLORS.background,
    }
})