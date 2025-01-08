import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSeatSelector from './components/MovieSeatSelector';
import PaymentPage from './components/PaymentPage';

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
