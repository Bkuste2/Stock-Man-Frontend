import React, { useState } from 'react'
import { View } from 'react-native'
import { container } from './styles'

import IconLogin from '../../assets/img/IconLogin'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'
import { useNavigation } from '@react-navigation/native'

function Login(){
    
    const navigation = useNavigation()
    
    function handleNavigateToCadastro(){
        navigation.navigate('Cadastro')
    }

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    
    return(
        <View style={ container }>
            <View style={{marginBottom:60,marginTop:40}}>
                <IconLogin/>
            </View>
            
            <InputField placeholder="Email" textInputFunction={text => setEmail(text)}/>
            <InputField placeholder="Senha" textInputFunction={text => setSenha(text)}/>

            <View style={{marginBottom:65,marginTop:60,}}>
                <Button text={"Entrar"} onPressButton={() => console.warn(email, senha)}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login?  " importantText="Participe" onPressButton={handleNavigateToCadastro}/>
        </View>
    )
}
export default Login;