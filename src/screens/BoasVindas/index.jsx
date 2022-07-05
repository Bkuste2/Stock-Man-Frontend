import React from 'react'
import { View } from 'react-native'
import { container } from './styles'

import LogoBoasVindas from '../../assets/img/LogoBoasVindas'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'

function BoasVindas(){

    return(
        <View style={ container }>
            <View style={{marginBottom:45,}}>
                <LogoBoasVindas/>
            </View>
            <View style={{marginBottom:65,}}>
                <Button text={"Entrar"}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe"/>
        </View>
    )
}
export default BoasVindas;