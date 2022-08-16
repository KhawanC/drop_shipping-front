import React from 'react'
import './style.css'
import { BsCheckCircle } from "react-icons/bs";
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

export const FinalizacaoPaamento = (props) => {
    const navigate = useNavigate();

    return(
        <motion.div
            id='containerPaginaFinalizacaoPagamento'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div id='boxMeioPaginaFinalizacaoPagamento'>
                <div id='boxIconeTextoPaginaFinalizacaoPagamento'>
                    <div id='boxIconePaginaFinalizacaoPagamento'>
                        <BsCheckCircle
                            size={120}
                            color='green'
                        />
                    </div>
                    <div id='boxTextoPaginaFinalizacaoPagamento'>
                        <p className='textStylePaginaFinalizacaoPagamento'>Obrigado por finalizar a compra!</p>
                        <p className='textStylePaginaFinalizacaoPagamento'>Seu pedido será processado e em breve enviado</p>
                    </div>
                </div>
                <div id='boxBotoesPaginaFinalizacaoPagamento'>
                    <button className='buttonStylePaginaFinalizacaoPagamento' onClick={() => console.log('navegando pedidos')}>Verificar pedidos</button>
                    <button className='buttonStylePaginaFinalizacaoPagamento' onClick={() => navigate('/')}>Continuar comprando</button>
                </div>
            </div>
        </motion.div>
    );
};