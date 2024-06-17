// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import COT from './pages/COT';
import Retail from './pages/Retail';
import Inflation from './pages/indicators/Inflation';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cot" element={<COT />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/indicators/inflation" element={<Inflation />} />
      </Routes>
    </Router>
  );
};

export default App;

