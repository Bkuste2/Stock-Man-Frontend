import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const input = StyleSheet.create({
    marginTop:20,
    width:width * 0.9, 
    color:"#00FFFC",
    borderWidth:1,
    paddingBottom:10,
    borderBottomColor:"#00FFFC"
})