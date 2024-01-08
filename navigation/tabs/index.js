import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../src/views/home/HomeScreen';
import Chat from '../../src/views/home/Chat';


const Tab = createBottomTabNavigator();

export default function Tabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
    )
}