import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { text, container } from './styles'


const InputField = ({placeholder}) => {
    return (
        // <TextInput
        //     placeholder={placeholder} placeholderTextColor={{color:'#fff'}}
        // />
        <Text style={{color:'#fff'}}>{placeholder}</Text>
    )
}

export default InputField;