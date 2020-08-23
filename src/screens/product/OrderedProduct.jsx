import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {icons} from '../../constants'
const OrderedProduct = () => {
    return (
        <View>
            <Text>OrderedProduct</Text>
        </View>
    )
}

OrderedProduct.navigationOptions={
    title:"order",
    tabBarIcon:icons.shoppingCart
}
export default OrderedProduct

const styles = StyleSheet.create({})
