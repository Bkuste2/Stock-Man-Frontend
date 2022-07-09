import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native'
import ListElement from '../../components/ListElement';
import { container } from './styles';

import { api } from '../../api';

const ListaUsuarios = () => {

    const [apiData, setApiData] = useState({})
    useEffect(() => {
        const getApi = async () => {
            const response = await api.get('/user')
            setApiData(response.data.data)
        }
        getApi()   
    }, [])

    const renderItem = ({ item: user }) => {
        return (
            <ListElement
                id={user.id}
                username={user.username}
                email={user.email}
                isUser
            />
        )
    }
    
    
    return (
        <View style={container}>
            <FlatList 
                data={apiData} 
                keyExtractor={apiData.id}
                renderItem={renderItem}
            />  
        </View>
    )
} 

export default ListaUsuarios;