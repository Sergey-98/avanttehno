import React, { useReducer } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Context } from './Context/Context';
import { reducer } from 'components/reducer/reducer';

function App() {
  const initialState = { isOpenRequisites: false, value: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
