import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { button, container, txtButton } from './styles'
import styles from './styles'

const Button =  ({ text }) => {
    return (
        <View>
            <TouchableOpacity style={ button }>
                
                <Text style={txtButton}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;