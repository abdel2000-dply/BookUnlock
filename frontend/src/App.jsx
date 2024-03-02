// Desc: Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';

// Importing the CSS file
import './assets/Styles/Header.css';
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
      </Routes>
    </Router>
  );
}

export default App;