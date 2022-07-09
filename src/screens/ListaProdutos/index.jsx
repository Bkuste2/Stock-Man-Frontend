import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native'
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

    const renderItem = ({ item: product }) => {
        return (
            <View style={container}>
                <ListElement
                    id={product.id}
                    productName={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    description={product.description}
                />
            </View>
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