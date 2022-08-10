import React, { useState, useEffect } from 'react';
import './style.css'
import { AiOutlineHeart, AiOutlineBars, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { MdOutlineNotifications } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IconeCategoria } from '../../Components/IconeCategoria';
import { LoadingScreen } from '../../Components/LoadingScreen';
import { SideBar } from '../../Components/SideBar';
import { ItemPaginaHome } from '../../Components/ItemPaginaHome';
import { motion } from 'framer-motion';
import { api } from '../../Api/api';
import { CarrosselSwiper } from '../../Components/CarrosselSwiper';
import imagemBanner from '../../Source/banner_temp.png';
import imagemBanner2 from '../../Source/istockphoto-1194426021-1024x1024.jpg';

export const Home = (props) => {

    const [isLoggado, setLoggado] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLoadingDados, setLoadingDados] = useState(true);
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const [dadosCategoria, setDadosCategoria] = useState([]);
    const [dadosProduto, setDadosProduto] = useState([]);
    const [contadorErros, setContadorErros] = useState(0);
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
            setLoadingDados(false);
        } catch (error) {
            setContadorErros(e => e + 1)
            setTimeout(function() {
                carregarDados()
            }, 15000)
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
                    <AiOutlineHeart
                        className='iconNotiFav'
                        size={23}
                        color='red'
                        onClick={() => navigate('/favoritos')}
                    />
                </div>
            </div>
            {isLoadingDados ?
            <>
                <div id='boxLoadingDadosPaginaHome'>
                    <div className='loader'></div>
                    {contadorErros >= 3 ?
                    <>
                        <p id='textoLoadingDadosPaginaHome'>Nossos especialistas estão verificando a demora...</p>
                    </> :
                    <>
                    </>}
                </div>
                
            </> :
            <>
                <div className='boxCarrosselPaginaHome'>
                    <CarrosselSwiper imagem={[imagemBanner2,imagemBanner2, imagemBanner2, imagemBanner2, imagemBanner2]}/>
                </div>
                <div className='boxTextOfertas'>
                    <p className='boxOfertaTituloMaior'>Ofertas Especiais</p>
                    <p className='boxOfertaTituloMenor'>Ver todas</p>
                </div>
                <div className='boxCategorias '>
                    
                    {dadosCategoria.map(dados => {
                        return <IconeCategoria dadosCategoria={dados} key={dados.id} handleClick={() => categoriaHandle(dados)}/>
                    })}
                </div>
                <div className='boxTextOfertas2'>
                    <p className='boxOfertaTituloMaior'>Produtos Populares</p>
                    <p className='boxOfertaTituloMenor'>Ver todos</p>
                </div>
                <div className='boxDisplayItensHome'>
                    {dadosProduto.map(dados => {
                        return <ItemPaginaHome dadosProduto={dados} key={dados.id} handleClick={() => produtoHandle(dados)}/>
                    })}
                </div>
            </>
            }
            {isLoading ? <LoadingScreen/> : <div></div>}
            {isSideBarOpen ? <SideBar loggado={isLoggado} handleClose={closeHandle} navegar={navegarCadastro}/> : <div></div>}
        </motion.div>
    );
};