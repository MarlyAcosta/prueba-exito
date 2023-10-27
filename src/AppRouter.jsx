import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, DetailsPage } from './pages'
import { Navigation } from './components/Navigation';
import { Checkout } from './pages/Checkout';
import { ConfirmOrder } from './pages/ConfirmOrder';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='product/:id' element={<DetailsPage />} />
        <Route path=':category' element={<HomePage />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='success/:email/:addres/:name' element={<ConfirmOrder />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
