import React from "react";
import { Route, Routes } from 'react-router-dom';
import RouteHandle from "./auth/RouteHandle";
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro'; 
/*import Perfil from './pages/Perfil/perfil';  */

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={
                <RouteHandle>
                    <Home />
                </RouteHandle>
            } />
            
            <Route path="/login" element={<Login />} />

            <Route path="/cadastro" element={<Cadastro />} />

            {/*<Route path="/perfil" element={
                <RouteHandle>
                    <Perfil />
                </RouteHandle>
            } />*/}

        </Routes>
    );
}

export default Rotas;