import React, { useState } from 'react';
import './style.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineHeart} from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const [isLoggado, setLoggado] = useState(false);
    const [isLoading, setLoading] = useState(false);
    let navigate = useNavigate();

    function navegarCadastro() {
        setLoading(true)
        setTimeout(function() {
            navigate('/login')
        }, 800)
    }

    return(
        <div className='container'>
            <div className='homeHeader'>
                {isLoggado ? <div>
                        <h1>Teste</h1>
                    </div> : <BsFillPersonFill
                    className='iconPerfil'
                    size={35}/>}
                <div className='headerNome'>
                    {isLoggado ? <p className='textHeaderNome'>Olá, </p> : <p className='textHeaderRegistrar' onClick={() => navegarCadastro()}>Registrar-se</p>}
                </div>
                <div className='boxNotiFav'>
                    <MdOutlineNotifications
                        className='iconNotiFav'
                        size={23}/>

                    <AiOutlineHeart
                        className='iconNotiFav'
                        size={23}/>
                </div>
                {isLoading ? <div className='boxModal'>
                        <div className='boxMenorModal'>
                            <div class="lds-ripple"><div></div><div></div></div>
                            <p className='tituloLoading'>Loading</p>
                        </div>
                    </div> : <div></div>}
            </div>
        </div>
    );
};