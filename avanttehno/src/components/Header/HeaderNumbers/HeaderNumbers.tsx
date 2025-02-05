import React from 'react';
import classes from './HeaderNumbers.module.css';
import watsapp from '../../../assets/icons/watsapp.png';
import vk from '../../../assets/icons/vk.png';

export default function HeaderNumbers() {
  return (
    <div className={classes.header__numbers}>
      <span className={classes.header__numbers__text}>
        <a className={classes.header__number} href="tel:+79518864503">
          +7(951)886-45-03
        </a>
        <a href="https://wa.me/79518864503" target="_blank" rel="noreferrer">
          <img src={watsapp} alt="watsapp" className={classes.header__icon} />
        </a>
        <a href="https://vk.me/cpx_co" target="_blank" rel="noreferrer">
          <img src={vk} alt="vk" className={classes.header__icon} />
        </a>
      </span>
      <span className={classes.header__numbers__text}>
        <a className={classes.header__number} href="tel:+79372585005">
          +7(937)258-50-05
        </a>
        <a href="https://wa.me/79372585005" target="_blank" rel="noreferrer">
          <img src={watsapp} alt="watsapp" className={classes.header__icon} />
        </a>
        <a href="https://vk.me/id445486432" target="_blank" rel="noreferrer">
          <img src={vk} alt="vk" className={classes.header__icon} />
        </a>
      </span>
      <span className={classes.header__numbers__textlink}>Вам перезвонить?</span>
    </div>
  );
}
