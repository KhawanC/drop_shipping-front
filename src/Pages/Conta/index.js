import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

export const Conta = (props) => {
    const navigate = useNavigate();

    return(
        <motion.div
            id='containerPaginaConta'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div id='boxBoasVindaPaginaConta'>
                <p id='tituloStylePaginaConta'>Boas vindas, </p>
            </div>
        </motion.div>
    );
};