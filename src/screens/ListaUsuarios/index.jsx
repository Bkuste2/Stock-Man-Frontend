import React, { useEffect, useState } from 'react';
import { container } from './styles';
import { FlatList, View, Text } from 'react-native'
import Header from '../../components/Header';
import User from '../../components/User'
import { API_URL } from '@env';

const ListaUsuarios = () => {
    //Usuários
    const [users, setUsers] = useState({})

    //Usuário
    const [userSelected, setUserSelected] = useState({})

    const renderUsers = ({ item: user }) => {
        return <User username={user.username} email={user.email} clickUser={() => console.log('')} />
    }

    //Pegar os usuários
    const getUsers = async () => {
        fetch(`${API_URL}/users`)
            .then((response) => response.json())
            .then((json) => setUsers(json.data))
            .catch((error) => console.error(error))
    }

    const getUser = async (id) => {
        fetch(`${API_URL}/user/${id}`)
            .then((response) => response.json())
            .then((json) => setUserSelected(json.data))
            .catch((error) => console.log(error))
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
        <>
            <Header />
            <View style={container}>
                <FlatList
                    data={users}
                    keyExtractor={users.id}
                    renderItem={renderUsers}
                />
            </View>
        </>
    )
}

export default ListaUsuarios