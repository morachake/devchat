import {Text, View, StyleSheet, Image,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Fragment} from "react";
import Option from "./Option";

const {height,width} =  Dimensions.get('screen');

export default function SwipeCard({user,isFirst}){
    const renderOption = () =>{
        return(
            <Fragment>
                <View
                    style={[styles.optionContainer,styles.likeContainer]}
                >
                    <Option type="like"/>
                </View>
                <View
                    style={[styles.optionContainer,styles.stashContainer]}
                >
                    <Option type="nope"/>
                </View>
            </Fragment>
        )
    }

return(
    <View style={styles.container}>
        <Image source={user.image} style={styles.image}/>
        <LinearGradient
            colors={['rgba(0,0,0,0.9)', 'transparent']}
            style={styles.gradient}
        >
            <View style={styles.userContainer}>
                <Text style={styles.name}>{user.name} {user.age}</Text>
                <Text style={styles.location}>Lives In{user.location}</Text>
                <Text style={styles.distance}>{user.distance} Miles away</Text>
            </View>
        </LinearGradient>
        {isFirst && renderOption()}
    </View>
)
}

const styles = StyleSheet.create({
    container : {
        position:"absolute",
        top:25
    },
    image :{
        width: width * 0.97,
        height: height * 0.74,
        borderRadius: 20

    },
    userContainer:{
        position: "absolute",
        bottom: 24,
        left:24
    },
    gradient:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    name:{
        color:"white",
        fontSize: 30,
        fontWeight:"400"
    },
    location:{
        color:"white",
        fontSize: 18,
        fontWeight: "600"
    },
    distance:{
        color:"white",
        fontSize: 18,
        fontWeight: "300"
    },
    optionContainer:{
        position:"absolute",
        top:100
    },
    likeContainer:{
        left: 45,
        transform:[{rotate: "-30deg"}]
    },
    stashContainer:{
        right: 45,
        transform:[{rotate: "30deg"}]
    }
})