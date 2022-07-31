import React, { useState, useEffect } from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../Api/api';

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
            console.log(error.response)
        }
    }

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
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
                        {produtos.map((dados) => {
                            let imagemObjeto = dados.listaImagens.slot_1.replace('{', '').replace('}', '').replace('"', "")
                            return(
                            <div id='boxProdutosPaginaCategoria' key={dados.id}>
                                <div id='boxImagemProdutoCategoria'>
                                    <img
                                        id='imagemProdutoCategoria'
                                        src={imagemObjeto}
                                    />
                                </div>
                                <div id='boxTituloDescricaoCategoria'>
                                    <div id='boxTitulo2PaginaCategoria'>
                                        <p id='titulo2PaginaCategoria'>{dados.nome}</p>
                                    </div>
                                    {dados.prcntDesconto > 0 ? 
                                    <div id='boxDescricao2PaginaCategoria'>
                                        <p id='precoAntigoPaginaCategoria'>{dados.preco}</p>
                                        <p id='precoNovoPaginaCategoria'>{(dados.preco-((dados.preco*dados.prcntDesconto)/100)).toFixed(2)} - <span>{dados.prcntDesconto}% OFF</span></p>
                                    </div> :
                                    <div id='boxDescricao2PaginaCategoria'> 
                                        <p></p>
                                    </div>}
                                </div>
                            </div>
                        )})}
                    </div>
                </div>}
            

        </motion.div>
    );
};