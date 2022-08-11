import React, { useState, useEffect } from 'react'
import './style.css'
import { LoadingScreen } from '../../Components/LoadingScreen';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PinInput from 'react-pin-input';
import { ModalConfirmacao } from '../../Components/ModalConfirmacao'
import { api } from '../../Api/api';

export const ConfirmacaoEmailSenha = (props) => {
    const [codigo, setCodigo] = useState();
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [mensagemModal, setMensagemModal] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isCodigoCorreto, setCodigoCorreto] = useState(false);
    const [isSenhasIguais, setSenhasIguais] = useState(false);
    const [isError, setError] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function confirmarCodigo() {
        setLoading(true)
        setTimeout(function() {
            if(parseInt(codigo) === location.state.codigo) {
                setLoading(false)
                setCodigoCorreto(true)
            } else {
                setLoading(false)
            }
        }, 800)
    }

    const confirmarEmail = async() => {
        setLoading(true);
        setError(false);
        setTimeout(async function() {
            try {
                if(senha !== senhaConfirmacao) {
                    console.log('senhas erradas');
                    setErrorMessage('Suas senhas não coincidem!');
                    setLoading(false);
                    setError(true);
                }else if(senha.length <= 6) {
                    setErrorMessage('Suas senhas é muito curta!');
                    setLoading(false);
                    setError(true);
                } 
                else {
                    console.log(location.state)
                    const res = await api.put('usuario/alterarSenha', {
                        id: parseInt(location.state.token[0]),
                        senha: senha
                    }, {
                        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
                    })
                    setMensagemModal(e => 'Senha alterada com sucesso!');
                    setLoading(false);
                    setSenhasIguais(true);
                }
            } catch (error) {
                console.log(error.response)
            }
        }, 1000)
    }

    const clickModalConfirmar = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if(location.state === "" || location.state === null || location.state === undefined) {
            navigate("/")
        } else {
            console.log(location.state)
        }
    }, [])

    return(
        <motion.div
            id='containerPaginaConfirmacaoEmailSenha'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            {isCodigoCorreto ?
            <>
                <div id='boxTextoBig'>
                    <p className='textoConfirmacaoEmail' id='textoMaiorConfirmacaoEmail'>Agora digite sua nova senha</p>
                </div>
                <div id='boxInputsPaginaConfirmacaoEmailSenha'>
                    <input 
                        type={'password'} 
                        placeholder='Senha' 
                        id='inputStylePaginaAlterarSenha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <input 
                    type={'password'} 
                    placeholder='Confirmar Senha'
                    id='inputStylePaginaAlterarSenha'
                    value={senhaConfirmacao}
                    onChange={e => setSenhaConfirmacao(e.target.value)}
                    />
                </div>
                <div id='boxButtonPaginaConfirmacaoEmailSenha'>
                    {isError ?
                    <>
                        <div id='boxErrorMessagePaginaConfirmacaoEmailSenha'>
                            <p id='fontStyleErrorPaginaConfirmacaoEmailSenha'>{errorMessage}</p>
                        </div>
                        
                    </> :
                    <>
                    </>}
                    {isLoading ?
                    <>
                        <div className="lds-ripple"><div></div><div></div></div>
                    </> :
                    <>
                        <button id='botaoStylePaginaAlterarSenha' onClick={() => confirmarEmail()}>Enviar</button>
                    </>}
                    {isSenhasIguais ?
                    <>
                        <ModalConfirmacao mensagem={mensagemModal} handleClose={() => clickModalConfirmar()}/>
                    </> :
                    <>
                    </>}
                </div>
            </> :
            <>
                <div id='boxTextoBig'>
                    <p className='textoConfirmacaoEmail' id='textoMaiorConfirmacaoEmail'>Enviamos um email para você</p>
                    <p className='textoConfirmacaoEmail' id='textoMenorConfirmacaoEmail'>Confirme o código de 7 dígitos para prosseguir</p>
                </div>

                <div id='boxInputConfirmacao'>
                    <PinInput
                        length={7}
                        initialValue=''
                        type='numeric'
                        inputMode='number'
                        inputStyle={{color: 'white'}}
                        onChange={e => setCodigo(v => e)}
                    />
                </div>

                <div id='boxReenviarCancelar'>
                    <p className='styleReenviarCancelar'>Reenviar código</p>
                    <p className='styleReenviarCancelar'>Cancelar inscrição</p>
                </div>

                <div id='boxInputConfirmarCodigoCadastro'>
                    <button id='botaoCadastroFormulario' onClick={() => confirmarCodigo()}>Confirmar</button>
                </div>
                {isLoading ? <LoadingScreen/> : <div></div>}
            </>}
        </motion.div>
    );
};