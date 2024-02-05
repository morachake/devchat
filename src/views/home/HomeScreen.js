import {StyleSheet, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import SwipeCard from "../../components/SwipeCard";

export default function HomeScreen (){
    return (
        <>
            <StatusBar
                style="auto"
                translucent={true}
                backgroundColor='#FFFF'
                statusBarAnimation='fade'
            />
            <SafeAreaView style={styles.container}>
               <SwipeCard/>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor:'#c1239a'
    }
})