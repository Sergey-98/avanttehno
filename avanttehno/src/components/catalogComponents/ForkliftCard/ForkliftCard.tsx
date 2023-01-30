import React, { useContext } from 'react';
import classes from './ForkliftCard.module.css';
import { PropsForkliftCardType } from '../../../types/types';
import Button from 'components/UI/button/Button';
import { Context } from '../../../Context/Context';

export default function CatalogCard(props: PropsForkliftCardType) {
  const { state, dispatch, formDispatch } = useContext(Context);
  const changeModal = () => {
    if (state.isOpenModal) {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
      }
    }
    if (formDispatch) {
      formDispatch({ type: 'model', payloadForm: { model: props.cardValue.description?.model } });
    }
  };

  return (
    <section className={classes.mainCatalog_wrapper} onClick={props.onOpenForklift}>
      <h4 className={classes.mainCatalog_title}>{props.cardValue.title}</h4>
      <img src={props.cardValue.img} alt="forkliftCard" className={classes.img} />
      <p className={classes.specifications}>
        {props.cardValue.description?.model ||
        props.cardValue.description?.loadCapacity ||
        props.cardValue.description?.engineType ||
        props.cardValue.description?.liftingHeight ||
        props.cardValue.description?.wheelType ? (
          <span>
            <b>
              <i>Характеристики:</i>
            </b>
          </span>
        ) : null}
        {props.cardValue.description?.model ? (
          <span>Модель: {props.cardValue.description?.model}</span>
        ) : null}
        {props.cardValue.description?.loadCapacity ? (
          <span>Грузоподъемность: {props.cardValue.description?.loadCapacity}</span>
        ) : null}
        {props.cardValue.description?.engineType ? (
          <span>Двигатель: {props.cardValue.description?.engineType}</span>
        ) : null}
        {props.cardValue.description?.liftingHeight ? (
          <span>Высота подъёма: {props.cardValue.description?.liftingHeight}</span>
        ) : null}
        {props.cardValue.description?.wheelType ? (
          <span>Тип шин: {props.cardValue.description?.wheelType}</span>
        ) : null}
      </p>
      <Button onClick={changeModal}>Заказать</Button>
    </section>
  );
}
