import React from 'react'
import { TextInput } from 'react-native'
import { input } from './styles'


const InputField = ({value, textInputFunction}) => {
    return (
        <TextInput 
            style={input}
            placeholder={value}
            placeholderTextColor="#00FFFC"
            onChangeText={textInputFunction}
        />
    )
}

export default InputField;