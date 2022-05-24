import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";

import {
    Container,
} from '@mui/material';

import Nav from "./components/Nav";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/AuthComponents/Login";
import Register from "./components/AuthComponents/Register";
import ProductView from "./components/ProductView";
import ProductEdit from "./components/ProductUpdateComponents/ProductEdit";
import ProductCreate from "./components/ProductUpdateComponents/ProductCreate";
import Sack from "./components/Sack";

import AuthProvider from "./AuthContext";


function App() {

    return (
        <>
        <AuthProvider>
            <div className="App">
                <Nav />
                <Container className="mb-10">
                    {/*<button onClick={changeAuthStatus}>Change Auth Status</button>*/}
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Only logged In user can enter these routes*/}
                        <Route path="/sack" element={<Sack />} />
                        <Route path="/product/create" element={<ProductCreate />} />
                        <Route path="/product/view/:productId" element={<ProductView />} />
                        <Route path="/product/edit/:productId" element={<ProductEdit />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </div>
        </AuthProvider>
        </>
    )
}

export default App
