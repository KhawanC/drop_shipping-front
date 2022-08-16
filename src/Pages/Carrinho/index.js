import React, { useState, useEffect } from 'react';
import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { ItemPaginaCarrinho } from '../../Components/ItemPaginaCarrinho';

export const Carrinho = (props) => {
    const listaCarrinho = useSelector((state) => state.carrinho.value);
    const [listaValores, setListaValores] = useState([]);
    const [valorTotal, setValorTotal] = useState(0.0);
    const navigate = useNavigate();

    useEffect(() => {
        let tempValor = 0;
        listaValores.map(dados => {
            tempValor += parseFloat(dados.valor)
        })
        setValorTotal(tempValor)
    }, [listaValores]);

    const forceAtualizarValor = () => {
        let tempValor = 0;
        listaValores.map(dados => {
            tempValor += parseFloat(dados.valor)
        })
        setValorTotal(tempValor)
    };

    const atualizarValores = (index, valor) => {
        let isPresent = false;
        listaValores.map(dados => {
            if(dados.id === index) {
                isPresent = true
            };
        });
        if(isPresent === false) {
            setListaValores(e => [...e, {id: index, valor: valor}])
        } else {
            listaValores.map(dados => {
                if(dados.id === index) {
                    dados.valor = valor
                };
            });
            forceAtualizarValor()
        }
    }

    return(
        <motion.div 
            id='containerPrincipalPaginaCarrinho'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div id='boxInternoPaginaCarrinho'>
                <div className='boxVoltar'>
                    <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
                </div>
                <div id='boxTituloPaginaCarrinho'>
                    <p id='tituloStylePaginaCarrinho'>Carrinho</p>
                </div>
                <div id='boxProdutosPaginaCarrinho'>
                    {listaCarrinho.map(dados => {
                        return(
                            <ItemPaginaCarrinho dados={dados} valorItem={e => atualizarValores(dados.id, e)}/>
                        );
                    })};
                </div>
            </div>
            <div id='boxConcluirCompraPaginaCarrinho'>
                <p id='textoPrecoStyleItemCarrinho'>Total: <span id='precoStyleItemCarrinho'>R${valorTotal}</span></p>
                <p id='textoPrecoStyleItemCarrinho'>Frete: <span id='precoStyleItemCarrinho'>GRÁTIS</span></p>
                <button id='buttonStylePaginaCarrinho' onClick={() => navigate('/carrinho/pagamento')}>Ir para o pagamento</button>
            </div>
        </motion.div>
    );
};