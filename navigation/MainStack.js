import { createDrawerNavigator } from '@react-navigation/drawer';
import BottTabs from './tabs/BottomTabs';
import CustomDrawer from '../src/components/CutomDrawer';


const Drawer = createDrawerNavigator()
const Mainstack =( ) =>{
    return(
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props}/> }
        screenOptions={{headerShown: false}} 
        >
            <Drawer.Screen name='HomeScreen'  component={BottTabs}/>
        </Drawer.Navigator>
    )
}

export default Mainstack