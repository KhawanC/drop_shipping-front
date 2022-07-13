import React from 'react'
import './style.css'
import { BsArrowLeft, BsBrightnessAltHighFill } from "react-icons/bs";

export const Home = () => {
    return(
        <div className='container'>
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar'/>
            </div>
            <div className='boxLogo'>
                <BsBrightnessAltHighFill className='logo'/>
                <p>Crie sua conta</p>
            </div>
        </div>
    );
}

export default Home;