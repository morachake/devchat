import {Text, View, StyleSheet, Image,Dimensions, Animated} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Fragment, useCallback} from "react";
import Option from "./Option";

const {height,width} =  Dimensions.get('screen');

export default function SwipeCard({user,isFirst , swipe, titlSign, ...rest}){

    const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
        inputRange: [-100,0,100],
        outputRange:['8deg','0deg','-8deg']
    })
    const animatedCardStyle ={
        transform: [...swipe.getTranslateTransform(),{rotate}]
    }
    const likeOpacity = swipe.x.interpolate({
        inputRange: [25,100],
        outputRange:[0,1],
        extrapolate: 'clamp'
    })
    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-100,-25],
        outputRange:[1,0],
        extrapolate: 'clamp'
    })
    const renderOption = useCallback(( ) =>{
        return(
            <Fragment>
                <Animated.View
                    style={[
                        styles.optionContainer,
                        styles.likeContainer,
                        {opacity: likeOpacity}
                    ]}
                >
                    <Option type="like"/>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.optionContainer,
                        styles.stashContainer,
                        {opacity: nopeOpacity}
                    ]}
                >
                    <Option type="nope"/>
                </Animated.View>
            </Fragment>
        )
    },[likeOpacity,nopeOpacity])

return(
    <Animated.View style={[
        styles.container,
        isFirst && animatedCardStyle
    ]} {...rest}>
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
    </Animated.View>
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