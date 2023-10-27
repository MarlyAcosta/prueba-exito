import React from 'react'

export const saveCarrito = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const getCarrito = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

export const deleteCarrito = () => {
    localStorage.setItem('cart', '[]');
}