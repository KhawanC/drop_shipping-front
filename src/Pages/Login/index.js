import React, { useState } from 'react'
import './loginCss.css'
import { BsArrowLeft, BsBrightnessAltHighFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { api } from '../../Api/api';
import { LoadingScreen } from '../../Components/LoadingScreen';
import { PopupMessageError } from '../../Components/PopupMessageError';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erroMensagem, setErroMensagem] = useState('')
    const [isSenhaView, setSenhaView] = useState(false)
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();

    const loggarUsuario = async() => {
        try {
            const res = await api.post("/autenticacao", {
                email: email,
                password: senha
            })
            localStorage.setItem("token", res.data.tokenAuth)
            navigate(-1)
        } catch (error) {
            setErroMensagem('Credenciais inválidas!')
            setLoading(false)
            setError(true)
        }
    }

    function carregarCredenciais() {
        setLoading(true)
        setError(false)
        setTimeout(function() {
            if(email === '' || senha === '') {
                setErroMensagem('Credenciais não podem estar vazias!')
                setLoading(false)
                setError(true)
            } else {
                loggarUsuario()
            }
        }, 800)
    }

    return(
        <motion.div 
            className='containerLogin'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div className='boxLogo'>
                <BsBrightnessAltHighFill className='imagemLogo'/>
                <p className='tituloLogo'>Crie sua conta</p>
            </div>
            <div className='boxInput'>
                <input
                    value={email}
                    onChange={e => setEmail(v => e.target.value)}
                    className='inputStyle'
                    placeholder='Email'
                />
                <input
                    value={senha}
                    onChange={e => setSenha(v => e.target.value)}
                    type={isSenhaView ? 'text' : 'password'}
                    className='inputStyle'
                    placeholder='Senha'
                />
            </div>
            <div className='boxEntrarCriar'>
                <button className='botaoEntrar' onClick={carregarCredenciais}>Entrar</button>
            
                <div className='EsqueciCriar'>
                    <p className='textoEsqueciCriar' >Esqueci minha senha</p>
                    <p className='textoEsqueciCriar' onClick={() => navigate('/cadastro')}>Cadastrar-se</p>
                    <p className='textoEsqueciCriar' >Fale Conosco</p>
                </div>               
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isError ? <PopupMessageError mensagem={erroMensagem}/> : <div></div>}
        </motion.div>
    );
}