import React, { useState, useEffect } from 'react';
import "./style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarrosselSwiperProduto = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [listaImagens, setListaImagens] = useState([]);

    useEffect(() => {
        setListaImagens(props.imagens.listaImagens.slot)
    },[])

    return(
        <>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="swiperProduto2"
            >
                {listaImagens.map((dados, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <img src={dados} />
                        </SwiperSlide>
                    )
                })};
                
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="swiperProduto"
            >
                {listaImagens.map((dados, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <img src={dados} />
                        </SwiperSlide>
                    )
                })};
            </Swiper>
        </>
    );
};