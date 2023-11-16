import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Products />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
