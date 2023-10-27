import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { AppContext } from '../context/AppContext';
import { BtnAddDeduct } from './BtnAddDeduct';
import { saveCarrito } from '../utils/saveCarrito';
import { Link } from 'react-router-dom';
import '../styles/scss/ProductList.scss'

export const Product = ({ item, quantity }) => {
    const { addToCart, getCartPDetail, cart } = useContext(AppContext)
    const [product, setProduct] = useState([]);

    const state = () => {
        setProduct(getCartPDetail(item));
    }

    useEffect(() => {
        state();
    }, [])

    useEffect(() => {
        state();
        saveCarrito(cart);
    }, [cart])


    return (
        <div className={`product${quantity ? '-'+quantity : ''}`}>
            <Link to={`/product/${item.id}`}>
                <div className={`product-image${quantity ? '-'+quantity : ''}`}>
                    <img src={item.image}></img>
                </div>
                <div className={`product-body${quantity ? '-'+quantity : ''}`}>
                    <p className={`product-title${quantity ? '-'+quantity : ''}`}>{item.title}</p>
                    <p className={`product-sale${quantity ? '-'+quantity : ''}`}> ${item.price}</p>
                </div>
            </Link>
            {quantity ?
                <div className={`product-body${'-'+quantity} add-discount-btn`}>
                    <div className={`btn-style contador${'-'+quantity}`}>
                        <BtnAddDeduct item={item} ubicacion={quantity} quantity={product.quantity} />
                    </div>
                </div>
                :
                <div className='product-body'>
                    <div className='btn-style contador'>
                        {!product.estado || undefined ?
                            <button onClick={() => { addToCart(item); }} className='btn agregar'>Agregar</button>
                            :
                            <BtnAddDeduct item={item} ubicacion={'plp'} quantity={product.quantity} />
                        }
                    </div>
                </div>
            }
        </div>
    );
};
