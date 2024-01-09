import { createDrawerNavigator } from '@react-navigation/drawer';
import BottTabs from './tabs/BottomTabs';


const Drawer = createDrawerNavigator()
const Mainstack =( ) =>{
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='HomeScreen'  component={BottTabs}/>
        </Drawer.Navigator>
    )
}

export default Mainstack