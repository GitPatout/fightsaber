import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/navbar';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from './components/acceuil/acceuil'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Navbar />

    <Routes>
    <Route path="/" element={<Acceuil />} />
    </Routes>

  </BrowserRouter>
);

