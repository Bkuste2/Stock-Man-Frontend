import React from 'react'
import { TextInput } from 'react-native'
import { input } from './styles'


const InputField = ({value, placeholder, textInputFunction}) => {
    return (
        <TextInput 
            style={input}
            placeholder={placeholder}
            placeholderTextColor="#00FFFC"
            onChangeText={textInputFunction}
        />
    )
}

export default InputField;