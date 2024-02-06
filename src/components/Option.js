import {Text, View} from "react-native";


const COLORS ={
    like:"green",
    nope:"red",
}
export default function ({type}){
    const  color = COLORS[type]
    return(
        <View
            style={{
                borderWidth: 7,
                paddingHorizontal: 15,
                borderRadius: 15,
                backgroundColor: 'rgba(0,0,0,.2',
                borderColor: color
            }}
        >
            <Text
                style={{
                    fontSize:48,
                    fontWeight:"bold",
                    textTransform:"uppercase",
                    letterSpacing:4,
                    color:color
                }}
            >{type}</Text>
        </View>
    )
}