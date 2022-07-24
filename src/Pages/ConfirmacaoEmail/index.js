import React, { useState, useEffect } from 'react';
import './style.css'
import { useNavigate, useLocation } from 'react-router-dom';
import PinInput from 'react-pin-input';
import { LoadingScreen } from '../../Components/LoadingScreen';
import { motion } from 'framer-motion'

export const ConfirmacaoEmail = (props) => {
    const [codigo, setCodigo] = useState();
    const [isLoading, setLoading] = useState(false);
    const [dados, setDados] = useState()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state === "" || location.state === null || location.state === undefined) {
            navigate("/")
        } else {
            setDados(e => location.state)
            console.log(dados)
        }
    }, [])

    function confirmarCodigo() {
        setLoading(true)
        setTimeout(function() {
            if(parseInt(codigo) === location.state.codigo) {
                setLoading(false)
                navigate("/cadastro/endereco", {state:{
                    nome: dados.nome,
                    email: dados.email,
                    telefone: dados.telefone,
                    nascimento: dados.nascimento,
                    cpf: dados.cpf,
                    senha: dados.senha,
                    codigo: dados.codigo
                }})
            } else {
                setLoading(false)
            }
        }, 800)
    }

    return(
        <motion.div 
            id='containerConfirmacaoEmail'
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >

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
        </motion.div>
    );
};