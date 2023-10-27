import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const BtnAddDeduct = ({ item, ubicacion, quantity }) => {
    const { takeOffToCart, changeQuantity } = useContext(AppContext)

    return (
        <span>
            <button className={`btn count plus ${ubicacion? 'plus-'+ubicacion : ''}`} onClick={() => { changeQuantity(item); }}> + </button>
            <span className={`cantidad ${ubicacion? 'cantidad-'+ubicacion : ''}`}>{quantity}</span>
            <button className={`btn count minus ${ubicacion? 'minus-'+ubicacion : ''} ${ubicacion === 'cart' && quantity === 1 ? 'disabled' : ''}`} onClick={() => { takeOffToCart(item); }}> - </button>
        </span>
    );
};