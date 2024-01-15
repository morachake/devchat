import React from 'react';
import { TextInput, View , StyleSheet
} from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Search Message '
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

    }
})