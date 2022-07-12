import React, { useEffect, useState } from 'react';
import { container } from './styles';
import { FlatList, View, ScrollView } from 'react-native'
import Header from '../../components/Header';
import AddItem from '../../components/AddItem'
import User from '../../components/User'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { API_URL } from '@env';


const ListaUsuarios = () => {
    useEffect(() => {
        const getUsers = async () => {
            fetch(`${API_URL}/users`,{
                method:"GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => setUsers(json.data))
                .catch((error) => console.error(error))
        }

        getUsers()
        // getUser()
    }, [])

    const [users, setUsers] = useState({})

    //Usuário
    const [userSelected, setUserSelected] = useState({})
    
    
    
    const renderUsers = ({ item: user }) => {
        return <User username={user.username} email={user.email} />
    }
    
    const navigation = useNavigation();
    //Pegar os usuários
    

    const handleNavigate = (path) => {
        const url = `${path}`
        navigation.navigate(url)
    }

    // const renderUsers = () => {
    //     return users?.map((users) => (
    //         // <ListElement username={user.username} email={user.email} isUser />
    //         <View key={users.id} style={{backgroundColor:"#fff"}}>
    //             <Text>{users.id}</Text>
    //             <Text>{users.username}</Text>
    //             <Text>{users.email}</Text>
    //             <Text>{users.password}</Text>
    //         </View>
    //     ))
    // }

    


    return (
        <View style={container}>
            <Header />
            <View style={container}>
                <FlatList 
                    data={users}
                    keyExtractor={users.id} 
                    renderItem={renderUsers}

                />
                <AddItem label="Criar novo estoque" onPress={() => handleNavigate('CreateUser')}/>
            </View>
        </View>
    )
}

export default ListaUsuarios