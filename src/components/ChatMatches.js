import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function ChatMatches() {
  return (
    <ScrollView>
        <View style={{width:60,height:60,backgroundColor:"#612DA6",justifyContent:"center",alignItems:"center",borderRadius:30,marginHorizontal:4}}>
            <FontAwesome name="user-circle" size={44} color="black" />
        </View>
    </ScrollView>
  );
}
