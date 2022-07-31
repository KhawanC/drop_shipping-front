import React, { useEffect, useState } from 'react';
import './style.css';

export const ItemPaginaHome = (props) => {
    const [isMouseEmCima, setMouseEmCima] = useState(false)
    
    return(
        <div className='containerItenPaginaHome' onClick={props.handleClick} onMouseEnter={() => setMouseEmCima(true)} onMouseLeave={() => setMouseEmCima(false)}>
            <div className='boxImagemItemPaginaHome'>
                <img className='imagemItemPaginaHome' src={(props.dadosProduto.listaImagens.slot_1).replace('{', '').replace('}', '').replace('"', '').replace('"', '')}/>
            </div>
            <div className='boxDescPrecoItemPaginaHome'>
                {isMouseEmCima ? <div>
                        <p className='tituloItemPaginaHome'>{props.dadosProduto.nome}</p>
                    </div> : <div>
                        <p className='precoItemPaginaHome precoItemPaginaHomeTraco'>R${props.dadosProduto.preco}</p>
                        <p className='precoItemPaginaHome'>R${(props.dadosProduto.preco-((props.dadosProduto.preco*props.dadosProduto.prcntDesconto)/100)).toFixed(2)}</p>
                    </div>}
            </div>
        </div>
    );
};