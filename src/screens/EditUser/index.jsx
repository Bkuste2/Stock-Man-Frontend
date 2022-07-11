import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { API_URL } from '@env';

function EditUser(){
    const [id, setId] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const editUser = async () => {
        fetch(`${API_URL}/user/edit/${parseInt(id)}`, {
            method:"PUT",
            body: JSON.stringify(User),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json)
            .catch((e) => e.message)
    }

    console.log(id);

    const User = {
        username,
        email,
        password
    }

    return (
        <View style={{backgroundColor:"#fff"}} >
            <TextInput placeholder='id' value={id} onChangeText={setId} />
            <TextInput placeholder='nome' value={username} onChangeText={setUserName} />
            <TextInput placeholder='email' value={email} onChangeText={setEmail} />
            <TextInput placeholder='senha' value={password} onChangeText={setPassword} />
            <TouchableOpacity style={{borderColor:"FFF", borderWidth:2, width:100, height:100}} onPress={() => editUser()}/>
        </View>
    )
    
}
export default EditUser