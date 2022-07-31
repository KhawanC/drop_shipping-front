import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import { Cadastro } from '../Pages/Cadastro';
import { ConfirmacaoEmail } from '../Pages/ConfirmacaoEmail';
import { Endereco } from '../Pages/Endereco';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login'
import { Produto } from '../Pages/Produto';
import { AnimatePresence } from 'framer-motion'
import { Categoria } from '../Pages/Categoria';

export const Router = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastro/confirmacao" element={<ConfirmacaoEmail/>}/>
                <Route path='/cadastro/endereco' element={<Endereco/>}/>
                <Route path='/categoria/:categoria' element={<Categoria/>}/>
                <Route path="/produto/:produto" element={<Produto/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    );
}