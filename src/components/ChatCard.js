import { StyleSheet ,Text,View,Image} from "react-native"

export default function ChatCard(options) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assests/app.png')}
                    style={styles.image}
                />
            </View>
           <View>
               <Text>Belle Benson</Text>
               <Text>Hi, How are you ? Nice to meet you </Text>
               <Text>3</Text>
               <Text>3:45pm</Text>
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        display:'flex',
        flexDirection: 'row',
        borderRadius : 10,
        height: 80,
        width: '90%',
        marginHorizontal: 7,
        backgroundColor :"#5" +
            "01B41"
    },
    image :{

        height: 60,
        width:60
    }
})