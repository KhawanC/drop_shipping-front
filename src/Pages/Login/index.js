import React, { useState } from 'react'
import './style.css'
import { BsArrowLeft, BsBrightnessAltHighFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { api } from '../../Api/api';
import { LoadingScreen } from '../../Components/LoadingScreen';

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
            navigate('/')
        } catch (error) {
            console.log(error.response)
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
            {isError ? 
            <div id='boxErrorMensagemPaginaLogin'>
                <p id='textoStyleErrorMensagemPaginaLogin'>{erroMensagem}</p>
            </div> : 
            <>
            </>}
            <div className='boxEntrarCriar'>
                <button className='botaoEntrar' onClick={carregarCredenciais}>Entrar</button>
                <button className='botaoEntrar' onClick={() => navigate('/cadastro')}>Cadastrar-se</button>

                <div id='boxDivisaoPaginaLogin'>
                    <hr id='barraDivisorPaginaLogin'/>
                    <p id='textStylesDivisorPaginaHome'>ou</p>
                    <hr id='barraDivisorPaginaLogin'/>
                </div>
            
                <div className='EsqueciCriar'>
                    <p className='textoEsqueciCriar' >Esqueci minha senha</p>
                    <p className='textoEsqueciCriar' >Fale Conosco</p>
                </div>               
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
        </motion.div>
    );
}