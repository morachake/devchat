import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import {View} from "react-native";

export default  function ({name,size,color,style,onPress}){
    return(
        <TouchableWithoutFeedback>
            <View
                style={{
                    height:60,
                    width: 60,
                    backgroundColor:"#FFF",
                    elevation: 5,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color,
                    borderWidth: 1.2
                }}
            >
                <FontAwesome
                    name={name}
                    size={size}
                    color={color}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}