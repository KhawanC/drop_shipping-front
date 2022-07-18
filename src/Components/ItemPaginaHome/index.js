import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const ItemPaginaHome = (props) => {
    let navigate = useNavigate();

    return(
        <div className='containerItenPaginaHome' onClick={() => navigate('/produto', {
            state:{
                nome:'Camisa do flamengo'
            }
        })}>
            <div className='boxImagemItemPaginaHome'>
                <img className='imagemItemPaginaHome' src='https://flamengo.vteximg.com.br/arquivos/ids/164057-1000-1000/HA8342-1.png?v=637807273095830000'/>
            </div>
            <div className='boxDescPrecoItemPaginaHome'>
                <p className='tituloItemPaginaHome'>Nome do Item</p>
                <p className='precoItemPaginaHome'>R$250,00</p>
            </div>
        </div>
    );
};