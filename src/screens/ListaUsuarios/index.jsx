import React, { useEffect, useState } from 'react';
import { container } from './styles';
import { FlatList, View, ScrollView } from 'react-native'
import Header from '../../components/Header';
import AddItem from '../../components/AddItem'
import User from '../../components/User'
import { useNavigation } from '@react-navigation/native'

import { API_URL } from '@env';


const ListaUsuarios = () => {
    
    const navigation = useNavigation();

    const handleNavigate = (path, object) => {
        const url = `${path}`
        navigation.navigate(url)
    }

    //Usuários
    const [users, setUsers] = useState({})

    //Usuário
    const [userSelected, setUserSelected] = useState({})

    const renderUsers = ({ item: user }) => {
        return <User username={user.username} email={user.email} clickUser={() => {
            console.log(user.id);
            handleNavigate('EditUser')
        }} />
    }

    //Pegar os usuários
    const getUsers = async () => {
        fetch(`${API_URL}/users`)
            .then((response) => response.json())
            .then((json) => setUsers(json.data))
            .catch((error) => console.error(error))
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

    useEffect(() => {
        getUsers()
        // getUser()
    }, [])


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