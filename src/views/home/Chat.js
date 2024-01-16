import { View,Text,StyleSheet, StatusBar } from "react-native";
import {COLORS} from "../../constants/index"
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../components/Navbar";
import ChatMatches from "../../components/ChatMatches";
export default function Chat () {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <NavBar/>
            <View>
                <SearchBar />
                <Text style={styles.text}>New Matches</Text>
            </View>
            <ChatMatches/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : COLORS.background,
        alignItems: 'center',
    },
    text:{
        marginTop: 10,
        color:"#FFFFFF",
        fontSize: 18,
    }
})