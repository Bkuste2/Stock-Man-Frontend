import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { important, text, container } from './styles'


const BottomText =  ({ firstText, importantText, onPressButton }) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={container}>
                <Text style={text} >
                    {firstText}
                </Text>
                <Text style={important}>
                    {importantText}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BottomText;