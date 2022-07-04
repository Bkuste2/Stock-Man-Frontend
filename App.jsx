import React from 'react'
import { SafeAreaView } from 'react-native'
import globalStyles from './src/globalStyles';
import IndexPage from './src/screens/Index'
import BoasVindas from './src/screens/BoasVindas';

function App(){

    return(
        <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <IndexPage />
            <BoasVindas children={"OI"}/>
        </SafeAreaView>
    )
}

export default App;