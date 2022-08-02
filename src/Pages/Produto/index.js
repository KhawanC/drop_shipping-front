import React, { useEffect, useState } from 'react'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { Box, Carousel, Image, TextInput } from 'grommet';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { adicionarFavoritos, removerFavoritos } from '../../Services/Favoritos';

export const Produto = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProdutoFavorito, setProdutoFavorito] = useState(false);
    const [imagens, setImagens] = useState([]);
    const [texto, setTexto] = useState([]);
    const listaFavoritos = useSelector((state) => state.favoritos.value);
    const dispatch = useDispatch();
    const [dados, setDados] = useState({
        id: null,
        link: '',
        listaImagens: {},
        listaPalavrasChaves: {},
        nome: '',
    });

    useEffect(() => {
        setDados(location.state);
        setImagens([location.state.listaImagens.slot_1.replace('{', '').replace('}', '').replace('"', '')]);
        setTexto([location.state.listaTexto.slot_1.replace('{', '').replace('}', '').replace('"', '')]);
        if(listaFavoritos.includes(location.state.id)) {
            setProdutoFavorito(true);
        }
    }, [])

    return(
        <div id='containerPaginaProduto'>
            <div id='boxHeaderPaginProduto'>
                <div id='boxBotaoVoltarPaginaProduto'>
                    <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
                </div>
                <div id='boxSliderPaginaProduto'>
                    <Carousel fill>
                        {imagens.map((dados, index) => {
                            return(
                                <Image key={index} fit="cover" src={dados} style={{borderRadius: '35px', padding: '35px'}}/>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            <div id='boxMainInfoPaginaProduto'>
                <div id='boxTituloCoracaoPaginaProduto'>
                    <div id='boxTituloPaginaProduto'>
                        <p id='tituloPaginaProduto'>{dados.nome}</p>
                    </div>    
                    <div id='boxCoracaoPaginaProduto'>
                        {
                        isProdutoFavorito ?
                            <AiFillHeart
                                size={34}
                                color='red'
                                id='coracaoIconePaginaProduto'
                                onClick={() => {dispatch(removerFavoritos(dados.id)); setProdutoFavorito(false)}}
                            /> :
                            <AiOutlineHeart
                                size={34}
                                color='red'
                                id='coracaoIconePaginaProduto'
                                onClick={() => {dispatch(adicionarFavoritos(dados.id)); setProdutoFavorito(true)}}
                            />
                        }
                    </div>
                </div>
                <div id='boxTabelaPrecoFreteComprarPaginaProduto'>
                        <div id='boxPrecoComprarPaginaProduto'>
                            <p id='precoStylePaginaProduto'>De: <span id='precoRiscadoStylePaginaProduto'>R${dados.preco}</span> por:</p>
                            <p id='precoNovoStylePaginaProduto'>R${(dados.preco-((dados.preco*dados.prcntDesconto)/100)).toFixed(2)}</p>
                        </div>
                        <div id='boxBotaoComprarPaginaProduto'>
                            <button id='botaoComprarPaginaProduto'>Adicionar ao Carrinho</button>
                        </div>
                </div>
                <hr id='separadorPaginaProduto'/>
                <div id='boxDescricaoPaginaProduto'>
                    <p className='subtituloStylePaginaProduto'>Descrição</p>
                    <div id='boxDescricao2PaginaProduto'>
                        <p className='descricaoStylePaginaProduto'>{texto[0]}</p>
                    </div>
                </div>
                <div id='boxProdutosRelacionadosPaginaProduto'>
                    <p id='tituloStyleRelacionadosPaginaProduto'>Talvez você goste:</p>
                </div>
            </div>
        </div>
    );
};