import React from 'react';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
