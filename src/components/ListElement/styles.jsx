import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    height: height * 0.12,
    width: width * 0.9,
    
    borderBottomColor:"#00FFFC",
    borderBottomWidth:2,

    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
})

export const textFormat = StyleSheet.create({
    color:"#fff",
})