import React, { useContext } from 'react';
import { Context } from '../index';
import { Routes, Route } from 'react-router-dom';
import Body from './pages/body';
import Catalog from './pages/Catalog';
import Basket from './pages/Basket';
import Auth from './Auth';
import About from './pages/About';
import Admin from './pages/Admin';

const AppRouter = () => {
    const { user } = useContext(Context);
    return (
        <Routes>
          {user.isAuth && (
            <>
              <Route path='/admin' element={<Admin />} />
              <Route path={'/basket'+'/:id'} element={<Basket />} />
            </>
          )}
          <Route path='/' element={<Body />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/registration' element={<Auth />} />
        </Routes>
    );
}

export default AppRouter;