import React, { useEffect } from 'react';
import './style.css';

export const ProdutoCard = (props) => {

    const imagemObjeto = props.dados.listaImagens.slot_1.replace('{', '').replace('}', '').replace('"', "");

    return(
        <div id='boxProdutosPaginaCategoria' key={props.dados.id} onClick={props.handleClick}>
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
                    <p id='precoAntigoPaginaCategoria'>{props.dados.preco}</p>
                    <p id='precoNovoPaginaCategoria'>{(props.dados.preco-((props.dados.preco*props.dados.prcntDesconto)/100)).toFixed(2)} - <span>{props.dados.prcntDesconto}% OFF</span></p>
                </div> :
                <div id='boxDescricao2PaginaCategoria'> 
                    <p id='precoNovoPaginaCategoria'>{props.dados.preco}</p>
                </div>}
            </div>
        </div>
    );
};