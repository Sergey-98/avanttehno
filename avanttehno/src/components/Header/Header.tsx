import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Button from '../UI/button/Button';
import logo from '../../assets/logo.svg';
import { Context } from '../../Context/Context';
import Hamburger from '../../components/Hamburger/Hamburger';
import PulseButton from 'components/UI/button/PulseButton/PulseButton';

export default function Header() {
  const { isBurger, setIsBurger, state, dispatch } = useContext(Context);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  const changeModal = () => {
    if (state.isOpenModal) {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
      }
    }
  };
  const changeModalCallback = () => {
    if (state.isOpenModalCallback) {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
      }
    }
  };
  const changeBurger = () => {
    if (isBurger) {
      setIsBurger(false);
    }
  };
  // const openCallBack = () => {};
  // setTimeout(openCallBack, 7000);
  return (
    <header className="header">
      <NavLink className="header__logo_wrapper" to="/">
        <img
          src={logo}
          alt=""
          className="header__logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </NavLink>
      <nav className={isBurger ? 'navbar active' : 'navbar'}>
        <div className="navbar__links">
          <NavLink onClick={changeBurger} className="navbar__link" to="/">
            Главная
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/catalog">
            Каталог
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/about">
            О компании
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/contacts">
            Контакты
          </NavLink>
        </div>
      </nav>
      <Button onClick={changeModal}>Оставить заявку</Button>
      <Hamburger />
      <PulseButton onClick={changeModalCallback} />
    </header>
  );
}
