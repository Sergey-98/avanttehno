import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../UI/button/Button';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt=""
        className={styles.header__logo}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <nav className={styles.navbar}>
        <div className={styles.navbar__links}>
          <NavLink className={styles.navbar__link} to="/">
            Главная
          </NavLink>
          <NavLink className={styles.navbar__link} to="/about">
            О компании
          </NavLink>
          <NavLink className={styles.navbar__link} to="/contacts">
            Контакты
          </NavLink>
        </div>
      </nav>
      <Button>Оставить заявку</Button>
    </header>
  );
}
