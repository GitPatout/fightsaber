import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from './components/acceuil/acceuil';
import Information from './components/information/information';
import Membres from './components/membre/membre';
import Histoire from './components/histoire/histoire';
import Contact from './components/contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>


    <Routes>
      <Route path="/" element={<Acceuil />} />
      {/* <Route path="information" element={<Information />} />
      <Route path="membre" element={<Membres />} />
      <Route path="histoire" element={<Histoire />} />
      <Route path="contact" element={<Contact />} /> */}
    </Routes>

    <App />
  </BrowserRouter>
);
