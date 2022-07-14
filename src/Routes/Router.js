import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login'

export const Router = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}