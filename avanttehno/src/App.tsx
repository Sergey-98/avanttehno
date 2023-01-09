import React, { useReducer, useState } from 'react';
import './styles/App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Context } from './Context/Context';
import { reducer, formReducer, forkliftReducer } from 'reducer/reducer';
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
  const initialForkliftType = {
    type: String(localStorage.getItem('typeForklift')),
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [isBurger, setIsBurger] = useState(false);
  const [catalogTitle, setCatalogTitle] = useState(String(localStorage.getItem('catalogTitle')));
  const [forkliftState, forkliftDispatch] = useReducer(forkliftReducer, initialForkliftType);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        formState,
        formDispatch,
        isBurger,
        setIsBurger,
        catalogTitle,
        setCatalogTitle,
        forkliftState,
        forkliftDispatch,
      }}
    >
      <div className="App">
        <HashRouter>
          <Header />
          <AppRouter />
          <Footer />
          {state.isOpenModal ? <Modal /> : null}
        </HashRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
