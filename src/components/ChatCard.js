import { StyleSheet ,Text,View} from "react-native"

export default function ChatCard(options) {
    return (
        <View style={styles.container}>
            <Text>Belle Benson</Text>
            <Text>Hi, How are you ? Nice to meet you </Text>
            <Text>3</Text>
            <Text>3:45pm</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        alignContent : 'center',
        justifyContent : 'center',
        height: 80,
        width: '90%',
        marginVertical: 7,
        backgroundColor :"#501B41"
    }
})