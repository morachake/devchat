import {StyleSheet, View, Animated, Dimensions,PanResponder} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import SwipeCard from "../../components/SwipeCard";
import {users as UsersArray} from "../../../utilis/data"
import {useEffect, useRef, useState} from "react";
import ChatFooter from "../../components/ChatFooter.";

const {width,height} = Dimensions.get("screen")
export default function HomeScreen (){
    const [users,setUsers] = useState(UsersArray)

    const swipe = useRef(new Animated.ValueXY()).current;
    const titlSign = useRef(new Animated.Value(1)).current

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderMove: (_, {dx,dy,y0}) =>{
            swipe.setValue({x:dx, y: dy})
            titlSign.setValue(y0 > (height* .9 )/2 ? 1: -1)
        },

        onPanResponderRelease :(_, {dx,dy}) =>{
            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > 100

            if(isActionActive){
            //     swipe card oof screen
                Animated.timing(swipe,{
                    duration: 100,
                    toValue :{
                        x: direction * 500,
                        y: dy
                    },
                    useNativeDriver: true
                }).start()
            } else{
            //     return card to original position
                Animated.spring(swipe,{
                    toValue: {
                        x: 0,
                        y: 0
                    },
                    useNativeDriver : true,
                    friction: 5
                }).start()
            }
        }

    })

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
                    const dragHandlers = isFirst ? panResponder.panHandlers:{};
                    return (
                        <SwipeCard
                            key={index}
                            user={user}
                            isFirst={isFirst}
                            swipe={swipe}
                            titlSign={titlSign}
                            {...dragHandlers}
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