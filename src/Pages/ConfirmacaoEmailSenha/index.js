import React, { useState, useEffect } from 'react'
import './style.css'
import { LoadingScreen } from '../../Components/LoadingScreen';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PinInput from 'react-pin-input';
import { api } from '../../Api/api';

export const ConfirmacaoEmailSenha = (props) => {
    const [codigo, setCodigo] = useState();
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isCodigoCorreto, setCodigoCorreto] = useState(false);
    const [isSenhasIguais, setSenhasIguais] = useState(false);
    const [isError, setError] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state === "" || location.state === null || location.state === undefined) {
            navigate("/")
        } else {
            console.log(location.state)
        }
    }, [])

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
                    // const res = api.put('usuario/alterarSenha', {
                    //     id:
                    // })
                }
            } catch (error) {
                console.log(error.response)
            }
        }, 1000)
    }

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
                        type={'text'} 
                        placeholder='Senha' 
                        id='inputStylePaginaAlterarSenha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <input 
                    type={'text'} 
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