import React from 'react'
import { View } from 'react-native'
import { container } from './styles'

import LogoBoasVindas from '../../assets/img/LogoBoasVindas'
import Button from '../../components/Button'
import ButtonGoogle from '../../components/ButtonSignWithGoogle'
import BottomText from '../../components/BottomText'
import { BASE_URL } from '@env'

import { useNavigation } from '@react-navigation/native'

function BoasVindas(){

    const navigation = useNavigation()

    const handleNavigate = (path) => {
        const url = `${path}`
        navigation.navigate(url)
    }
    
    // function handleNavigateToLogin(){
    //     navigation.navigate('Login')
    // }
    
    // function handleNavigateToCadastro(){
    //     navigation.navigate('Cadastro')
    // }

    return(
        <View style={ container }>
            <View style={{marginBottom:45,}}>
                <LogoBoasVindas/>
            </View>
            <View style={{marginBottom:65,}}>
                <Button text={"Entrar"} onPressButton={()=> handleNavigate('Login')} />
                <ButtonGoogle text={"Entrar com Google"}/>
            </View>
            <BottomText firstText="Ainda não possui login? " importantText="Participe" onPressButton={() => handleNavigate('Cadastro')}/>
        </View>
    )
}
export default BoasVindas;