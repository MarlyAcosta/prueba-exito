import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { getCarrito } from '../utils/saveCarrito';

export const AppProvider = ({ children }) => {

  //cargue de datos

  const [allData, setAllData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [productData, setProductData] = useState({});

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const urlApi = 'https://fakestoreapi.com/';

  const getAllData = async (limit = 50) => {
    const result = await fetch(`${urlApi}products?limit=${limit}`);
    const data = await result.json();
    setAllData([...allData, ...data]);
  }

  const getGlobalData = async () => {
    const result = await fetch(`${urlApi}products`);
    const data = await result.json();
    setGlobalData([...globalData, ...data]);
  }

  const getDataCategory = async (category) => {
    if (category === '') {
      setFilterProduct([]);
    } else {
      const result = await fetch(`${urlApi}products/category/${category}`);
      const data = await result.json();
      console.log(data, category)
      setFilterProduct([...filterProduct, ...data]);
    }
  }

  const gerProductData = async (productID) => {
    const result = await fetch(`${urlApi}products/${productID}`);
    console.log(productID);
    const data = await result.json();
    setProductData(data);
  }

  const getProductName = async (buscador) => {
    if (buscador === '') {
      setFilterProduct([]);
    } else {
      const data = globalData.filter(item => item.title.toLowerCase().includes(buscador.toLowerCase()));
      setFilterProduct([...filterProduct, ...data]);
    }
  }


  useEffect(() => {
    getAllData();
    getGlobalData();
    setCart(getCarrito());
  }, []);


  //carrito

  const getTotalPrice = () => {
    const total = cart.map((data) => Number((data.product.price * data.quantity))).reduce((a, b) => a + b, 0);
    console.log(total, 'carrito')
    setTotalPrice(total.toFixed(2.00));
  }

  const getCartPDetail = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const detail = { estado: true, quantity: cart[productInCartIndex].quantity, product: product };
      return detail;
    } else {
      const detail = { estado: false, quantity: 0, product: product };
      return detail;
    }
  }

  const addToCart = async product => {
    const newProduct = { id: product.id, quantity: 1, product: product }
    console.log(newProduct, 'newProduct')
    setCart([...cart, newProduct])
  }

  const takeOffToCart = async product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity -= 1
      if (cart[productInCartIndex].quantity == 1) {
        setCart(cart.filter(item => item.id !== product.id))
      } else {
        setCart(newCart)
      }
    }
  }

  const changeQuantity = async product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    console.log(productInCartIndex, 'id')
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    }
  }

  const clearToCart = () => {
    setCart([])
  }

  useEffect(() => {
    getTotalPrice();
  }, [addToCart, takeOffToCart, clearToCart, changeQuantity])


  return (
    <AppContext.Provider value={{
      allData,
      filterProduct,
      productData,
      getProductName,
      gerProductData,
      getDataCategory,
      cart,
      totalPrice,
      addToCart,
      takeOffToCart,
      changeQuantity,
      clearToCart,
      getCartPDetail
    }}>
      {children}
    </AppContext.Provider>
  )
}
