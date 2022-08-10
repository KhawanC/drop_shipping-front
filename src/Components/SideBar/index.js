import React, { useState } from 'react';
import './style.css';
import { AiOutlineClose, AiOutlineUserAdd, AiOutlineUser, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineUserDelete } from 'react-icons/ai';
import { LoadingScreen } from '../LoadingScreen';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


export const SideBar = (props) => {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    function desconectarUsuario() {
        setLoading(true);
        setTimeout(function() {
            setLoading(false)
            localStorage.removeItem('token')
            window.location.reload();
        }, 2500);
    };

    const consultarUsuario = async () => {
        let token = localStorage.getItem('token')
        let encoded = jwtDecode(token)
        navigate(`conta/${encoded.iss}`, {
            state: {
                dados: encoded.sub
            }
        });
    };

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
                    <span className='textBoxNavigation' onClick={() => consultarUsuario()}><AiOutlineUser className='iconeBoxNavigation' size={28}/> Conta</span>
                    <span className='textBoxNavigation' onClick={() => navigate('/carrinho')}><AiOutlineShoppingCart className='iconeBoxNavigation' size={28}/> Carrinho</span>
                    <span className='textBoxNavigation' onClick={desconectarUsuario}><AiOutlineUserDelete className='iconeBoxNavigation' size={28}/> Desconectar</span>
                    <span className='textBoxNavigation'><AiOutlinePhone className='iconeBoxNavigation' size={28}/> Fale Conosco</span>
                </div> : <div className='boxNavigation'>
                    <span className='textBoxNavigation' onClick={props.navegar}><AiOutlineUserAdd size={28}/> Registrar / Entrar</span>
                </div>}
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
        </div>
    );
}