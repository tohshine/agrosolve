import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {navigate} from '../_navigationRef'

export const backArrow = (param) => {
 return <FontAwesome
    name='long-arrow-left'
    size={24}
    color='black'
    onPress={() => navigate(param)}
  />;
};
export const Tree = () => {
 return <Entypo name='tree' size={24} color='black' />;
};
export const shoppingCart = () => {
 return <Entypo name='shopping-cart' size={24} color='black' />;
};
export const Plus = () => {
 return <Entypo name='plus' size={24} color='black' />;
};
