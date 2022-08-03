import React from 'react';
import './style.css';

export const ModalAvisosV2 = (props) => {
    return(
        <div className='boxModal'>
            <div className='boxMenorModal'>
                <div id='boxMensagensAvisos'>
                    <p id='textoStyleAvisosModal'>{props.mensagem}</p>
                    <div id='boxBotoesPaginaModalAvisosV2'>
                        <button id='botaoStyleCancelarAvisosModal' onClick={props.handleClick1}>Cancelar</button>
                        <button id='botaoStyleConfirmarAvisosModal' onClick={props.handleClick2}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};