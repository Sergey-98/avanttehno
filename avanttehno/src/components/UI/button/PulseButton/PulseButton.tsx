import React from 'react';
import classes from './PulseButton.module.css';
import { Props } from 'types/types';

const PulseButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={classes.pulse_button}>
      <span className={classes.pulse_button__icon}></span>
      <span className={classes.pulse_button__text}>Закажите звонок</span>
      <span className={classes.pulse_button__rings}></span>
      <span className={classes.pulse_button__rings}></span>
      <span className={classes.pulse_button__rings}></span>
    </button>
  );
};

export default PulseButton;
