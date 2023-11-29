import React, { useReducer, useState } from 'react';
import { Parser } from 'html-to-react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
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

  const rawHTML = `
  <script type="text/javascript">
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      ym(91277534, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    </script>
    <noscript
      ><div>
        <img
          src="https://mc.yandex.ru/watch/91277534"
          style="position: absolute; left: -9999px"
          alt=""
        /></div
    ></noscript>`;
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
      {/* <body className="App"> */}
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
        {state.isOpenModal ? <Modal /> : null}
        {state.isOpenModalCallback ? <ModalCallback /> : null}
      </BrowserRouter>
      {Parser().parse(rawHTML)}
      {/* </body> */}
    </Context.Provider>
  );
}

export default App;
