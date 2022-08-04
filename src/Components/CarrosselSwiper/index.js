import React, { useState, useEffect } from 'react';
import './style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import imagemBanner from '../../Source/banner_temp.png';

export const CarrosselSwiper = (props) => {
    const [listaImagens, setListaImagens] = useState([]);

    useEffect(() => {
        setListaImagens(props.imagem)
    }, [])

    useEffect(() => {
    }, [listaImagens])
    
    return(
        <>
            <Swiper
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {listaImagens.map((dados, index) => {
                    return(
                        <SwiperSlide key={index}><img src={dados} alt='banner' id='imagemSwiperCarrossel'/></SwiperSlide>
                    )})
                };
            </Swiper>
        </>
    );
};