import React from 'react';
import './style.css';

export const PopupMessageError = (props) => {
    return(
        <div id='containerExternalPopup'>
            <div id='popupMessage'>
                <p id='mensagemErrorStyle'>{props.mensagem}</p>
            </div>
        </div>
    );
};