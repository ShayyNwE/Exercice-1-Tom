import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './components/productCard';
import ProductGallery from './components/productGallery';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductGallery />} />
        
        <Route path="/product/:productId" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;