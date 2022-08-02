import React, { useEffect, useState } from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../Api/api'
import { ProdutoCard } from '../../Components/ProdutoCard';

export const Favoritos = (props) => {

    const navigate = useNavigate();
    const listaFavoritos = useSelector((state) => state.favoritos.value);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        listaFavoritos.forEach(item => {
            atualizarFavoritos(item)
        });
    }, [])

    const atualizarFavoritos = async(index) => {
        try {
            const res = await api.get(`/produto/id/${index}`)
            setProdutos(e => [...e, res.data])
        } catch(error) {
            console.log(error.response)
        }
    }

    return(
        <motion.div 
            className='containerHome'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div id='boxTituloPaginaFavoritos'>
                <p id='tituloStylePaginaFavotiros'>Favoritos</p>
            </div>
            <div id='containerProdutosPaginaCategoria'>
                        {produtos.map((dados) => {
                            return(
                            <ProdutoCard key={dados} dados={dados}/>
                        )})}
                    </div>
        </motion.div>
    );
};