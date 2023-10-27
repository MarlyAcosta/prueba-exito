import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../components';
import '../styles/scss/ConfirmOrder.scss'

export const ConfirmOrder = () => {

    const { email, direccion, nombre } = useParams();

    const navigate = useNavigate();

    return (
        <main>
            <section className="page_success">
                <p>Hola,
                    <span className="page_data">{nombre}</span>
                </p>
                <p>Tu pedido
                    <span className="page_data">#325235</span>
                    fue realizado sactifactoriamente, Se estara entregando en la siguiente direccion:
                    <span className="page_data">{direccion}</span>
                </p>
                <p>Te estaremos actualizando de como continua el proceso al siguiente correo:
                    <span className="page_data">{email}</span>
                </p>
                <p>Gracias por confiar en nosotros</p>
                <a className="page_btn" href="/">Regresar al Home</a>
            </section>
            < Footer />
        </main>
    );
};

