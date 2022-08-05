import React, { useState } from 'react'
import './style.css'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { LoadingScreen } from '../../Components/LoadingScreen';
import ReactInputMask from 'react-input-mask';
import { PopupMessageError } from '../../Components/PopupMessageError';
import { api } from '../../Api/api';
import { motion } from 'framer-motion'

export const Cadastro = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nascimento, setNascimneto] = useState()
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isPopupError, setPopupError] = useState(false)
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();

    function enviarFormulario() {
        setLoading(true)
        setTimeout(function() {
            if(nome === '' || email === '' || telefone === '' || nascimento === '' ||
                cpf === '' || senha === '' || confirmarSenha === '') {
                    setLoading(false)
                    setErrorMessage(e => 'Um dos campos está vazio!')
                    ativarPopupError()
            } else if(nome.match(/\d+/g)) {
                setLoading(false)
                setErrorMessage(e => 'Seu nome não pode conter números!')
                ativarPopupError()
            } else if(senha !== confirmarSenha) {
                setLoading(false)
                setErrorMessage(e => 'Suas senhas não coincidem!')
                ativarPopupError()
            }  else {
                let aleatNum = Math.floor(Math.random()*9000000) + 1000000;
                enviarEmail(email, aleatNum)
            }
        }, 800)
    }

    const enviarEmail = async(emailUsuario, codigo) => {
        try {
            const res = await api.post('email', {
                "destinatario": emailUsuario,
                "codigo": codigo
            })
            setLoading(false)
            navigate('/cadastro/confirmacao', {state:{
                nome: nome,
                email: email,
                telefone: telefone,
                nascimento: nascimento,
                cpf: cpf,
                senha: senha,
                codigo: codigo
            }})
        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }

    function ativarPopupError() {
        setPopupError(true)
        setTimeout(function() {
            setPopupError(false)
        }, 5000)
    }

    return(
        <motion.div 
            className='containerCadastro'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='headerCadastro'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div className='containerWelcomeCadastro'>
                <p className='bigTextoCAdastro'>Bem vindo!</p>
                <p className='smallTextoCadastro'>Cadastre-se para inciar suas compras</p>
            </div>
            <div className='containerFormularioPessoalRegistro'>
                <p className='tituloFormularioCadastro'>Dados Pessoais:</p>

                <input placeholder='Nome completo'
                    type='text'
                    value={nome}
                    onChange={e => setNome(v => e.target.value)}
                    className='inputContainerCadastroBig'
                />
                    
                <input placeholder='Email'
                    type='text'
                    value={email}
                    onChange={e => setEmail(v => e.target.value)}
                    className='inputContainerCadastroBig'
                />

                <ReactInputMask
                    mask="(99)99999-9999"
                    placeholder='Telefone'
                    value={telefone}
                    onChange={e => setTelefone(v => e.target.value)}
                    className='inputContainerCadastroBig'
                />
                
                <div className='containerDuploInput'>
                    <input
                        placeholder='Data de nascimento'
                        type='date'
                        value={nascimento}
                        onChange={e => setNascimneto(v => e.target.value)}
                        className='inputContainerCadastroSmall'/>

                    <ReactInputMask
                        mask="999.999.999-99"
                        value={cpf}
                        placeholder='CPF'
                        onChange={e => setCpf(v => e.target.value)}
                        className='inputContainerCadastroSmall'/>
                </div>
                <div className='containerDuploInput'>
                    <input placeholder='Senha'
                        type='password'
                        value={senha}
                        onChange={e => setSenha(v => e.target.value)}
                        className='inputContainerCadastroSmallBig'/>

                    <input placeholder='Confirmar senha'
                        type='password'
                        value={confirmarSenha}
                        onChange={e => setConfirmarSenha(v => e.target.value)}
                        className='inputContainerCadastroSmallBig'/>
                </div>
            </div>
            <div id='containerButtonFormulario'>
                <button id='botaoCadastroFormulario' onClick={enviarFormulario}>Enviar</button>
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isPopupError ? <PopupMessageError mensagem={errorMessage}/> : <div></div>}
        </motion.div>
    );
};