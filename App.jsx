import React from 'react'
import { View } from 'react-native'
import Layout from './src/screens/Layout'

function App(){
    return(
        <View style={{flex:1, backgroundColor:"#000",}}>
            <Layout />
        </View>
    )
}

export default App;