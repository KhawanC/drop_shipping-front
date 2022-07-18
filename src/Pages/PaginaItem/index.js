import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const PaginaItem = (props) => {

    let navigate = useNavigate();
    const location = useLocation();

    return(
        <div className='containerPaginaItem'>
            <div className='headerPaginaItem'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div className='apresentacaoPaginaItemPedido'>

            </div>
        </div>
    );
};