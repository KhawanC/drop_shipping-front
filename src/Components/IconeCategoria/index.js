import React from 'react';
import './style.css'
import { FaTshirt } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { BiBlock } from 'react-icons/bi'
import { BsHouseDoor } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export const IconeCategoria = (props) => {

    const navigate = useNavigate();

    function renderizarIcone(nomeIcone) {
        switch (nomeIcone) {
            case 'FaTshirt':
                return <FaTshirt
                color='white'
                size={25}
                /> ;
            case 'BsHouseDoor':
                return <BsHouseDoor
                color='white'
                size={25}
                /> ;
            case 'FiSmartphone':
                return <FiSmartphone
                color='white'
                size={25}
                />
            default:
                return <BiBlock
                color='white'
                size={25}
                />;
        }
    }

    return(
        <div className='containerIconeCategoria'
            onClick={props.handleClick}
        >
            <div className='boxIcone'>
               {renderizarIcone(props.dadosCategoria.icone_home)}
            </div>
            <div className='boxTextCategoria'>
                <p className='textCategoria'>{props.dadosCategoria.nome}</p>
            </div>
        </div>
    );
};