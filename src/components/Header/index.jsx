import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { container, user } from './styles'
import IconUser from '../../assets/img/IconUser'
import Hamburguer from '../../assets/img/Hamburguer'

function Header(){ 
    return(
        <View style={container}>
            <TouchableOpacity style={user}>
                <IconUser />
            </TouchableOpacity>
            <TouchableOpacity>
                <Hamburguer />
            </TouchableOpacity>
        </View>
    )
}
export default Header;