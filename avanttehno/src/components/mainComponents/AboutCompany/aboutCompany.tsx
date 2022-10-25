import React from 'react';
import styles from './aboutCompany.module.css';

export default function AboutCompany() {
  return (
    <section className={styles.about__company_section}>
      <h2 className={styles.about__header}>О компании</h2>
      <img src="" alt="" className={styles.about_photo} />
      <span className={styles.about__textblock}>
        <h3>Поставщик погрузчиков JAC в России</h3>
        <p className={styles.about__textblock_description}>
          ООО &quot;АвантТехно&quot; - официальный дилер по продаже складской техники фирмы JAC по
          Российской Федерации с 2013 года.
        </p>
        <p className={styles.about__textblock_description}>
          JAC – корпорация государственная, поэтому здесь проводится серьезный госконтроль качества
          сборки. Особенные требования предъявляются к поставщикам деталей, качественным показателям
          двигателей, сплавов и гидравлики. При изготовлении складского оборудования применяются
          комплектующие и технологии известных японских компаний.
        </p>
        <p className={styles.about__textblock_description}>
          Мы предлагаем качественную технику по низким ценам. Отгрузка осуществляеися в любой регион
          РФ в минимальные сроки. JAC погрузчики – искусство транспортировки груза.
        </p>
        <p className={styles.about__textblock_description}>
          Девизом нашей компании является &quot;Высокая производительность и комплексное
          обслуживание&quot;. Работа ради клиентов с нашей стороны позволяет получать лишь самую
          качественную технику, которая адаптирована к Российским условиям эксплуатации.
        </p>
      </span>
    </section>
  );
}
