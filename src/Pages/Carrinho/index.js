import React from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { ItemPaginaCarrinho } from '../../Components/ItemPaginaCarrinho';

export const Carrinho = (props) => {

    const navigate = useNavigate();

    return(
        <motion.div 
            id='containerPrincipalPaginaCarrinho'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div id='boxInternoPaginaCarrinho'>
                <div className='boxVoltar'>
                    <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
                </div>
                <div id='boxTituloPaginaCarrinho'>
                    <p id='tituloStylePaginaCarrinho'>Carrinho</p>
                </div>
                <div id='boxProdutosPaginaCarrinho'>
                    <ItemPaginaCarrinho/>
                </div>
            </div>
            <div id='boxConcluirCompraPaginaCarrinho'>
            </div>
        </motion.div>
    );
};