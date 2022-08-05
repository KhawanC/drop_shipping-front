import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.25.103.64:8081/dropshipping'
});

export const viaCep = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});