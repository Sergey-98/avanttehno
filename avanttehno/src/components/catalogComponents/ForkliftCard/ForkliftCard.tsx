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
        props.cardValue.description?.wheelType ||
        props.cardValue.description?.longType ? (
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
          <span>Грузоподъемность, кг: {props.cardValue.description?.loadCapacity}</span>
        ) : null}
        {props.cardValue.description?.longType ? (
          <span>Длина: {props.cardValue.description?.longType}</span>
        ) : null}
        {props.cardValue.description?.engineType ? (
          <span>Двигатель: {props.cardValue.description?.engineType}</span>
        ) : null}
        {props.cardValue.description?.liftingHeight ? (
          <span>Высота подъёма: {props.cardValue.description?.liftingHeight}</span>
        ) : null}
        {props.cardValue.description?.batteryCapacity ? (
          <span>Ёмкость АКБ: {props.cardValue.description?.batteryCapacity}</span>
        ) : null}
        {props.cardValue.description?.wheelType ? (
          <span>Тип шин: {props.cardValue.description?.wheelType}</span>
        ) : null}
        {props.cardValue.description?.operatingWeight ? (
          <span>Эксплуатационная масса, кг: {props.cardValue.description?.operatingWeight}</span>
        ) : null}
        {props.cardValue.description?.bucketVolume ? (
          <span>Объем ковша, м3: {props.cardValue.description?.bucketVolume}</span>
        ) : null}
        {props.cardValue.description?.enginePower ? (
          <span>Мощность двигателя, кВт(л.с.): {props.cardValue.description?.enginePower}</span>
        ) : null}
        {props.cardValue.description?.bladeWidth ? (
          <span>Ширина отвала: {props.cardValue.description?.bladeWidth}</span>
        ) : null}
        {props.cardValue.description?.bladeHeight ? (
          <span>Высота отвала: {props.cardValue.description?.bladeHeight}</span>
        ) : null}
        {props.cardValue.description?.loaderBucketCapacity ? (
          <span>
            Объем ковша погрузчика, м3: {props.cardValue.description?.loaderBucketCapacity}
          </span>
        ) : null}
        {props.cardValue.description?.loaderExcavatorCapacity ? (
          <span>
            Объем экскаваторного ковша, м3: {props.cardValue.description?.loaderExcavatorCapacity}
          </span>
        ) : null}
        {props.cardValue.description?.typeManagment ? (
          <span>Тип управления: {props.cardValue.description?.typeManagment}</span>
        ) : null}
        {props.cardValue.description?.rollerWeight ? (
          <span>Масса вальца, кг: {props.cardValue.description?.rollerWeight}</span>
        ) : null}
        {props.cardValue.description?.rollerDiameter ? (
          <span>Диметр вальца, мм: {props.cardValue.description?.rollerDiameter}</span>
        ) : null}
        {props.cardValue.description?.operatingWeight2 ? (
          <span>Эксплуатационный вес, кг: {props.cardValue.description?.operatingWeight2}</span>
        ) : null}
        {props.cardValue.description?.diggingDepth ? (
          <span>Глубина копания, мм: {props.cardValue.description?.diggingDepth}</span>
        ) : null}
      </p>
      <Button onClick={changeModal}>Заказать</Button>
    </section>
  );
}
