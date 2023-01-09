import React from 'react';
import classes from './ForkliftCard.module.css';
import { PropsForkliftCardType } from '../../../types/types';

export default function CatalogCard(props: PropsForkliftCardType) {
  return (
    <section className={classes.mainCatalog_wrapper} onClick={props.onOpenForklift}>
      <h4 className={classes.mainCatalog_title}>{props.cardValue.title}</h4>
      <img src={props.cardValue.img} alt="forkliftCard" className={classes.img} />
      <p className={classes.specifications}>
        <span>
          <b>
            <i>Характеристики:</i>
          </b>
        </span>
        <span>Модель: {props.cardValue.description?.model}</span>
        <span>Грузоподъемность: {props.cardValue.description?.loadCapacity}</span>
        <span>Двигатель: {props.cardValue.description?.engineType}</span>
        <span>Высота подъёма: {props.cardValue.description?.liftingHeight}</span>
        <span>Тип шин: {props.cardValue.description?.wheelType}</span>
      </p>
    </section>
  );
}
