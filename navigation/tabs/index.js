import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../src/views/home/HomeScreen';
import Chat from '../../src/views/home/Chat';
import Reels from '../../src/views/home/Reels';
import Profile from '../../src/views/home/Profile';


const Tab = createBottomTabNavigator();

export default function Tabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Profilers" component={Profile}/>
        </Tab.Navigator>
    )
}