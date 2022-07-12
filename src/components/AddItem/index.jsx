import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AddIcon from '../../assets/img/AddIcon'

import { container, txt } from './styles';

function AddItem({ label, ...props}){ 
    const navigation = useNavigation()

    const handleNavigate = (path) => {
        const url = `${path}`
        navigation.navigate(url)
    }
    return(
        <TouchableOpacity {...props} style={ container }>
            <AddIcon />
            <Text style={txt}>{label}</Text>
        </TouchableOpacity>
    )
}
export default AddItem;