import React, { useContext } from 'react';
import styles from './Modal.module.css';
import { Context } from '../../Context/Context';
import Button from 'components/UI/button/Button';

export default function Modal() {
  const { formState, formDispatch, state, dispatch } = useContext(Context);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'name', payloadForm: { name: event.target.value } });
    }
  };
  const inputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'phoneNumber', payloadForm: { phoneNumber: event.target.value } });
    }
  };
  const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'email', payloadForm: { email: event.target.value } });
    }
  };
  const inputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'message', payloadForm: { message: event.target.value } });
    }
  };
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
  };

  return (
    <section className={styles.modal_container}>
      <span className={styles.modal_close}>
        <Button onClick={changeModal}>Закрыть</Button>
      </span>
      <form className={styles.modal_container__form} onSubmit={sendEmail}>
        <label>
          <input
            className={styles.input__text}
            value={formState.name}
            name="user_name"
            placeholder={'Имя'}
            autoComplete="nope"
            type={'text'}
            onChange={inputText}
          />
          <span className={formState.errorName ? 'error-text' : 'none'}>{formState.errorName}</span>
        </label>
        <label>
          <input
            className={styles.input__text}
            value={formState.phoneNumber}
            placeholder={'Номер телефона'}
            autoComplete="nope"
            type={'tel'}
            onChange={inputNumber}
          />
          <span className={formState.errorNumber ? 'error-text' : 'none'}>
            {formState.errorNumber}
          </span>
        </label>
        <label>
          <input
            className={styles.input__text}
            value={formState.email}
            name="user_email"
            placeholder={'e-mail'}
            autoComplete="off"
            type={'email'}
            onChange={inputEmail}
          />
          <span className={formState.errorEmail ? 'error-text' : 'none'}>
            {formState.errorEmail}
          </span>
        </label>
        <label>
          <input
            className={styles.input__text}
            value={formState.message}
            name="user_message"
            placeholder={'Ваше сообщение'}
            autoComplete="nope"
            type={'text'}
            onChange={inputMessage}
          />
          <span className={formState.errorMessage ? 'error-text' : 'none'}>
            {formState.errorMessage}
          </span>
        </label>
        <input className={styles.input__submit} value={'Отправить'} type={'submit'} />
      </form>
    </section>
  );
}
