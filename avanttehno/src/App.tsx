import React, { useReducer, useState } from 'react';
import './styles/App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Context } from './Context/Context';
import { reducer, formReducer, forkliftReducer, formCallbackReducer } from 'reducer/reducer';
import Modal from './components/Modal/Modal';
import ModalCallback from 'components/ModalCallback/ModalCallback';

function App() {
  const initialState = { isOpenRequisites: false, isOpenModal: false, isOpenModalCallback: false };
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
  const initialFormCallbackState = {
    name: '',
    phoneNumber: '',
  };
  const initialForkliftType = {
    type: String(localStorage.getItem('typeForklift')),
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [formCallbackState, formCallbackDispatch] = useReducer(
    formCallbackReducer,
    initialFormCallbackState
  );
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
        formCallbackState,
        formCallbackDispatch,
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
          {state.isOpenModalCallback ? <ModalCallback /> : null}
        </HashRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
