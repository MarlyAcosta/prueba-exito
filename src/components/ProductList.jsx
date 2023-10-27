import React, { useContext, useEffect } from 'react';
import { Product } from './Product';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/scss/ProductList.scss'

export const ProductList = () => {
    const { allData, filterProduct, getDataCategory} = useContext(AppContext)
    const { category } = useParams();

	const fetchproduct = async category => {
       getDataCategory(category);
    };

    useEffect(() => {
        fetchproduct(category);
    }, []);

    return (
        <div className='products-list'>
            <div className='ul'>
                {filterProduct.length ? (
                    <>
                        {filterProduct.map(item => (
                            <div className='li' key={item.id}>
                                <Product item={item} key={item.id} />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {allData.map(item => (
                            <div className='li' key={item.id}>
                                <Product item={item} key={item.id} />
                            </div>

                        ))}
                    </>
                )}
            </div>
        </div>
    );
};