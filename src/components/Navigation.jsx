import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/scss/Navigation.scss'

export const Navigation = () => {
  const { getProductName } = useContext(AppContext);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getProductName(document.getElementById('filter-products').value)
    }
  }

  const handleAddClass = () => {
    const carrito = document.getElementById('shop-cart');
    const price = document.getElementsByClassName('.total-price');
    if(!carrito.classList.contains('cart-open')){
      carrito.className += ' cart-open';
      price.className = 'total-price-active';
    }else{
      carrito.className = 'cart';
      price.className = 'total-price';
    }
  }
  return (
    <>
      <nav className="header">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <div className='row'>
                <input id='filter-products' className='buscar' type='text' onKeyUp={handleKeyPress}></input>
                <button className='buscar-boton' onClick={() => { getProductName(document.getElementById('filter-products').value) }}>Buscar</button>
              </div>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" aria-current="page" onClick={handleAddClass}>Carrito</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
