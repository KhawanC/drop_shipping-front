import React, { useState, useEffect } from 'react';
import './style.css';
import ReactInputMask from 'react-input-mask';
import { api, viaCep } from '../../Api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { LoadingScreen } from '../../Components/LoadingScreen';
import { ModalConfirmacao } from '../../Components/ModalConfirmacao';

export const Endereco = (props) => {
    const [cep, setCep] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [isCompleto, setCompleto] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(!cep.includes("_")) {
            carregarEndereco()
        }
    }, [cep])

    useEffect(() => {
        if(location.state === "" || location.state === null || location.state === undefined) {
            navigate('/')
        }
    }, [])

    function clickConfirmar() {
        navigate('/')
    }

    function carregarDados() {
        setLoading(true)
        setTimeout(function() {
            cadastrarUsuario()
        }, 800)
    }

    const carregarEndereco = async() => {
        try {
            let cepFormatado = cep.replace("-", "")
            const res = await viaCep.get(`${cepFormatado}/json`)
            if(res.request.status === 200) {
                setEstado(e => ConverterEstados(res.data.uf))
                setCidade(e => res.data.localidade)
                setBairro(e => res.data.bairro)
                setRua(e => res.data.logradouro)
            }
        } catch (error) {
        }
    }

    const cadastrarUsuario = async() => {
        try {
            let idade = calcularIdade(location.state.nascimento)
            const res = await api.post("/usuario/cadastrarUsuario", {
                nomeCompleto: location.state.nome,
                idade: idade,
                email: location.state.email,
                senha: location.state.senha,
                telefone: location.state.telefone,
                cpf: location.state.cpf,
                cep: cep,
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                numero: numero,
                complemento: complemento
            })
            const res2 = await api.post("/autenticacao", {
                email: location.state.email,
                password: location.state.senha
            })
            localStorage.setItem("token", res2.data.tokenAuth)
            setLoading(false)
            setCompleto(true)
        } catch (error) {
            setLoading(false)
        }
    }

    function calcularIdade(dataString) {
        var hoje = new Date();
        var dataAniversario = new Date(dataString);
        var idade = hoje.getFullYear() - dataAniversario.getFullYear();
        var mes = hoje.getMonth() - dataAniversario.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataAniversario.getDate())) {
            idade--;
        }
        return idade;
    }

    const ConverterEstados = function(val) {
        var data;
  
        switch (val.toUpperCase()) {
          case "AC" : data = "Acre";                  break;
          case "AL" : data = "Alagoas";               break;
          case "AM" : data = "Amazonas";              break;
          case "AP" : data = "Amapa";                 break;
          case "BA" : data = "Bahia";                 break;
          case "CE" : data = "Ceara";                 break;
          case "DF" : data = "Distrito Federal";      break;
          case "ES" : data = "Espirito Santo";        break;
          case "GO" : data = "Goias";                 break;
          case "MA" : data = "Maranhao";              break;
          case "MG" : data = "Minas Gerais";          break;
          case "MS" : data = "Mato Grosso do Sul";    break;
          case "MT" : data = "Mato Grosso";           break;
          case "PA" : data = "Para";                  break;
          case "PB" : data = "Paraiba";               break;
          case "PE" : data = "Pernambuco";            break;
          case "PI" : data = "Piaui";                 break;
          case "PR" : data = "Parana";                break;
          case "RJ" : data = "Rio de Janeiro";        break;
          case "RN" : data = "Rio Grande do Norte";   break;
          case "RO" : data = "Rondonia";              break;
          case "RR" : data = "Roraima";               break;
          case "RS" : data = "Rio Grande do Sul";     break;
          case "SC" : data = "Santa Catarina";        break;
          case "SE" : data = "Sergipe";               break;
          case "SP" : data = "São Paulo";             break;
          case "TO" : data = "Tocantins";             break;
        }
  
        return data;
      };

    return(
        <motion.div 
            id='containerCadastroEndereco'

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <p id='styleBigTextoEndereco'>Agora precisamos confirmar seu endereço</p>
            <div className='containerDuploInput'>
                <ReactInputMask
                    mask="99999-999"
                    value={cep}
                    placeholder='CEP'
                    className='inputContainerCadastroSmall'
                    onChange={e => setCep(v => e.target.value)}
                    on
                />
                <input
                    value={estado}
                    placeholder='Estado'
                    className='inputContainerCadastroSmall'
                    onChange={e => setEstado(v => e.target.value)}
                />
            </div>
            <div className='containerDuploInput'>
                <input
                    value={cidade}
                    placeholder='Cidade'
                    className='inputContainerCadastroSmall'
                    onChange={e => setCidade(v => e.target.value)}
                />
                <input
                    value={bairro}
                    placeholder='Bairro'
                    className='inputContainerCadastroSmall'
                    onChange={e => setBairro(v => e.target.value)}
                />
            </div>
            <div className='containerDuploInput'>
            <input
                value={rua}
                placeholder='Rua'
                className='inputContainerCadastroSmall'
                onChange={e => setRua(v => e.target.value)}
            />
            <input
                value={complemento}
                placeholder='Complemento'
                className='inputContainerCadastroSmall'
                onChange={e => setComplemento(v => e.target.value)}
            />
            </div>
            <div className='containerDuploInput'>
            <input
                value={numero}
                placeholder='Numero'
                type='number'
                className='inputContainerCadastroSmall'
                onChange={e => setNumero(v => e.target.value)}
            />
            </div>
            <div id='containerButtonFormulario'>
                <button id='botaoCadastroFormulario' className='containerButtonCadastroEndereco' onClick={carregarDados}>Confirmar</button>
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isCompleto ? <ModalConfirmacao handleClose={clickConfirmar}/> : <div></div>}
        </motion.div>
    );
};