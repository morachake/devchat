import React from 'react';
import { TextInput, View , StyleSheet
} from 'react-native';
import { Searchbar } from 'react-native-paper';
export default function SearchBar() {
  return (
    <View style={styles.container}>
       <Searchbar 
        placeholder='Fnd conversation'
       />
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        width: 350,
        height: 60,
    },
    input:{
        borderColor: "#C53E8D"
    }
})