import React from 'react';
import classes from './Director.module.css';

export default function Director() {
  return (
    <section className={classes.contacts__director}>
      <h3 className={classes.director__title}>Руководство компании ООО «AvantТехно»</h3>
      <div className={classes.director__container}>
        <img alt="Director" className={classes.director__img} />
        <span className={classes.director__container}>Христов Олег Вячеславович</span>
      </div>
    </section>
  );
}
