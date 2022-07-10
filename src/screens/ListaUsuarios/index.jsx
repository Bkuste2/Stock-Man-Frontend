import React, { useEffect, useState } from 'react';
import { container } from './styles';
import { FlatList, View } from 'react-native'
import Header from '../../components/Header';
import ListElement from '../../components/ListElement';


import { api } from '../../assets/api';

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
        <>
            <Header />
            <View style={container}>
                <FlatList 
                    data={apiData} 
                    keyExtractor={apiData.id}
                    renderItem={getUsers}
                />  
            </View>
        </>
    )
} 

export default ListaUsuarios;