import {Text, View, StyleSheet, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function SwipeCard({name,age,location,distance,image}){
return(
    <View style={styles.container}>
        <Image source={image} stye={styles.image}/>
        <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={styles.gradient}
        >
            <View style={styles.userContainer}>
                <Text style={styles.name}>{name} {age}</Text>
                <Text style={styles.location}>Lives In{location}</Text>
                <Text style={styles.distance}>{distance}</Text>
            </View>
        </LinearGradient>
    </View>
)
}

const styles = StyleSheet.create({
    container : {

    },
    image :{

    },
    userContainer:{

    },
    gradient:{

    },
    location:{

    },
    distance:{

    },

})