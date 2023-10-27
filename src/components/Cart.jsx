import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Product } from './Product';
import '../styles/scss/Cart.scss'

export const Cart = () => {
    const { cart, totalPrice, clearToCart } = useContext(AppContext)

    return (
        <div id='shop-cart' className="cart">
            {cart.length ? (
                <>
                    <div className='product-item'>
                        {cart.map(item => (
                            <Product item={item.product} quantity={'cart'} key={item.id} />

                        ))}
                    </div>
                    <div className='cart-fijo'>
                        <div className='total-price'>
                            <div>Total: ${totalPrice}</div>
                        </div>
                        <Link className="navbar-link" to="/checkout">
                            <div className='go-checkout'>
                                Finalizar Compra
                            </div>
                        </Link>
                        <div className='go-checkout' onClick={clearToCart}>
                               Vaciar carrito
                        </div>
                    </div>
                </>)
                :
                (<div> No se han seleccionado productos </div>)
            }
        </div>
    );
};
