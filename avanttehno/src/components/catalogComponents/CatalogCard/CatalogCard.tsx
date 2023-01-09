import React from 'react';
import classes from './CatalogCard.module.css';
import { PropsCardType } from '../../../types/types';

export default function CatalogCard(props: PropsCardType) {
  return (
    <section className={classes.mainCatalog_wrapper} onClick={props.onOpenForklift}>
      <h4 className={classes.mainCatalog_title}>{props.cardValue.title}</h4>
      <img src={props.cardValue.img} alt="forkliftCard" className={classes.img} />
    </section>
  );
}
