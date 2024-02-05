import {Text, View, StyleSheet, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function SwipeCard({name,age,location,distance,image}){
return(
    <View style={styles.container}>
        <Image source={image} stye={styles.image}/>
        <LinearGradient>

        </LinearGradient>
    </View>
)
}

const styles = StyleSheet.create({
    container : {

    },
    image :{

    }
})