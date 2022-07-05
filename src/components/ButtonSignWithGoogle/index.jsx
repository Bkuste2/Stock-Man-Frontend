import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { button, container, txtButton } from './styles'
import IconGoogle from '../../assets/img/IconGoogle'


const Button =  ({ text }) => {
    return (
        <View>
            <TouchableOpacity style={ button }>
                <IconGoogle />
                <Text style={txtButton}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;