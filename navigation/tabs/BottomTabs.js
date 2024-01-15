import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../src/views/home/HomeScreen';
import Chat from '../../src/views/home/Chat';
import Reels from '../../src/views/home/Reels';
import Profile from '../../src/views/home/Profile';
import { MaterialIcons ,AntDesign,MaterialCommunityIcons,EvilIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottTabs () {
    const color = '#DD3562'
    const size = 40
    return (
        <Tab.Navigator
            tabBarOptions ={{
                initialRouteName:'Home',
                activeTintColor: "#1B1142", 
                inactiveTintColor: "#A8A8A8",
                style:{
                    backgroundColor: "#DD3562",
                    borderTopColor: 'transparent'
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon :({ color,size}) =>(
                       <AntDesign name="home" size={size} color={color} />
                        )
                    }}  
            />
            <Tab.Screen 
                name="Reels" 
                component={Reels} 
                options={{
                    tabBarIcon:({color,size}) =>(
                        <MaterialCommunityIcons name="dots-grid" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Chat" 
                component={Chat} 
                options={{
                    tabBarIcon:({color,size}) =>(
                        <MaterialIcons name="chat" size={size} color={color} />

                    )
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:({color,size}) =>(
                        <EvilIcons name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}