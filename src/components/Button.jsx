import React from 'react'
import { Button, View } from 'react-native'

function App({text}){

    return(
        <View>
            <Button title={text}></Button>
        </View>
    )
}      

export default App;