import {StyleSheet, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import SwipeCard from "../../components/SwipeCard";
import {users as UsersArray} from "../../../utilis/data"
import {useEffect, useState} from "react";
import ChatFooter from "../../components/ChatFooter.";
export default function HomeScreen (){
    const [users,setUsers] = useState(UsersArray)
    useEffect(() => {
        if(!users.length){
            setUsers(UsersArray)
        }
    }, [users.length]);
    return (
            <View style={styles.container}>
                <StatusBar
                    style="auto"
                    translucent={true}
                    backgroundColor='#FFFF'
                    statusBarAnimation='fade'
                />
                {users.map(( user , index) => {
                    const isFirst = index === 0;
                    return (
                        <SwipeCard
                            key={index}
                            user={user}
                            isFirst={isFirst}
                        />
                    )

                }).reverse()
                }
                <ChatFooter/>
            </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor:'#FFF',
        alignItems:"center"
    }
})