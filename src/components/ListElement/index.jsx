import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { container, textFormat } from './styles';
import IconMenuEstoques from '../../assets/img/IconMenuEstoques'

const ListElement = ({isUser, productName, description, quantity, price, username, email}) => {    

    const templateUser = () => {
        return (
            <TouchableOpacity style={container}>
                <IconMenuEstoques />
                <View style={{marginLeft:15}}>
                    <Text style={textFormat}>{username}</Text>
                    <Text style={textFormat}>{email}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const templateProduct = () => {
        return (
            <TouchableOpacity style={container}>
                <IconMenuEstoques />
<<<<<<< HEAD
                <View style={{marginLeft:15, flexDirection:"row"}}>
=======
                <View style={{marginLeft:15,}}>
>>>>>>> parent of 153f32c (Add product table)
                    <Text style={textFormat}>{productName}</Text>
                    {/* <Text style={textFormat}>{description}</Text> */}
                    <Text style={textFormat}>{quantity}</Text>
                    <Text style={textFormat}>{price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {isUser ? templateUser() : templateProduct()}            
        </View>
    )
}

export default ListElement;