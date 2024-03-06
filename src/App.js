import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destination from './components/Destination';
import Blog from './components/Blog';
import ThingsToDo from './components/ThingsToDo';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
        </Routes>
      </Router>{/* Main content of the page */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
