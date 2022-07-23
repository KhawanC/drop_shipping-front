import React, { useState } from 'react'
import './style.css'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { LoadingScreen } from '../../Components/LoadingScreen';
import ReactInputMask from 'react-input-mask';

export const Cadastro = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nascimento, setNascimneto] = useState()
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [isLoading, setLoading] = useState(false)
    let navigate = useNavigate();

    function enviarFormulario() {
        setLoading(true)
        setTimeout(function() {
            if(nome === '' || email === '' || telefone === '' || nascimento === '' ||
                cpf === '' || senha === '' || confirmarSenha === '') {
                    console.log('um dos campos está vazio')
                    setLoading(false)
            } else if(nome.match(/\d+/g)) {
                console.log('seu nome contem numeros')
                setLoading(false)
            } else if(senha !== confirmarSenha) {
                console.log('suas senhas nao coincidem')
                setLoading(false)
            }  
        }, 800)
    }

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
                    <input placeholder='Data de nascimento'
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
        </div>
    );
};