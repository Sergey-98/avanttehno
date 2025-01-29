import React from 'react';
import classes from './HeaderNumbers.module.css';

export default function HeaderNumbers() {
  return (
    <div className={classes.header__numbers}>
      <span className={classes.header__numbers__text}>+7 (927) 056-64-41</span>
      <span className={classes.header__numbers__text}>(8452) 42-00-11</span>
      <span className={classes.header__numbers__textlink}>Вам перезвонить?</span>
    </div>
  );
}
