import React, { useState } from 'react'
import { View } from 'react-native'
import { container } from './styles'

import IconCadastro from '../../assets/img/IconCadastro'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'
import { useNavigation } from '@react-navigation/native'
import {API_URL} from '@env'

function Cadastro(){

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleNavigate = (path) => {
        const url = `${path}`
        navigation.navigate(url)
    }

    const User = {
        username,
        email,
        password
    }


    return(
        <View style={ container }>
            <View style={{marginBottom:20,marginTop:40}}>
                <IconCadastro/>
            </View>
            
            <InputField placeholder="Nome" textInputFunction={name => setUserName(name)}/>
            <InputField placeholder="Email" textInputFunction={email => setEmail(email)}/>
            <InputField placeholder="Senha" textInputFunction={password => setPassword(password)}/>

            <View style={{marginBottom:65,marginTop:40,}}>
                <Button text={"Cadastro"} onPressButton={() => handleNavigate('Login')}/>
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe" onPressButton={handleNavigate('Cadastro')} />
        </View>
    )
}
export default Cadastro;