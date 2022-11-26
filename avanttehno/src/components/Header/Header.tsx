import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Button from '../UI/button/Button';
import logo from '../../assets/logo.svg';
import { Context } from '../../Context/Context';
import Hamburger from '../../components/Hamburger/Hamburger';

export default function Header() {
  const { isBurger, state, dispatch } = useContext(Context);
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
          <NavLink className="navbar__link" to="/">
            Главная
          </NavLink>
          <NavLink className="navbar__link" to="/about">
            О компании
          </NavLink>
          <NavLink className="navbar__link" to="/contacts">
            Контакты
          </NavLink>
        </div>
      </nav>
      <Button onClick={changeModal}>Оставить заявку</Button>
      <Hamburger />
    </header>
  );
}
