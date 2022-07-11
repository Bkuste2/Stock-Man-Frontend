import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { API_URL } from '@env';

function DeleteUser() {

    const [Id, setId] = useState('')

    const deleteUser = async () => {
        fetch(`${API_URL}/user/delete/${parseInt(Id)}`, {
            method: "delete"
        })
    }

    return (
        <View style={{backgroundColor:"#fff"}}>
            <TextInput placeholder='ID' value={Id} onChangeText={setId}/>
            <TouchableOpacity style={{ borderColor: "FFF", borderWidth: 2, width: 100, height: 100 }} onPress={() => deleteUser(1)} />
        </View>
    )

}
export default DeleteUser