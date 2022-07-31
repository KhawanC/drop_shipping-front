import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {value: ''},
    reducers: {
        adicionarToken: (state, action) => {
            state.value = action.payload
        },
        removerToken: (state, action) => {
            state.value = ''
        }
    },
});

export const { adicionarToken, removerToken } = tokenSlice.actions;
export default tokenSlice.reducer;