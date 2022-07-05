import { Dimensions, StyleSheet } from "react-native";

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const button = StyleSheet.create({
    marginTop: 20,
    width: width * 0.9,
    height: 60,
    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#1C1C1C",
    borderRadius: 29.5,

})

export const txtButton = StyleSheet.create({
    fontSize: 24,
    fontWeight: "300",
    color:"#fff",
    marginLeft:12,
})