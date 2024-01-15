import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HelpCenter() {
  return (
    <SafeAreaView>
        <Text>Help</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />cv 
    </SafeAreaView>
  );
}
