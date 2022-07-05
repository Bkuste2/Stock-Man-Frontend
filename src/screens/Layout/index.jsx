import React from 'react'
import { SafeAreaView } from 'react-native'
import { AndroidSafeArea } from '../../globalStyles'
import BoasVindas from '../BoasVindas'
import IndexPage from '../Index'
import Cadastro from '../Cadastro'


function Layout(){
    return(
        <SafeAreaView style={AndroidSafeArea}>
            {/* <IndexPage /> */}
            {/* <BoasVindas /> */}
            <Cadastro />
        </SafeAreaView>
    )
}

export default Layout;