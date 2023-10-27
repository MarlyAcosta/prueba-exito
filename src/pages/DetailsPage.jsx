import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { BtnAddDeduct } from '../components/BtnAddDeduct';
import { Footer, Cart } from '../components';
import { saveCarrito } from '../utils/saveCarrito';
import '../styles/scss/Details.scss'

export const DetailsPage = () => {
    const { gerProductData, productData, addToCart, getCartPDetail, cart } = useContext(AppContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const state = () => {
        setProduct(getCartPDetail(productData));
        console.log('estoycargando', productData)
    }

    useEffect(() => {
        state();
        saveCarrito(cart);
    }, [cart])


    const fetchproduct = async id => {
        await gerProductData(id);
    };

    useEffect(() => {
        fetchproduct(id);
        state();
    }, []);

    return (
        <>
            <Cart />
            <main className='container main-product'>
                <div className='row header-main-product'>
                    <div className='column product-infogeneral'>
                        <div className='row miga-de-pan'>
                            <div className='row'>
                                <a href='/'>Home</a>
                                <span>{' '}/{' '}</span>
                                <a href={`/${productData.category}`}>{productData.category}</a>
                                <span>{' '}/{' '}</span>
                                <span>{productData.title}</span>
                            </div>
                        </div>
                        <div className='container-img-product'>
                            <img
                                src={productData.image}
                                alt={`product ${productData?.image}`}
                            />
                        </div>
                    </div>

                    <div className='column product-details'>
                        <div className='info-product'>
                            <div className='group-info'>
                                <span>Ref: {productData.id}</span>
                                <h3>{productData.title}</h3>
                            </div>

                            <div className='group-info price'>
                                <span>${productData.price}</span>
                            </div>
                            <div className='group-info description'>
                                <h4>Detalles:</h4>
                                <span>{productData.description}</span>
                            </div>
                            <div className='row group-info rating'>
                                <h4>
                                    Calificacion:
                                </h4>
                                <ul className='start-rating row'>
                                    <li className='start' />
                                    <li className='start' />
                                    <li className='start' />
                                    <li className='start' />
                                    <li className='start' />
                                </ul>
                                {/* {productData.rating.map(prod => <div>{prod.count}</div>)}
                                <span> {productData[rating][rate]} </span> */}
                            </div>
                            <div className='btn-style contador pdp'>
                                {!product.estado ?
                                    <button onClick={() => { addToCart(productData); }} className='btn agregar'>Agregar</button>
                                    :
                                    <BtnAddDeduct item={productData} ubicacion={'pdp'} quantity={product.quantity} />
                                }
                            </div>
                            <div className='group-info checkout pdp'>
                                <button className='btn checkout'> Comprar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};