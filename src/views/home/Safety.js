import React from 'react';
import { View,Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Safety() {
  return (
    <SafeAreaView>
    <StatusBar style="auto"/>
      <View>
        <Text>Safety</Text>
    </View>
    </SafeAreaView>
  
  );
}
