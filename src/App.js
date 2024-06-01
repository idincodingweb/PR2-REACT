import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan nama dan path benar
import MainBanner from './components/MainBanner';
import Services from './components/Services';
import Projects from './components/Projects';
import Infos from './components/Infos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './pages/About'; // Import halaman About
import './css/Custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <MainBanner />
              <Services />
              <Projects />
              <Infos />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
