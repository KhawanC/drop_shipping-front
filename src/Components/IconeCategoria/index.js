import React from 'react';
import './style.css'
import { FaTshirt } from 'react-icons/fa'

export const IconeCategoria = () => {
    return(
        <div className='containerIconeCategoria'>
            <div className='boxIcone'>
               <FaTshirt
                    color='white'
                    size={25}
                /> 
            </div>
            <div className='boxTextCategoria'>
                <p className='textCategoria'>Camisa</p>
            </div>
        </div>
    );
};