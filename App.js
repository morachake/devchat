import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar style='dark'/>
     {/* <AuthStack /> */}
     <MainStack />
   </NavigationContainer>
  );
}

