import {Text, View} from "react-native";
import FooterBtn from "./FooterBtn";

const COLORS ={
    like:"green",
    nope:"red",
    star:"#078bff"
}
export default function ({handleChoice}){
    return(
        <View  style={{
            position: "absolute",
            bottom: 15,
            width: 240,
            flexDirection:"row",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: -999
        }}>
            <FooterBtn
                name="times"
                size={25}
                color={COLORS.nope}
                onPress={()=> handleChoice(-1)}
            />
            <FooterBtn
                name="star"
                size={25}
                color={COLORS.star}
            />
            <FooterBtn
                name="heart"
                size={25}
                color={COLORS.like}
                onPress={()=>handleChoice(1)}
            />
        </View>
    )
}