
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/auth/Login';
import Splash from '../views/auth/Splash';

const Stack = createStackNavigator()

const AuthStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Onboarding" component={Splash} />
        </Stack.Navigator>
    )
}

export default AuthStack