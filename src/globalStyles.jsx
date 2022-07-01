import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:"#0A0A0A",
    },
    txtGrande:{
        fontSize:40,
    },
})