import React from 'react';
import classes from './Requisites.module.css';

export default function Requisites() {
  return (
    <div className={classes.information__requisites}>
      <h3 className={classes.information__requisites__title}>Информация для оплаты:</h3>
      <div className={classes.requisit}>
        <div className={classes.requisit__title}>
          <span>ИНН:</span>
          <span>КПП:</span>
          <span>ОГРН:</span>
          <span>ОКПО:</span>
          <span>ОКАТО:</span>
          <span>Расчетный счёт:</span>
          <span>БИК:</span>
          <span>Корр. счёт:</span>
        </div>
        <div className={classes.requisit__text}>
          <span className={classes.requisit__text}>6452105360</span>
          <span className={classes.requisit__text}>645201001</span>
          <span className={classes.requisit__text}>1136450011543</span>
          <span className={classes.requisit__text}>24406505</span>
          <span className={classes.requisit__text}>63401372000</span>
          <span className={classes.requisit__text}>40702.810.4.56000016494</span>
          <span className={classes.requisit__text}>043601607</span>
          <span className={classes.requisit__text}>30101.810.2.00000000607</span>
        </div>
      </div>
    </div>
  );
}
