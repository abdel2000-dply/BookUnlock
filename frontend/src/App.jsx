// Desc: Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import Book from './pages/Book';

// Importing the CSS file
import './assets/Styles/Header.css';
import './assets/Styles/Footer.css';
import './index.css';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/explore' element={<Explore />} />
  
        <Route path="/books/:id" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;