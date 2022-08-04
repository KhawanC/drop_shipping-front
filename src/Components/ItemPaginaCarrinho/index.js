import React, { useState, useEffect } from 'react';
import './style.css'
import { api } from '../../Api/api';
import { useDispatch } from 'react-redux';
import { adicionarCarrinho, removerCarrinho } from '../../Services/Carrinho';


export const ItemPaginaCarrinho = (props) => {
    const dispatch = useDispatch();
    const [valorInput, setValorInput] = useState(1);
    const [dados, setDados] = useState({
        id: undefined,
        link: undefined,
        nome: undefined,
        preco: undefined,
        prcntDesconto: undefined,
        listaImagens: {slot: ''},
    });


    const verificarNumeroInput = () => {
        if(valorInput <= 0 || valorInput >= 100) {
            setValorInput(e => 1)
        }
        props.valorItem(((dados.preco-((dados.preco*dados.prcntDesconto)/100))*valorInput).toFixed(2))
    }

    const atualizarDados = async() => {
        try {
            const res = await api.get(`/produto/${props.dados.id}`)
            props.valorItem(((res.data.preco-((res.data.preco*res.data.prcntDesconto)/100))).toFixed(2))
            setDados(res.data)
        } catch(error) {
        }
    }

    useEffect(() => {
        atualizarDados()
    }, [])

    return(
        <div id='containerItemPaginaCarrinho'>
            <div id='boxImagemProdutoCategoria'>
                <img
                    src={dados.listaImagens.slot[0]}
                    id='imagemProdutoCategoria'
                />
            </div>
            <div id='boxQuantidadeTituloItemCarrinho'>
                <div id='boxTituloItemCarrinhoCarrinho'>
                    <p id='tituloStyleProdutoCarrinho'>{dados.nome}</p>
                </div>
                <div id='boxPrecoItemCarrinho'>
                    <p id='textoPrecoStyleItemCarrinho'>Unidade: <span id='precoStyleItemCarrinho'>R${(dados.preco-((dados.preco*dados.prcntDesconto)/100)).toFixed(2)}</span></p>
                </div>
                <div id='boxQuantidadeItemCarrinho'>
                    <input id='inputQuantidadeItemCarrinho' type="number" min={0} max={99} onChange={e => setValorInput(parseInt(e.target.value))} value={valorInput} onBlur={() => verificarNumeroInput()}/>
                </div>
            </div>
        </div>
    );
};