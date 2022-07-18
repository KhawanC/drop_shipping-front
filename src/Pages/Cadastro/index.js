import React from 'react'
import './style.css'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Cadastro = (props) => {

    let navigate = useNavigate();

    return(
        <div className='containerCadastro'>
            <div className='headerCadastro'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div className='containerWelcomeCadastro'>
                <p className='bigTextoCAdastro'>Bem vindo!</p>
                <p className='smallTextoCadastro'>Cadastre-se para inciar suas compras</p>
            </div>
            <div className='containerFormularioPessoalRegistro'>
                <p className='tituloFormularioCadastro'>Dados Pessoais:</p>
                <label className='inputTogheterCadastro'>
                    <input type="text" placeholder='Nome' className='inputCadastro'/>
                    <input type="number" placeholder='Idade' className='inputCadastro'/>
                </label>
                <label className='inputAloneCadastro'>
                    <input type="text" placeholder='Email' className='inputCadastro'/>
                </label>
                <label className='inputTogheterCadastro'>
                    <input type="text" placeholder='Telefone' className='inputCadastro'/>
                    <input type="text" placeholder='CPF' className='inputCadastro'/>
                </label>
            </div>
        </div>
    );
};