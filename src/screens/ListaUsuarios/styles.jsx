import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#000",
    flex: 1,
})