import { Dimensions, StyleSheet } from "react-native";


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    height: height * 0.1,
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: "#00FFFC",
})

export const txt = StyleSheet.create({
    color: "#00FFFC",
    fontWheight: "light",
    fontSize: 16,
    marginLeft: 10,
})
