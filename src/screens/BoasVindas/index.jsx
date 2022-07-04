import React, { Children } from 'react'
import { Text } from 'react-native'
import styles from './styles'


function BoasVindas(props){

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}
export default BoasVindas;