import React, { useReducer, useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Context } from './Context/Context';
import { reducer, formReducer } from 'reducer/reducer';
import Modal from './components/Modal/Modal';

function App() {
  const initialState = { isOpenRequisites: false, isOpenModal: false };
  const initialFormState = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    errorName: '',
    errorNumber: '',
    errorEmail: '',
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [isBurger, setIsBurger] = useState(false);

  return (
    <Context.Provider value={{ state, dispatch, formState, formDispatch, isBurger, setIsBurger }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
          {state.isOpenModal ? <Modal /> : null}
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
