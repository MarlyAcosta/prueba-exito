import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Cart } from '../components';
import { ProductList } from '../components/ProductList';
import '../styles/scss/HomePage.scss'

export const HomePage = () => {

	const navigate = useNavigate();

	return (
		<div className='content'>
			<Cart />
			<ProductList />
			<Footer />
		</div>
	);
};
