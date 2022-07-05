import React, { useState } from 'react'
import { View } from 'react-native'
import { container } from './styles'

import IconCadastro from '../../assets/img/IconCadastro'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'

function Cadastro(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    const arrayValidacao = [nome, email, Senha, confirmarSenha]
    return(
        <View style={ container }>
            <View style={{marginBottom:20,marginTop:40}}>
                <IconCadastro/>
            </View>
            
            <InputField value="Nome" textInputFunction={text => setNome(text)}/>
            <InputField value="Email" textInputFunction={text => setEmail(text)}/>
            <InputField value="Senha" textInputFunction={text => setSenha(text)}/>
            <InputField value="Confirmar Senha" textInputFunction={text => setConfirmarSenha(text)}/>

            <View style={{marginBottom:65,marginTop:40,}}>
                <Button text={"Cadastro"} onPressButton={console.warn(arrayValidacao)}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe"/>
        </View>
    )
}
export default Cadastro;