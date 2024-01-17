import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList } from "react-native";
import { COLORS } from "../../constants/index";
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../components/Navbar";
import ChatMatches from "../../components/ChatMatches";
import ChatCard from "../../components/ChatCard";

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="white" />
        <NavBar />
        <View style={{alignItems:"center"}}>
          <SearchBar />
          <Text style={styles.text}>New Matches</Text>
        </View>
        <View style={{height:80}}>
            <FlatList
                data={[...Array(20).keys()]}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={() => <ChatMatches />}
            />
        </View>
          <ScrollView style={styles.scrollViewContainer}>
            <Text style={styles.text}>All Messages</Text>
              <ChatCard/>
          </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  text: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18,
  },
  scrollViewContainer: {
    // height: 200, 
  },
});
