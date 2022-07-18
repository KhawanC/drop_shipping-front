import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Cadastro } from '../Pages/Cadastro';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login'
import { PaginaItem } from '../Pages/PaginaItem';

export const Router = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/produto" element={<PaginaItem/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}