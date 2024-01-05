import { StyleSheet, View, Text } from "react-native"

export default function Home (){
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        backgroundColor: 'linear-gradient(180deg, #F4FDFF 0%, #FFFEF8 100%)'
    }
})