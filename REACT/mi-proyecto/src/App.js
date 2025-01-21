import React from 'react';
// App.js y Navbar.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Somos from './pages/Somos';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;