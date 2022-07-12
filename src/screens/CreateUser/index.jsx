import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { API_URL } from '@env';
import { useNavigation } from '@react-navigation/native';

function CreateUser(){

    const navigation = useNavigation()
    
    const handleNavigate = (path) => {
        const url = `${path}`
        navigation.navigate(url)
    } 

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async () => {
        fetch(`${API_URL}/user/create`, {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error))
    }

    const User = {
        username,
        email,
        password 
    }

    return(
        <View style={{backgroundColor:"#fff"}}>
            <TextInput placeholder='nome' value={username} onChangeText={setUserName} />
            <TextInput placeholder='email' value={email} onChangeText={setEmail} />
            <TextInput placeholder='senha' value={password} onChangeText={setPassword} />
            <TouchableOpacity style={{borderColor:"FFF", borderWidth:2, width:100, height:100}} onPress={() => createUser()}/>
            <TouchableOpacity style={{borderColor:"red", borderWidth:2, width:100, height:100}} onPress={() => handleNavigate('ListaUsuarios')}/>
        </View>
    )
    
}
export default CreateUser