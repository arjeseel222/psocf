import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSeatSelector from './MovieSeatSelector';
import PaymentPage from './PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSeatSelector />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
