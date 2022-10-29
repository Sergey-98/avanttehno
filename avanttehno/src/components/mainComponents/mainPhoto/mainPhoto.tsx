import React from 'react';
import photo from '../../../assets/img/main-photo-2.png';
import styles from './mainPhoto.module.css';

export default function MainPhoto() {
  return (
    <section className={styles.main_photo_section}>
      <h1 className={styles.main_title}>Погрузчики от официального дилера JAC в Саратове</h1>
      <img src={photo} alt="" className={styles.main_photo} />
    </section>
  );
}
