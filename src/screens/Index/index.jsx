import React from 'react'
import { View } from 'react-native'
import { container } from './styles'

import { useNavigation } from '@react-navigation/native'

import LogoComEscrita from '../../assets/img/LogoBoasVindas.jsx'

function Index(){

    const navigation = useNavigation()

    setTimeout(() => {
        navigation.navigate('BoasVindas')
    }, 3000)

    return(
        <View style={container}>
            <LogoComEscrita />
        </View>
    )
}
export default Index;