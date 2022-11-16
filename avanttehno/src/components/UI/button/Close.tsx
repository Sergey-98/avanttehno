import React from 'react';
import classes from './Button.module.css';
import { Props } from 'types/types';

const Close = (props: Props) => {
  return (
    <button onClick={props.onClick} className={classes.cl_btn_2}>
      <div>
        <div className={classes.leftright}></div>
        <div className={classes.rightleft}></div>
      </div>
    </button>
  );
};

export default Close;
