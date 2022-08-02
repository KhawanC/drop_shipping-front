import React from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

export const Carrinho = (props) => {

    const navigate = useNavigate();

    return(
        <div id='containerPrincipalPaginaCarrinho'>
            <div id='boxInternoPaginaCarrinho'>
                <div className='boxVoltar'>
                    <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
                </div>
                <div id='boxTituloPaginaCarrinho'>
                    <p id='tituloStylePaginaCarrinho'>Carrinho</p>
                </div>
                <div id='boxProdutosPaginaCarrinho'>
                </div>
            </div>
            <div id='boxConcluirCompraPaginaCarrinho'>
            </div>
        </div>
    );
};