import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
       {/* {insets => <View style={{ paddingTop: insets.top }} />} */}
      <NavigationContainer>
     <StatusBar style='dark'/>
     {/* <AuthStack /> */}
     <MainStack />
   </NavigationContainer>
    </SafeAreaProvider>
   
  );
}

