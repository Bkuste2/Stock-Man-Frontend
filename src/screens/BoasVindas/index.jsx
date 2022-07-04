import React from 'react'
import { View } from 'react-native'
import { container } from './styles'

import LogoBoasVindas from '../../img/LogoBoasVindas'
import Button from '../../components/Button'

function BoasVindas(){

    return(
        <View style={ container }>
            <LogoBoasVindas/>
            <Button text={"Entrar"}/>
        </View>
    )
}
export default BoasVindas;