import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Banca from './pages/Banca';
import Strategy from './pages/Strategy';
import Header from './components/Header';
import { BankContextProvider } from './context/BankContext';

function App() {
  return (
    <BankContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'banca'} element={<Banca />} />
          <Route path={'strat'} element={<Strategy />} />
        </Routes>
      </BrowserRouter>
    </BankContextProvider>
  );
}

export default App;
