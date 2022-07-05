import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { button, container, txtButton } from './styles'
import styles from './styles'

const Button =  ({ text, onPressButton }) => {
    return (
        <View>
            <TouchableOpacity style={ button } onPress={onPressButton}>
                
                <Text style={txtButton}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;