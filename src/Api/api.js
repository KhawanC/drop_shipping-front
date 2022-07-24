import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.102:8081/dropshipping'
});

export const viaCep = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});