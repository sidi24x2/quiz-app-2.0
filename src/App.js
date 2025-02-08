import React from 'react';
import './stylesheets/style.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
