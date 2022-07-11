import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { container, textFormat } from './styles';
import IconMenuEstoques from '../../assets/img/IconMenuEstoques'

const Product = ({productName, description, quantity, price}) => {    

    const renderProduct = () => {
        return (
            <TouchableOpacity style={container}>
                <IconMenuEstoques />
                <View style={{marginLeft:15, flexDirection:"row"}}>
                    <Text style={textFormat}>{productName}</Text>
                    {/* <Text style={textFormat}>{description}</Text> */}
                    <Text style={textFormat}>{quantity}</Text>
                    <Text style={textFormat}>{price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {renderProduct()}            
        </View>
    )
}

export default Product;