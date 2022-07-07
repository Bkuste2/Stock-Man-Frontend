import React, { useState } from 'react'
import { View } from 'react-native'
import { container } from './styles'

import IconCadastro from '../../assets/img/IconCadastro'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'
import { useNavigation } from '@react-navigation/native'

function Cadastro(){

    const navigation = useNavigation()
    
    function handleNavigateToLogin(){
        navigation.navigate('Login')
    }

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    
    const arrayValidacao = [nome, email, Senha, confirmarSenha]

    function handleSubmit(){
        console.warn(arrayValidacao)
    }


    return(
        <View style={ container }>
            <View style={{marginBottom:20,marginTop:40}}>
                <IconCadastro/>
            </View>
            
            <InputField placeholder="Nome" textInputFunction={text => setNome(text)}/>
            <InputField placeholder="Email" textInputFunction={text => setEmail(text)}/>
            <InputField placeholder="Senha" textInputFunction={text => setSenha(text)}/>
            <InputField placeholder="Confirmar Senha" textInputFunction={text => setConfirmarSenha(text)}/>

            <View style={{marginBottom:65,marginTop:40,}}>
                <Button text={"Cadastro"} onPressButton={handleSubmit}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe" onPressButton={handleNavigateToLogin} />
        </View>
    )
}
export default Cadastro;