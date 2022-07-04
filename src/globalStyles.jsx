import { StyleSheet, StatusBar } from "react-native";

export const AndroidSafeArea = StyleSheet.create({
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
})

export const container = StyleSheet.create({
    flex:1,
    backgroundColor:"#000",
})