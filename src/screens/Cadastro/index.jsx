import React from 'react'
import { View } from 'react-native'
import { container } from './styles'

import IconCadastro from '../../assets/img/IconCadastro'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'

function Cadastro(){

    return(
        <View style={ container }>
            <View style={{marginBottom:30,}}>
                <IconCadastro/>
            </View>
            
            <InputField placeholder="Nome"/>

            <View style={{marginBottom:65,}}>
                <Button text={"Cadastro"}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe"/>
        </View>
    )
}
export default Cadastro;