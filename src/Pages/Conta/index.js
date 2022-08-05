import React, { useEffect } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { api } from '../../Api/api';

export const Conta = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        try {
            let id = location.state.dados.split(',')
            //const res = api.get(`usuario/${id[0]}`)
        } catch (error) {
            console.log(error.response)
        }
    }, [])

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
                <p id='tituloStylePaginaConta'>Boas vindas, {}</p>
            </div>
            <div id='containerSectionPaginaConta'>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>

                    </div>
                    <div className='boxTextoSectionPaginaConta'>

                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>

                    </div>
                    <div className='boxTextoSectionPaginaConta'>

                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>

                    </div>
                    <div className='boxTextoSectionPaginaConta'>

                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>

                    </div>
                    <div className='boxTextoSectionPaginaConta'>

                    </div>
                </div>
                <div className='boxSectionsPaginaConta'>
                    <div className='boxIconeSectionPaginaConta'>

                    </div>
                    <div className='boxTextoSectionPaginaConta'>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};