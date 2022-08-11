import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { api } from '../../Api/api';
import jwtDecode from 'jwt-decode';

export const DadosPessoais = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [dadosUsuario, setDadosUsuario] = useState({});

    const resgatarDados = async(idUsuario) => {
        try {
            const res = await api.get(`usuario/${idUsuario}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
            })
            setDadosUsuario(e => res.data)
        } catch (error) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('token');
        let tokenDecoded = jwtDecode(token);
        let exp = new Date(parseInt(tokenDecoded.exp) * 1000)
        if(exp > Date(parseInt(Date.now()) * 1000)) {
            localStorage.removeItem('token')
            navigate('/login')
        } else {
            var partsOfStr = tokenDecoded.sub.split(',');
            resgatarDados(partsOfStr[0])
        }
    }, [])

    return(
        <motion.div 
            id='containerPaginaDadosPessoais'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div id='boxBoasVindaPaginaDadosPessoais'>
                <p id='tituloStylePaginaDadosPessoais'>Dados Pessoais</p>
            </div>
            <div id='boxTabelaPaginaDadosPessoais'>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Nome Completo</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <span className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.nomeCompleto}</span>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Email</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.email}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <p className='textoTabela1StylePaginaDadosPessoais'>Telefone</p>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.telefone}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>CPF</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.cpf}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>CEP</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.cep}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Estado</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.estado}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Cidade</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.cidade}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Bairro</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.bairro}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Rua</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.rua}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Numero</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.numero}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
                <div id='boxColunaTabelaPaginaDadosPessoais'>
                    <div className='boxParte1ColunaTabelaPaginaDadosPessoais'>
                        <span className='textoTabela1StylePaginaDadosPessoais'>Complemento</span>
                    </div>
                    <div className='boxParte2ColunaTabelaPaginaDadosPessoais'>
                        <p className='dadosTextoTabelaStylePaginaDadosPessoais'>{dadosUsuario?.endereco?.complemento}</p>
                    </div>
                    <div className='boxParte3ColunaTabelaPaginaDadosPessoais'>
                        <MdOutlineKeyboardArrowRight
                            size={30}
                            color={'black'}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};