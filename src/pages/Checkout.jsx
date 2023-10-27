import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Footer, Product } from '../components';
import { Link } from 'react-router-dom';
import '../styles/scss/Checkout.scss';

export const Checkout = () => {

    const navigate = useNavigate();
    const { cart, totalPrice, clearToCart } = useContext(AppContext);
    const [datos, setDatos] = useState([
        { campo: 'email', value: '' },
        { campo: 'nombre', value: '' },
        { campo: 'direccion', value: '' },
        { campo: 'tc', value: '' },
        { campo: 'cvv', value: '' }]);

    const handleOnChange = (e) => {
        if (e.target.value.length > 0) {
            const newData = datos.map((data) => {
                if (e.target.id.split('-')[0] === data.campo) {
                    console.log(data.campo)
                    return { ...data, value: e.target.value }
                } else {
                    return data
                }
            });
            setDatos(newData);
            const element = document.getElementById(e.target.id.split('-')[0]);
            element.style = 'color: red; display: none;'
        } else {
            const element = document.getElementById(e.target.id.split('-')[0]);
            element.style = 'color: red; display: block;'
        }
    }

    const handleValidation = (e) => {
        const goConfirm = datos.find(item => item.value === '')
        if(!goConfirm){
            clearToCart();
            window.location.replace(`/success/${datos[0].value}/${datos[2].value}/${datos[1].value}`);
        } else{
            console.log(goConfirm)
            alert('Debes llenar todos los campos para finalizar la compra')
        }
    }

    return (
        <main>
            {cart.length ? (
                <div className='row content-checkout'>
                    <section className='column datos-user'>
                        <span className="input__label">Correo:</span>
                        <input id='email-input' className="input" type="email" onBlur={handleOnChange} />
                        <p id='email' style={{ color: "red", display: 'none' }}>{'Debe completar este campo'}</p>
                        <span className='input__label'>Nombre:</span>
                        <input id='nombre-input' className='input' type="text" onBlur={handleOnChange} />
                        <p id='nombre' style={{ color: "red", display: 'none' }}>{'Debe completar este campo'}</p>
                        <span className='input__label'>Direccion:</span>
                        <input id='direccion-input' className='input' type="text" onBlur={handleOnChange} />
                        <p id='direccion' style={{ color: "red", display: 'none' }}>{'Debe completar este campo'}</p>
                        <span className='input__label'>Tarjeta Credito:</span>
                        <input id='tc-input' className='input' type="number" onBlur={handleOnChange} />
                        <p id='tc' style={{ color: "red", display: 'none' }}>{'Debe completar este campo'}</p>
                        <span className='input__label'>CVV:</span>
                        <input id='cvv-input' className='input' type="number" size={'3'} onBlur={handleOnChange} />
                        <p id='cvv' style={{ color: "red", display: 'none' }}>{'Debe completar este campo'}</p>
                        <Link className='finalizar' onClick={handleValidation}>Finalizar Compra</Link>
                    </section>
                    <section className='column products-checkout'>
                        <div className='checkout product-item-checkout'>
                            {cart.map(item => (
                                <Product item={item.product} quantity={'checkout'} key={item.id} />
                            ))}
                        </div>
                        <div className='cart-fijo-checkout'>
                            <div className='total-price-checkout'>
                                <div>Total: ${totalPrice}</div>
                            </div>
                        </div>
                    </section>
                </div>
            )
                :
                (
                    <span>No se han seleccionado productos</span>
                )
            }
            < Footer />
        </main>
    );
};

