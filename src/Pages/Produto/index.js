import React, { useEffect, useState } from 'react'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { adicionarFavoritos, removerFavoritos } from '../../Services/Favoritos';
import { adicionarCarrinho, removerCarrinho } from '../../Services/Carrinho';
import { CarrosselSwiperProduto } from '../../Components/CarrosselSwiperProduto';
import { motion } from 'framer-motion';
import { ModalAvisos } from '../../Components/ModalAvisos';
import { ModalAvisosV2 } from '../../Components/ModalAvisosV2';

export const Produto = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProdutoFavorito, setProdutoFavorito] = useState(false);
    const [isItemCarrinho, setItemCarrinho] = useState(false);
    const [isPopup, setPopup] = useState(false);
    const [isPopup2, setPopup2] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [texto, setTexto] = useState([]);
    const listaFavoritos = useSelector((state) => state.favoritos.value);
    const listaCarrinho = useSelector((state) => state.carrinho.value);
    const dispatch = useDispatch();
    const [dados, setDados] = useState({
        id: null,
        link: '',
        listaImagens: {},
        listaPalavrasChaves: {},
        nome: '',
        preco: 0
    });

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        setDados(location.state);
        setTexto(location.state.listaTexto.slot);
        if(listaFavoritos.includes(location.state.id)) {
            setProdutoFavorito(true);
        }
        listaCarrinho.map(dadoObjeto => {
            if(dadoObjeto.id === location.state.id) {
                setItemCarrinho(true);
            }
        })
    }, [])

    const verificarCarrinho = () => {
        if(localStorage.getItem('token') === null ||
           localStorage.getItem('token') === undefined ||
           localStorage.getItem('token') === '') {
            
            setPopupMessage(e => 'Cadastre-se para adicionar itens ao carrinho!')
            setPopup(true)
        } else {
            if(isItemCarrinho === true) {
                setPopupMessage(e => 'Tem certeza que deseja remover esse item?')
                setPopup2(true)
            } else {
                dispatch(adicionarCarrinho({
                    id: dados.id,
                    quantidade: 1
                }))
                setItemCarrinho(true)
            }
            
        }
    }

    const clickModalCarrinho = () => {
        setPopup(false)
        setPopupMessage(e => '')   
    }

    const clickModalCancelar = () => {
        setPopup2(false)
        setPopupMessage(e => '')   
    }

    const clickModalConfirmar = () => {
        setItemCarrinho(false)
        dispatch(removerCarrinho(dados.id))
        setPopup2(false)
        setPopupMessage(e => '') 
    }

    return(
        <motion.div 
            id='containerPaginaProduto'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div id='boxHeaderPaginProduto'>
                <div id='boxBotaoVoltarPaginaProduto'>
                    <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
                </div>
                <div id='boxSliderPaginaProduto'>
                    <CarrosselSwiperProduto imagens={location.state}/>
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
                            <p id='precoStylePaginaProduto'>De: <span id='precoRiscadoStylePaginaProduto'>R${dados.preco.toFixed(2)}</span> por:</p>
                            <p id='precoNovoStylePaginaProduto'>R${(dados.preco-((dados.preco*dados.prcntDesconto)/100)).toFixed(2)}</p>
                        </div>
                        <div id='boxBotaoComprarPaginaProduto'>
                            {isItemCarrinho ? 
                            <>
                                <button id='botaoRemoverCarrinhoPaginaProduto' onClick={() => verificarCarrinho()} >Remover do Carrinho</button>
                            </> :
                            <>
                                <button id='botaoComprarPaginaProduto' onClick={() => verificarCarrinho()} >Adicionar ao Carrinho</button>
                            </>}
                            
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
            {isPopup ? 
            <>
                <ModalAvisos mensagem={popupMessage} handleClick={() => clickModalCarrinho()}/>
            </> : 
            <>
            </>}
            {isPopup2 ? 
            <>
                <ModalAvisosV2 mensagem={popupMessage} handleClick1={() => clickModalCancelar()} handleClick2={() => clickModalConfirmar()}/>
            </> : 
            <>
            </>}
        </motion.div>
    );
};