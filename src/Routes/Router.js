import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import { Cadastro } from '../Pages/Cadastro';
import { ConfirmacaoEmail } from '../Pages/ConfirmacaoEmail';
import { Endereco } from '../Pages/Endereco';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login'
import { PaginaItem } from '../Pages/PaginaItem';
import { AnimatePresence } from 'framer-motion'

export const Router = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/produto" element={<PaginaItem/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastro/confirmacao" element={<ConfirmacaoEmail/>}/>
                <Route path='/cadastro/endereco' element={<Endereco/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    );
}