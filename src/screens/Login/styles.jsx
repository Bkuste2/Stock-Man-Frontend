import { Dimensions, StyleSheet } from "react-native";



let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:width,
    height:height,
    paddingHorizontal:23,
    backgroundColor:"#000",
})