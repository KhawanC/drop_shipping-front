import { createSlice } from "@reduxjs/toolkit";

export const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState: {value: []},
    reducers: {
        adicionarFavoritos: (state, action) => {
            state.value.push(action.payload)
        },
        removerFavoritos: (state, action) => {
            state.value = state.value.filter((itens) => itens !== action.payload)
        },
    },
});

export const { adicionarFavoritos, removerFavoritos } = favoritosSlice.actions;
export default favoritosSlice.reducer;