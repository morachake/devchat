import { createDrawerNavigator } from '@react-navigation/drawer';
import BottTabs from './tabs/BottomTabs';
import CustomDrawer from '../components/CutomDrawer';
import HelpCenter from '../views/home/HelpCenter';
import Safety from '../views/home/Safety';


const Drawer = createDrawerNavigator()
const Mainstack =( ) =>{
    return(
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props}/> }
        screenOptions={{headerShown: false}} 
        >
            <Drawer.Screen name='HomeScreen'  component={BottTabs}/>
            <Drawer.Screen name="Help Center" component={HelpCenter}/>
            <Drawer.Screen name="Safety" component={Safety}/>
        </Drawer.Navigator>
    )
}

export default Mainstack