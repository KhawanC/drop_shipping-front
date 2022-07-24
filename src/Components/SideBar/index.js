import React, { useState } from 'react';
import './sideBar.css'
import { AiOutlineClose, AiOutlineUserAdd, AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineUserDelete } from 'react-icons/ai'
import { LoadingScreen } from '../LoadingScreen';

export const SideBar = (props) => {
    const [isLoading, setLoading] = useState(false)

    function desconectarUsuario() {
        setLoading(true);
        setTimeout(function() {
            setLoading(false)
            localStorage.removeItem('token')
            window.location.reload();
        }, 2500) 
    }

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
                    <span className='textBoxNavigation'><AiOutlineUser size={28}/> Conta</span>
                    <span className='textBoxNavigation'><AiOutlineShoppingCart size={28}/> Carrinho</span>
                    <span className='textBoxNavigation' onClick={desconectarUsuario}><AiOutlineUserDelete size={28}/> Desconectar</span>
                    <span className='textBoxNavigation'><AiOutlinePhone size={28}/> Fale Conosco</span>
                </div> : <div className='boxNavigation'>
                    <span className='textBoxNavigation' onClick={props.navegar}><AiOutlineUserAdd size={28}/> Registrar / Entrar</span>
                </div>}
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
        </div>
    );
}