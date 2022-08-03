import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: {value: []},
    reducers: {
        adicionarCarrinho: (state, action) => {
            state.value.push(action.payload)
        },
        removerCarrinho: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
        },
    },
});

export const { adicionarCarrinho, removerCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;