import { View,Text,StyleSheet, StatusBar } from "react-native";
import {COLORS} from "../../constants/index"
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../components/Navbar";
export default function Chat () {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <NavBar/>
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