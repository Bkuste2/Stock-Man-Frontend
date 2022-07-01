import React from 'react'
import { Text, useState, View, Image } from 'react-native'
import styles from './styles'

import LogoComEscrita from '../../img/LogoComEscrita.png'

function BoasVindas(){

    return(
    <View style={styles.container}>
        <Image source={LogoComEscrita} />
    </View>
    )
}
export default BoasVindas;