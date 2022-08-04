import React, { useState, useEffect } from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../Api/api';
import { ProdutoCard } from '../../Components/ProdutoCard';

export const Categoria = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [dados, setDados] = useState({
        id: null,
        link: '',
        listaImagens: {},
        listaPalavrasChaves: {},
        nome: '',
    });

    useEffect(() => {
        setDados(e => location.state)
    }, [])

    useEffect(() => {
        if(dados.id !== null) {
            atualizarDados()
        }
    }, [dados])

    const atualizarDados = async() => {
        try {
            const res = await api.get(`produto/nomeCategoria/${dados.nome}`)
            setProdutos(e => res.data)
            setLoading(false)
        } catch (error) {
        }
    }

    function produtoHandle(dados) {
        navigate(`/produto/${dados.link}`, {
            state: dados
        })
    }

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
            className='containerCategoria'
        >
            <div className='headerPaginaItem'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate('/')}/>
            </div>
            {isLoading ? 
                <div className='boxLoadingScreenCategoria'>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div> 
                : 
                <div>
                    <div id='boxTituloPaginaCategoria'>
                        <p id='tituloPaginaCategoria'>{dados.nome}</p>
                    </div>
                    <div id='containerProdutosPaginaCategoria'>
                        {produtos.map((dados, index) => {
                            return(
                            <ProdutoCard key={index} dados={dados} handleClick={() => produtoHandle(dados)}/>
                        )})}
                    </div>
                </div>}
            

        </motion.div>
    );
};