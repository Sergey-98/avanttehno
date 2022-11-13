import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about__company_wrapper}>
      <span className={styles.about__company_textwrapper}>
        <h1 className={styles.about__company_title}>О компании</h1>
        <span className={styles.about__company_text}>
          Наша компания 10 лет занимается поставками складской техники по России, а также является
          официальным дистрибьюером крупнейшего производителя JAC.
        </span>
        <span className={styles.about__company_text}>
          Наша стратегия - продажа современой техники, отвечающей мировым стандартам качества. Мы
          предлагаем заказчикам комплексное решение технических задач на основе применения в работе
          современной складской техники, способной повысить эффективность работы в десятки раз.
        </span>
        <span className={styles.about__company_text}>
          Кроме того, большим преимуществом нашей компании является рациональная ценовая политика.
          Практика работы нашей компании подтверждает стабильный спрос со стороны многочисленных
          клиентов. Предлагаемая нами продукция складского назначения отличается высоким качеством
          изготовления и самыми современными техническими свойствами.
        </span>
        <span className={styles.about__company_text}></span>
      </span>
    </section>
  );
}
