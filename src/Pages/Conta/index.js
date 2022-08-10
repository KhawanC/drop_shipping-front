import React, { useEffect, useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoKeyOutline, IoInformationSharp, IoBagCheckSharp } from 'react-icons/io5';
import { BsArrowLeft } from "react-icons/bs";
import jwtDecode from 'jwt-decode';

export const Conta = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [nomeUsuario, setNomeUsuario] = useState('');

    useEffect(() => {
        let token = localStorage.getItem('token');
        let tokenDecoded = jwtDecode(token);
        var partsOfStr = tokenDecoded.sub.split(',');
        setNomeUsuario(e => partsOfStr[2])
    }, [])

    return(
        <motion.div
            id='containerPaginaConta'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate('/')}/>
            </div>
            <div id='boxBoasVindaPaginaConta'>
                <p id='tituloStylePaginaConta'>Boas vindas, {nomeUsuario}</p>
            </div>
            <div id='containerSectionPaginaConta'>
                <div className='boxSectionsPaginaConta' onClick={() => navigate('/dados-pessoais')}>
                    <div className='boxIconeSectionPaginaConta'>
                        <IoInformationSharp
                            color='white'
                            size={35}
                        />
                    </div>
                    <div className='boxTextoSectionPaginaConta'>
                        <p className='textStyleTextoPaginaConta'>Dados Pessoais</p>
                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>
                        <IoKeyOutline
                            color='white'
                            size={35}
                        />
                    </div>
                    <div className='boxTextoSectionPaginaConta' onClick={() => navigate('/dados-pessoais/alterar-senha')}>
                        <p className='textStyleTextoPaginaConta'>Alterar senha</p>
                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>
                        <IoBagCheckSharp
                            color='white'
                            size={35}
                        />
                    </div>
                    <div className='boxTextoSectionPaginaConta'>
                        <p className='textStyleTextoPaginaConta'>Compras</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};