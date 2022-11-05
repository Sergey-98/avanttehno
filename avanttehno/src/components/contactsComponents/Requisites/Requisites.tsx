import React from 'react';
import classes from './Requisites.module.css';

export default function Requisites() {
  return (
    <div className={classes.information__requisites}>
      <h3 className={classes.information__requisites__title}>Информация для оплаты:</h3>
      <span className={classes.requisit}>ИНН: 6452105360</span>
      <span className={classes.requisit}>КПП: 645201001</span>
      <span className={classes.requisit}>ОГРН: 1136450011543</span>
      <span className={classes.requisit}>ОКПО: 24406505</span>
      <span className={classes.requisit}>ОКАТО: 63401372000</span>
      <span className={classes.requisit}>Расчетный счёт: 40702.810.4.56000016494</span>
      <span className={classes.requisit}>БИК: 043601607</span>
      <span className={classes.requisit}>Корр. счёт: 30101.810.2.00000000607</span>
    </div>
  );
}
