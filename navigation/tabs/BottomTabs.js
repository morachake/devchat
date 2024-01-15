import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../../src/views/home/HomeScreen';
import Chat from '../../src/views/home/Chat';
import Reels from '../../src/views/home/Reels';
import Profile from '../../src/views/home/Profile';
import { MaterialIcons ,AntDesign,MaterialCommunityIcons,EvilIcons} from '@expo/vector-icons';
import { COLORS } from '../../src/constants';

const Tab = createMaterialBottomTabNavigator();

export default function BottTabs () {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
            }}
            labeled={false}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{backgroundColor: COLORS.background}}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon :({ color,size}) =>(
                       <AntDesign name="home" size={24} color="#FFFFFF" />
                        )
                    }}  
            />
            <Tab.Screen 
                name="Reels" 
                component={Reels} 
                options={{
                    tabBarIcon:({color,size}) =>(
                        <MaterialCommunityIcons name="dots-grid" size={27} color="#FFFFFF" />
                    )
                }}
            />
            <Tab.Screen 
                name="Chat" 
                component={Chat} 
                options={{
                    tabBarIcon:({color,size}) =>(
                        <MaterialIcons name="chat" size={26} color="#FFFFFF" />

                    )
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:({color,size}) =>(
                        <EvilIcons name="user" size={26} color="#FFFFFF" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}