import {Text, View} from "react-native";


const COLORS ={
    like:"green",
    nope:"red",
}
export default function ({type}){
    return(
        <View>
            <Text>{type}</Text>
        </View>
    )
}