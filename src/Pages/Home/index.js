import React, { useState, useEffect } from 'react';
import './style.css'
import { AiOutlineHeart, AiOutlineBars, AiOutlineShoppingCart} from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md';
import { Box, Carousel, Image, TextInput } from 'grommet';
import { useNavigate } from 'react-router-dom';
import { Search } from 'grommet-icons';
import { IconeCategoria } from '../../Components/IconeCategoria';
import { LoadingScreen } from '../../Components/LoadingScreen';
import { SideBar } from '../../Components/SideBar';
import { ItemPaginaHome } from '../../Components/ItemPaginaHome';
import { motion } from 'framer-motion'
import { api } from '../../Api/api';
import imagemBanner from '../../Source/banner_temp.png'

export const Home = (props) => {

    const [isLoggado, setLoggado] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const [dadosCategoria, setDadosCategoria] = useState([]);
    const [dadosProduto, setDadosProduto] = useState([]);
    const navigate = useNavigate();

    function navegarCadastro() {
        navigate('/login')
    }

    function closeHandle() {
        setSideBarOpen(false)
    }

    function produtoHandle(dados) {
        navigate(`/produto/${dados.link}`, {
            state: dados
        })
    }

    function categoriaHandle(dados) {
        navigate(`/categoria/${dados.link}`, {
            state: dados
        })
    }

    const carregarDados = async () => {
        try {
            const res = await api.get('/categoria')
            const res2 = await api.get('/produto')
            setDadosCategoria(e => res.data)
            setDadosProduto(e => res2.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        carregarDados()
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
                    <AiOutlineShoppingCart
                        className='iconNotiFav'
                        size={23}
                        onClick={() => navigate('/carrinho')}
                    /> 

                    <MdOutlineNotifications
                        className='iconNotiFav'
                        size={23}
                    />

                    <AiOutlineHeart
                        className='iconNotiFav'
                        size={23}
                        color='red'
                        onClick={() => navigate('/favoritos')}
                    />
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
                <p className='boxOfertaTituloMaior'>Ofertas Especiaiss</p>
                <p className='boxOfertaTituloMenor'>Ver todas</p>
            </div>
            <Box height="small" width="medium" overflow="hidden" margin={'30px 0 0 0'}>
                <Carousel fill play={3500}>
                <Image fit="cover" src={imagemBanner} style={{borderRadius: '35px'}}/>
                <Image fit="cover" src={imagemBanner} style={{borderRadius: '35px'}}/>
                <Image fit="cover" src={imagemBanner} style={{borderRadius: '35px'}}/>
                </Carousel>
            </Box>
            {dadosCategoria.length === 0 ? <div id='boxLoadingEmptyHome'>
                        <div className='loader'></div>
                    </div> : ''}
            <div className='boxCategorias '>
                
                {dadosCategoria.map(dados => {
                    return <IconeCategoria dadosCategoria={dados} key={dados.id} handleClick={() => categoriaHandle(dados)}/>
                })}
            </div>
            <div className='boxTextOfertas2'>
                <p className='boxOfertaTituloMaior'>Mais Populares</p>
                <p className='boxOfertaTituloMenor'>Ver todos</p>
            </div>
            <div className='boxDisplayItensHome'>
                {dadosProduto.map(dados => {
                    return <ItemPaginaHome dadosProduto={dados} key={dados.id} handleClick={() => produtoHandle(dados)}/>
                })}
            </div>
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isSideBarOpen ? <SideBar loggado={isLoggado} handleClose={closeHandle} navegar={navegarCadastro}/> : <div></div>}
        </motion.div>
    );
};