import { Dimensions, StyleSheet } from "react-native";


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const container = StyleSheet.create({
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
})

export const user = StyleSheet.create({
   marginRight: width * 0.05,
})