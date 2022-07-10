import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native'
import ListElement from '../../components/ListElement';
import { container } from './styles';

import { api } from '../api';

const ListaUsuarios = () => {

    const [apiData, setApiData] = useState({})
    
    const getUsers = ({item: user}) =>{
        return (
            <ListElement username={user.username} email={user.email} isUser />
        )
    }
    
    useEffect(()=> { 
        const getApi = async () => {
            const response = await api.get('/user')
            setApiData(response.data.data)
        }
        getApi()
    }, [])
    
    
    return (
        <View style={container}>
            <FlatList 
                data={apiData} 
                keyExtractor={apiData.id}
                renderItem={getUsers}
            />  
        </View>
    )
} 

export default ListaUsuarios;