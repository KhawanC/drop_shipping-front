import React, { useState, useEffect } from 'react'
import './style.css'
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCreditCard, AiOutlineBarcode } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import PixIcone from '../../Source/pix_icone.png'

export const Pagamento = (props) => {
    const navigate = useNavigate();
    const [metodoPagamento, setMetodoPagamento] = useState('');

    return(
        <div id='containerPaginaPagamento'>
            <div className='boxVoltar'>
                <BsArrowLeft className='botaoVoltar' onClick={() => navigate(-1)}/>
            </div>
            <div id='boxTituloPaginaPagamento'>
                <p className='tituloStylePaginaPagamento'>1 - Escolher método de pagamento</p>
            </div>
            <div id='boxMetodoPagamentoPaginaPagamento'>
                <button className='buttonMetodoPagamentoInvalidoStylePaginaPagamento'><img src={PixIcone} width='18px' height='18px' className='iconeBotaoPagamentoPaginaPagamento'/> PIX</button>
                <button className={metodoPagamento === 'boleto' ? 'buttonPreenchidoMetodoPagamentoStylePaginaPagamento' : 'buttonMetodoPagamentoStylePaginaPagamento'} onClick={() => setMetodoPagamento('boleto')}><AiOutlineBarcode size={24} className='iconeBotaoPagamentoPaginaPagamento'/>Boleto</button>
                <button className={metodoPagamento === 'cartao_credito' ? 'buttonPreenchidoMetodoPagamentoStylePaginaPagamento' : 'buttonMetodoPagamentoStylePaginaPagamento'} onClick={() => setMetodoPagamento('cartao_credito')}><AiOutlineCreditCard size={24} className='iconeBotaoPagamentoPaginaPagamento'/>Cartão de Crédito</button>
                <button className={metodoPagamento === 'cartao_debito' ? 'buttonPreenchidoMetodoPagamentoStylePaginaPagamento' : 'buttonMetodoPagamentoStylePaginaPagamento'} onClick={() => setMetodoPagamento('cartao_debito')}><AiOutlineCreditCard size={24} className='iconeBotaoPagamentoPaginaPagamento'/> Cartão de Débito</button>
            </div>
            {metodoPagamento === '' ? <></> : <></>}

            {metodoPagamento === 'boleto' ? 
            <>
                <div id='boxTituloPaginaPagamento'>
                    <p className='tituloStylePaginaPagamento'>2 - Dados de pagamento</p>
                    <p className='subTituloStylePaginaPagamento'>Confirme todos os dados e prossiga para a geração do boleto</p>
                </div>
                <div id='boxInputPaginaPagamento'>
                    <input
                        type={'text'}
                        placeholder='Nome'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Email'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='CEP'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Estado'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Cidade'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Rua'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Numero'
                        className='inputStylePaginaPagamento'
                    />
                    <input
                        type={'text'}
                        placeholder='Complemento'
                        className='inputStylePaginaPagamento'
                    />
                    <button>Confirmar</button>
                </div>
            </> : 
            <>
            </>}

            {metodoPagamento === 'cartao_credito' ? 
            <>
            </> : 
            <>
            </>}
            {metodoPagamento === 'cartao_debito' ? 
            <>
            </> : 
            <>
            </>}
        </div>
    );
};