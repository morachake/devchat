import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home page</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container :{
        backgroundColor: 'linear-gradient(180deg, #F4FDFF 0%, #FFFEF8 100%)'
    }
})