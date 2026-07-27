import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// import Button from '../UI/button/Button';
import logo from '../../assets/logo.svg';
import { Context } from '../../Context/Context';
import Hamburger from '../../components/Hamburger/Hamburger';
import PulseButton from 'components/UI/button/PulseButton/PulseButton';
import HeaderNumbers from './HeaderNumbers/HeaderNumbers';

export default function Header() {
  const [links, setLinks] = useState('navbar__sublinks_wrapper');
  const { isBurger, setIsBurger, state, dispatch } = useContext(Context);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (dispatch) {
        dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
      }
    }, 60000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  // const changeModal = () => {
  //   if (state.isOpenModal) {
  //     if (dispatch) {
  //       dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
  //     }
  //   } else {
  //     if (dispatch) {
  //       dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
  //     }
  //   }
  // };
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
  const showSubLinks = () => {
    setLinks('navbar__sublinks_wrapper navbar_sublinks_show');
  };
  const hideSubLinks = () => {
    setLinks('navbar__sublinks_wrapper navbar__sublink');
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
          <NavLink onClick={changeBurger} className="navbar__link_main" to="/">
            Главная
          </NavLink>
          <div className="navbar__link_wrapper">
            <NavLink
              onClick={changeBurger}
              onMouseOver={showSubLinks}
              onMouseOut={hideSubLinks}
              className="navbar__link"
              to="/catalog"
            >
              Каталог
            </NavLink>
            <div onMouseOver={showSubLinks} onMouseOut={hideSubLinks} className={links}>
              <NavLink className="navbar__sublink" to="catalog/XGMA">
                Строительная техника XGMA
              </NavLink>
              <NavLink className="navbar__sublink" to="catalog/goodsense_forklifts">
                Вилочные погрузчики GOODSENSE
              </NavLink>
              <NavLink className="navbar__sublink" to="catalog/jac_forklifts">
                Вилочные погрузчики JAC
              </NavLink>
              <NavLink className="navbar__sublink" to="catalog/shann_forklifts">
                Вилочные погрузчики SHANN
              </NavLink>
              <NavLink className="navbar__sublink" to="catalog/small_equipment">
                Малая складская техника
              </NavLink>
            </div>
          </div>
          <NavLink onClick={changeBurger} className="navbar__link catalog" to="/catalog">
            Каталог
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/service">
            Сервис
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/about">
            О компании
          </NavLink>
          <NavLink onClick={changeBurger} className="navbar__link" to="/contacts">
            Контакты
          </NavLink>
          <HeaderNumbers />
        </div>
      </nav>
      {/* <Button onClick={changeModal}>Оставить заявку</Button> */}
      <Hamburger />
      <PulseButton onClick={changeModalCallback} />
    </header>
  );
}
