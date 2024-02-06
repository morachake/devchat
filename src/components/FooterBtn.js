import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import {View,Animated} from "react-native";
import {useCallback, useRef} from "react";

export default  function ({name,size,color,style,onPress}){
    const scale = useRef(new Animated.Value(1)).current;

    const animatedScale = useCallback((newValue)=>{
            Animated.spring(scale,{
                toValue:newValue,
                triction:4,
                useNativeDriver: true
            }).start()
    },[scale])
    return(
        <TouchableWithoutFeedback
            onPressIn={()=>animatedScale(0.6)}
            onPressOut={()=>{
                animatedScale(1)
                onPress()
            }}
            delayPressIn={0}
            delayPressOut={100}
        >
            <Animated.View
                style={{
                    height:60,
                    width: 60,
                    backgroundColor:"#FFF",
                    elevation: 5,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color,
                    borderWidth: 1.2,
                    transform:[{scale}],
                    ...style
                }}
            >
                <FontAwesome
                    name={name}
                    size={size}
                    color={color}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}