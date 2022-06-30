import React from 'react'
import { SafeAreaView } from 'react-native'
import globalStyles from './globalStyles';

import IndexPage from './screens/BoasVindas'

function App(){

    return(
        <>
            <SafeAreaView style={globalStyles.AndroidSafeArea}>
                <IndexPage />
            </SafeAreaView>
        </>
    )
}

export default App;