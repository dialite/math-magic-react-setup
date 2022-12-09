import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

const calculatorContainer = ReactDOM.createRoot(
  document.getElementById('calculator-container'),
);

calculatorContainer.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
);
