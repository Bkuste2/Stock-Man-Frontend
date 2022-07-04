import React from 'react'
import { SafeAreaView } from 'react-native'
import { AndroidSafeArea } from '../../globalStyles'
import BoasVindas from '../BoasVindas'
import IndexPage from '../Index'


function Layout(){
    return(
        <SafeAreaView style={AndroidSafeArea}>
            {/* <IndexPage /> */}
            <BoasVindas />
        </SafeAreaView>
    )
}

export default Layout;