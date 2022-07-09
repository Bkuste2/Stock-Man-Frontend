import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native'
import ListElement from '../../components/ListElement';
import { container } from './styles';

import { api } from '../../api';

const ListaProdutos = () => {

    const [apiData, setApiData] = useState({})
    useEffect(() => {
        const getApi = async () => {
            const response = await api.get('/product')
            setApiData(response.data.data)
        }
        getApi()   
    }, [])

    const renderItem = ({ item: user }) => {
        return (
            <ListElement
                id={user.id}
                name={user.name} 
                quantity={user.units}
                price={user.price}
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

export default ListaProdutos;