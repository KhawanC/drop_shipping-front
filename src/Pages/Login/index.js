import React, { useState } from 'react'
import './style.css'
import { BsArrowLeft, BsBrightnessAltHighFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [isSenhaView, setSenhaView] = useState(false)
    let navigate = useNavigate();

    return(
        <div className='container'>
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate('/')}/>
            </div>
            <div className='boxLogo'>
                <BsBrightnessAltHighFill className='imagemLogo'/>
                <p className='tituloLogo'>Crie sua conta</p>
            </div>
            <div className='boxInput'>
                <input
                className='inputStyle'
                    placeholder='Email'
                />
                <input
                    type={isSenhaView ? 'text' : 'password'}
                    className='inputStyle'
                    placeholder='Senha'
                />
            </div>
            <div className='boxEntrarCriar'>
                <button className='botaoEntrar'>Entrar</button>
            
                <div className='EsqueciCriar'>
                    <p className='textoEsqueciCriar'>Esqueci minha senha</p>
                    <p className='textoEsqueciCriar'>Criar uma conta</p>
                </div>
            </div>
        </div>
    );
}