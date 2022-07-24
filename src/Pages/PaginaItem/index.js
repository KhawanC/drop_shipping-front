import React from 'react'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

export const PaginaItem = (props) => {
    const navigate = useNavigate();
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