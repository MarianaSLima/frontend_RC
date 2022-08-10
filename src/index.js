import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import ProvideAuth from './auth/ProvideAuth';
import Cadastro from './pages/Cadastro/cadastro';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Perfil from './pages/Perfil/perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideAuth >
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/perfil' element={<Perfil />} />
          <Route exact path="/cadastro" element={<Cadastro />} />

        </Routes>
      </ProvideAuth>
    </BrowserRouter>
  </React.StrictMode>
);