import React from 'react';
import './style.css'
import { GiConfirmed } from "react-icons/gi";

export const ModalConfirmacao = (props) => {
    return(
        <div className='boxModal'>
            <div className='boxMenorModal'>
                <GiConfirmed
                    size={60}
                    color='green'
                />
                <p id='textModalConfirmacao'>Você foi cadastrado com sucesso!</p>
                <button id='botaoModalConfirmacao' onClick={props.handleClose}>Continuar</button>
            </div>
        </div>
    );
};