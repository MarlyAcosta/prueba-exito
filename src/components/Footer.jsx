import React from 'react';
import '../styles/scss/Footer.scss'

const emailLink = (
    <a href="mailto:marlyacosta.a3@gmail.com" alt="email link">
        Email
    </a>
)
const gitHubLink = (
    <a href="https://github.com/marlyacosta" alt="github link">
        GitHub
    </a>
)


export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='column'>
                            <div className='footer-title'> Prueba técnica exito</div>
                            <div className='footer-title'> Marly Acosta</div>
                        </div>
                        <div className='column'>
                            <div className='footer-link'>{emailLink}</div>
                            <div className='footer-link'>{gitHubLink}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};