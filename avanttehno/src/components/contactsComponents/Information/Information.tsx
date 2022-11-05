import React, { useContext } from 'react';
import classes from './Information.module.css';
import Requisites from '../Requisites/Requisites';
import { Context } from '../../../Context/Context';

export default function Information() {
  const { state, dispatch } = useContext(Context);
  const changeOpenRequisites = () => {
    if (!state.isOpenRequisites) {
      dispatch({ type: 'resetRequisites', payload: { isOpenRequisites: true } });
    } else {
      dispatch({ type: 'resetRequisites', payload: { isOpenRequisites: false } });
    }
  };

  return (
    <section className={classes.information__container}>
      <div className={classes.information__contact__container}>
        <span className={classes.information__contact}>
          Юридический адрес: 410010, г.Саратов, ул.Бирюзова 22
        </span>
        <span className={classes.information__contact}>
          Контактный телефон: (8452)42-00-11, 55-67-15
        </span>
        <span className={classes.information__contact}>e-mail: avanttehno@avanttehno.ru</span>
      </div>
      <button className={classes.information__show_requisites} onClick={changeOpenRequisites}>
        {!state.isOpenRequisites ? 'Показать реквизиты для оплаты' : 'Скрыть реквизиты для оплаты'}
      </button>
      {state.isOpenRequisites ? <Requisites /> : ''}
    </section>
  );
}
