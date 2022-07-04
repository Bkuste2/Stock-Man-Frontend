import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { AndroidSafeArea } from './src/globalStyles';
import IndexPage from './src/screens/Index'
import Layout from './src/screens/Layout'

function App(){

    return(
        <View style={{flex:1, backgroundColor:"#000",}}>
            <Layout />
        </View>
    )
}

export default App;