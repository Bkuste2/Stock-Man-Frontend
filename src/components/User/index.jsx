import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { container, textFormat } from './styles';
import IconMenuEstoques from '../../assets/img/IconMenuEstoques'

const User = ({ username, email, clickUser}) => {    

    const RenderUser = () => {
        return (
            <TouchableOpacity style={container} onPress={()=> clickUser()}>
                <IconMenuEstoques />
                <View style={{marginLeft:15}}>
                    <Text style={textFormat}>{username}</Text>
                    <Text style={textFormat}>{email}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View>
           {RenderUser()}          
        </View>
    )
}

export default User;