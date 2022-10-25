import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
