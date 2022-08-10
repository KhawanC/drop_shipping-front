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
import { Carrinho } from '../Pages/Carrinho';
import { Favoritos } from '../Pages/Favoritos';
import { Conta } from '../Pages/Conta';
import { DadosPessoais } from '../Pages/DadosPessoais';
import { AlterarSenha } from '../Pages/AlterarSenha';
import { ConfirmacaoEmailSenha } from '../Pages/ConfirmacaoEmailSenha';

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
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="/conta/:nome" element={<Conta/>}/>
                <Route path="/dados-pessoais" element={<DadosPessoais/>}/>
                <Route path="/recuperar-senha" element={<AlterarSenha/>}/>
                <Route path="/dados-pessoais/alterar-senha" element={<AlterarSenha/>}/>
                <Route path="/dados-pessoais/alterar-senha/confirmar-email" element={<ConfirmacaoEmailSenha/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    );
}