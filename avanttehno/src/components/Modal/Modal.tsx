import React, { useContext, useRef } from 'react';
import styles from './Modal.module.css';
import { Context } from '../../Context/Context';
import Close from 'components/UI/button/Close';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export default function Modal() {
  const { formState, formDispatch, state, dispatch } = useContext(Context);
  const form = useRef<HTMLFormElement>(null);

  // login: avanttehnooleg@yandex.ru
  // password: aeiaevczrxesxtwb

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_ksceqzu', 'template_8d5afbm', form.current, 'a16Nmw3f7CqETrIRS')
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire('Good job!', 'Ваша заявка успешно отправлена', 'success');
            resetForm();
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Сервис временно недоступен. Попробуйте повторить запрос через несколько минут',
            });
          }
        );
    }
  };

  const resetForm = () => {
    if (formDispatch) {
      form.current?.reset();
      formDispatch({ type: 'name', payloadForm: { name: '' } });
      formDispatch({ type: 'phoneNumber', payloadForm: { phoneNumber: '' } });
      formDispatch({ type: 'email', payloadForm: { email: '' } });
      formDispatch({ type: 'message', payloadForm: { message: '' } });
      dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
    }
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
        <Close onClick={changeModal}></Close>
      </span>
      <form className={styles.modal_container__form} onSubmit={sendEmail} ref={form}>
        <label>
          <input
            className={styles.input__text}
            value={formState.name}
            name="name"
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
            name="phone"
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
            name="email"
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
            name="message"
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
