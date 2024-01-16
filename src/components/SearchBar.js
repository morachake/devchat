import React from 'react';
import { TextInput, View , StyleSheet
} from 'react-native';
import { Searchbar } from 'react-native-paper';
export default function SearchBar() {
  return (
       <Searchbar 
        placeholder='Fnd conversation'
        style={styles.input}
       />
  );
}

const styles = StyleSheet.create({
    input:{
      width: "90%",
      borderWidth: 1 ,
      borderColor: "#C53E8D",
    }
})