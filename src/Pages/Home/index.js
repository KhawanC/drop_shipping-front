import React, { useState, useEffect } from 'react';
import './homeCss.css'
import { AiOutlineHeart, AiOutlineBars} from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md';
import { Box, Carousel, Image, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';
import { Search } from 'grommet-icons';
import { IconeCategoria } from '../../Components/IconeCategoria';
import { LoadingScreen } from '../../Components/LoadingScreen';
import { SideBar } from '../../Components/SideBar';
import { ItemPaginaHome } from '../../Components/ItemPaginaHome';
import { motion } from 'framer-motion'

export const Home = (props) => {

    const [isLoggado, setLoggado] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    let navigate = useNavigate();

    function navegarCadastro() {
        navigate('/login')
    }

    function closeHandle() {
        setSideBarOpen(false)
    }

    useEffect(() => {
        if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined) {
            setLoggado(true)
        } else {
            setLoggado(false)
        }
    }, [])

    return(
        <motion.div 
            className='containerHome'

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.1}}}
        >
            <div className='homeHeader'>
                <AiOutlineBars
                    className='iconSideBar'
                    size={35}
                    onClick={() => setSideBarOpen(true)}
                />
                <div className='boxNotiFav'>
                    <MdOutlineNotifications
                        className='iconNotiFav'
                        size={23}/>

                    <AiOutlineHeart
                        className='iconNotiFav'
                        size={23}/>
                </div>
            </div>
            <div className='boxSearch'>
                <TextInput
                    style={{
                        color: 'white',
                        fontSize: 13,
                        fontWeight: '500',
                        backgroundColor: '#1f222a',
                        borderRadius: '20px',
                        height: '100%'
                    }}
                    icon={<Search/>}
                    placeholder="Procurar"
                />
            </div>
            <div className='boxTextOfertas'>
                <p className='boxOfertaTituloMaior'>Ofertas Especiais</p>
                <p className='boxOfertaTituloMenor'>Ver todas</p>
            </div>
            <Box height="small" width="medium" overflow="hidden" margin={'30px 0 0 0'}>
                <Carousel fill play={3500}>
                <Image fit="cover" src="https://www.viajandoparaacalabria.com/home/wp-content/uploads/2017/05/banner-oferta.jpg" style={{borderRadius: '35px'}}/>
                <Image fit="cover" src="https://www.viajandoparaacalabria.com/home/wp-content/uploads/2017/05/banner-oferta.jpg" style={{borderRadius: '35px'}}/>
                <Image fit="cover" src="https://www.viajandoparaacalabria.com/home/wp-content/uploads/2017/05/banner-oferta.jpg" style={{borderRadius: '35px'}}/>
                </Carousel>
            </Box>
            <div className='boxCategorias '>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
                <IconeCategoria/>
            </div>
            <div className='boxTextOfertas2'>
                <p className='boxOfertaTituloMaior'>Mais Populares</p>
                <p className='boxOfertaTituloMenor'>Ver todas</p>
            </div>
            <div className='boxDisplayItensHome'>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
                <ItemPaginaHome/>
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isSideBarOpen ? <SideBar loggado={isLoggado} handleClose={closeHandle} navegar={navegarCadastro}/> : <div></div>}
        </motion.div>
    );
};