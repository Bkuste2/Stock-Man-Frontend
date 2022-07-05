import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
})

export const text = StyleSheet.create({
    color:"#fff",
})

export const important = StyleSheet.create({
    color:"#00FFFC",
});