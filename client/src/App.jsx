import React from 'react';
import { Routes, Route } from "react-router-dom";

import {
    Container,
} from '@mui/material';



import Nav from "./components/Nav";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductView from "./components/ProductView";
import ProductEdit from "./components/ProductEdit";

function App() {
  return (
    <div className="App">
        <Nav />
        <Container className="mb-10">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginUser" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:product_id" element={<ProductView />} />
                <Route path="/product/edit/:product_id" element={<ProductEdit />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    </div>
  )
}

export default App
