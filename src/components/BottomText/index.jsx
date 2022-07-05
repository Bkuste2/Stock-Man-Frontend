import React from 'react'
import { View, Text } from 'react-native'
import { important, text, container } from './styles'


const BottomText =  ({ firstText, importantText }) => {
    return (
        <View style={container}>
            <Text style={text} >
                {firstText}
            </Text>
            <Text style={important}>
                {importantText}
            </Text>
        </View>
    )
}

export default BottomText;