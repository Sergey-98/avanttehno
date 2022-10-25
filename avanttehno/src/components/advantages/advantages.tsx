import React from 'react';
import styles from './advantages.module.css';

export default function Advantages() {
  return (
    <section className={styles.advantages_section}>
      <h2 className={styles.advantages_title}>Преимущества</h2>
      <section className={styles.advantages_section}>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Компания JAC</h4>
          <p className={styles.advantages_section_block_text}>
            Официальный поставщик техники мирового уровня. Использование складской техники фирмы JAC
            облегчает поиск запчастей и комплектующих для ремонта и обслуживания
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Забота о клиентах</h4>
          <p className={styles.advantages_section_block_text}>
            Оперативная обратная связь с клиентом по возникающим вопросам в ходе эксплуатации
            техники.
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>100000 запчастей</h4>
          <p className={styles.advantages_section_block_text}>
            Наличие запчастей для техники на складе и под заказ от производителя.
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Расширенная гарантия</h4>
          <p className={styles.advantages_section_block_text}>
            Надежные погрузчики с гарантией 5 лет или 5000 моточасов.
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Ремонт и сервис</h4>
          <p className={styles.advantages_section_block_text}>
            Компания AvantTehno предлагает квалифицированные услуги по обслуживанию и ремонту
            погрузчиков и другой спецтехники.
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Trade-in</h4>
          <p className={styles.advantages_section_block_text}>
            Вы можете выгодно обменять ваш старый погрузчик JAC в счет оплаты нового.
          </p>
        </div>
        <div className={styles.advantages_section_block}>
          <h4 className={styles.advantages_section_block_title}>Помощь в освоении техники</h4>
          <p className={styles.advantages_section_block_text}>
            Мы обучим вашего оператора работе на машине и дадим понятные инструкции по эксплуатации.
          </p>
        </div>
      </section>
    </section>
  );
}
