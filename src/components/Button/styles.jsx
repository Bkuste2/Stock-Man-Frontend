import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const button = StyleSheet.create({
    marginTop: 20,
    width: width * 0.9,
    height: 60,
    
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#00FFFC",
    borderRadius: 29.5,

})

export const txtButton = StyleSheet.create({
    fontSize: 32,
})