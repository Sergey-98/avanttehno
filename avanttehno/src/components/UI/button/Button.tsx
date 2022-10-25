import React from 'react';
import classes from './Button.module.css';
import { Props } from 'types/types';
import './Button.module.css';

const Button = (props: Props) => {
  return <button className={classes.btn}>{props.children}</button>;
};

export default Button;
