import React, { useState } from 'react';
import './style.css'
import { AiOutlineClose } from 'react-icons/ai'

export const SideBar = (props) => {

    return(
        <div className='containerSideBar'>
            <div className='boxMenorSideBar'>
                <div className='boxHeader'>
                    <AiOutlineClose
                        color='white'
                        className='botaoFecharSideBar'
                        size={30}
                        onClick={props.handleClose}
                    />
                </div>
                {props.loggado ? <div className='boxNavigation'>
                    <span className='textBoxNavigation'>Conta</span>
                    <span className='textBoxNavigation'>Carrinho</span>
                    <span className='textBoxNavigation'>Fale Conosco</span>
                </div> : <div className='boxNavigation'>
                    <span className='textBoxNavigation'>Registrar-se</span>
                </div>}
                
            </div>
        </div>
    );
}