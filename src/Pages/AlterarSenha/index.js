import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { motion } from 'framer-motion';
import jwtDecode from 'jwt-decode';
import { api } from '../../Api/api';

export const AlterarSenha = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const verificarDados = () => {
        setLoading(true);
        setError(false);
        setTimeout(function() {
            let tokenDecoded = jwtDecode(localStorage.getItem('token'));
            var partsOfStr = tokenDecoded.sub.split(',');
            if(email !== partsOfStr[1]) {
                setError(true);
                setLoading(false);
            } else {
                enviarEmail()
            }
        }, 1000)
    }

    const enviarEmail = async() => {
        try {
            let tokenDecoded = jwtDecode(localStorage.getItem('token'));
            var partsOfStr = tokenDecoded.sub.split(',');
            let aleatNum = Math.floor(Math.random()*9000000) + 1000000;
            const res = await api.post('email', {
                destinatario: email,
                codigo: aleatNum,
            })
            setLoading(false);
            navigate('/dados-pessoais/alterar-senha/confirmar-email', {
                state: {token: partsOfStr, codigo: aleatNum}
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('token');
        let tokenDecoded = jwtDecode(token);
        let exp = new Date(parseInt(tokenDecoded.exp) * 1000)
        if(exp > Date(parseInt(Date.now()) * 1000)) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }, [])

    return(
        <motion.div 
            id='containerPaginaAlterarSenha'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div id='boxTituloPaginaAlterarSenha'>
                <p id='tituloStylePaginaAlterarSenha'>Alterar minha senha</p>
                <p id='subTituloStylePaginaAlterarSenha'>Insira seu email para confirmar sua mudança</p>
            </div>
            <div id='boxInputPaginaAlterarSenha'>
                <input 
                    type={'text'} 
                    placeholder='Email' 
                    id='inputStylePaginaAlterarSenha'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {isError ?
                <>
                    <p id='errorMessageStylePaginaAlterarSenha'>Email inválido. Tente novamente!</p>
                </> :
                <>
                </>}
            </div>
            <div id='boxBotoesPaginaAlterarSenha'>
                {isLoading ?
                <>
                    <div className="lds-ripple"><div></div><div></div></div>
                </> :
                <>
                    <button id='botaoStylePaginaAlterarSenha' onClick={() => verificarDados()}>Enviar</button>
                </>}
            </div>
        </motion.div>
    );
};