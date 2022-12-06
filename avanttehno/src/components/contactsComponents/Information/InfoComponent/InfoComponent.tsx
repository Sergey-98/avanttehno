import React from 'react';
import classes from './InfoComponent.module.css';
import { InfoProps } from 'types/types';

export default function InfoComponent(props: InfoProps) {
  const { src, title, text } = props;
  return (
    <div className={classes.information__contact_container}>
      <img src={src} width="30px" height="30px" />
      <div className={classes.information__contact}>
        <span className={classes.information__title}>{title}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
