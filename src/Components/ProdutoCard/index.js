import React, { useEffect } from 'react';
import './style.css';

export const ProdutoCard = (props) => {

    const imagemObjeto = props.dados.listaImagens.slot[0];

    return(
        <div id='boxProdutosPaginaCategoria' onClick={props.handleClick}>
            <div id='boxImagemProdutoCategoria'>
                <img
                    id='imagemProdutoCategoria'
                    src={imagemObjeto}
                />
            </div>
            <div id='boxTituloDescricaoCategoria'>
                <div id='boxTitulo2PaginaCategoria'>
                    <p id='titulo2PaginaCategoria'>{props.dados.nome}</p>
                </div>
                {props.dados.prcntDesconto > 0 ? 
                <div id='boxDescricao2PaginaCategoria'>
                    <p id='precoAntigoPaginaCategoria'>R${props.dados.preco.toFixed(2)}</p>
                    <p id='precoNovoPaginaCategoria'>R${(props.dados.preco-((props.dados.preco*props.dados.prcntDesconto)/100)).toFixed(2)} - <span>{props.dados.prcntDesconto}% OFF</span></p>
                </div> :
                <div id='boxDescricao2PaginaCategoria'> 
                    <p id='precoNovoPaginaCategoria'>R${(props.dados.preco).toFixed(2)} - FRETE GRATIS</p>
                </div>}
            </div>
        </div>
    );
};