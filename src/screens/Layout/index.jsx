import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { AndroidSafeArea, container } from './styles'
import IndexPage from '../Index'
import BoasVindas from '../BoasVindas'
import Cadastro from '../Cadastro'
import Login from '../Login'


function Layout(){
    return(
        <View style={container}>
            <SafeAreaView style={AndroidSafeArea}>
                {/* <IndexPage /> */}
                {/* <BoasVindas /> */}
                {/* <Cadastro /> */}
                <Login />
            </SafeAreaView>
        </View>
    )
}

export default Layout;