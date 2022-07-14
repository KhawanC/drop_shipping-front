import React from 'react';
import './style.css'

export const LoadingScreen = () => {
    return(
        <div className='boxModal'>
            <div className='boxMenorModal'>
                <div class="lds-ripple"><div></div><div></div></div>
                <p className='tituloLoading'>Carregando...</p>
            </div>
        </div>
    );
};