import { Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const CustomDrawer = (props) =>{
    return(
       <DrawerContentScrollView 
       {...props}
       contentContainerStyle={{borderColor:'#0000'}}
       >
            <View>
                <Text>A top side</Text>
            </View>
            <DrawerItemList {...props} />
            <View>
                <Text>Botom</Text>
            </View>
       </DrawerContentScrollView>
    )
}

export default  CustomDrawer;