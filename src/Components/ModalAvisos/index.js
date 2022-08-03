import React from 'react';
import './style.css';

export const ModalAvisos = (props) => {
    return(
        <div className='boxModal'>
            <div className='boxMenorModal'>
                <div id='boxMensagensAvisos'>
                    <p id='textoStyleAvisosModal'>{props.mensagem}!!</p>
                    <button id='botaoStyleAvisosModal' onClick={props.handleClick}>Fechar</button>
                </div>
            </div>
        </div>
    );
};