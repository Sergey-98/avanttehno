import React, { useContext } from 'react';
import classes from './Information.module.css';
import Requisites from '../Requisites/Requisites';
import { Context } from '../../../Context/Context';
import info_location from '../../../assets/icons/info_location.svg';
import info_clock from '../../../assets/icons/info_clock.svg';
import info_phone from '../../../assets/icons/info_phone.svg';
import info_mail from '../../../assets/icons/info_mail.svg';
import InfoComponent from './InfoComponent/InfoComponent';
import GuideContact from './GuideContact/GuideContact';

export default function Information() {
  const { state, dispatch } = useContext(Context);
  const changeOpenRequisites = () => {
    if (!state.isOpenRequisites) {
      dispatch({ type: 'resetRequisites', payload: { isOpenRequisites: true } });
    } else {
      dispatch({ type: 'resetRequisites', payload: { isOpenRequisites: false } });
    }
  };

  const infoIcons = [info_location, info_clock, info_mail, info_phone];
  const infoTitles = [
    'Юридический адрес:',
    'Время работы офиса:',
    'Электронная почта:',
    'Контактный телефон:',
  ];
  const infoTexts = [
    '410010, г. Саратов, ул.Бирюзова 22',
    'пн-пт с 9.00 до 17.00. Сб, вс выходной',
    'avanttehno@yandex.ru',
    '(8452) 42-00-11, 55-67-15',
  ];

  return (
    <section className={classes.information__container}>
      <div className={classes.information__contacts_container}>
        {infoIcons.map((elem, index) => {
          return (
            <InfoComponent
              src={elem}
              title={infoTitles[index]}
              text={infoTexts[index]}
              key={elem}
            />
          );
        })}
        <GuideContact />
      </div>
      <button className={classes.information__btn_show_requisites} onClick={changeOpenRequisites}>
        {!state.isOpenRequisites ? 'Показать реквизиты для оплаты' : 'Скрыть реквизиты для оплаты'}
      </button>
      {state.isOpenRequisites ? <Requisites /> : ''}
    </section>
  );
}
