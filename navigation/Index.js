import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from "./tabs";

const Tab = createBottomTabNavigator()
export default function Navigator () {
    return (
        <Tabs />
    )
}