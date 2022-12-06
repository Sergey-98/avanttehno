import React from 'react';
import styles from './Contact.module.css';
import { ContactType } from 'types/types';

export default function Contact(props: ContactType) {
  return (
    <section className={styles.contact__container}>
      <img src={props.icon} alt={'icon'} className={styles.contact__img} />
      <h4 className={styles.contact__title}>{props.title}</h4>
      <span className={styles.contact__text}>{props.text}</span>
    </section>
  );
}
