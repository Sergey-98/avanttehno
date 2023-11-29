import React from 'react';
import { Helmet } from 'react-helmet';
import classes from './ContactsPage.module.css';
import MapBlock from '../../components/contactsComponents/MapBlock/MapBlock';
import Information from 'components/contactsComponents/Information/Information';

export default function ContactsPage() {
  return (
    <main className={classes.main__contacts__container}>
      <Helmet>
        <title>Контакты | Avant-Техно</title>
        <meta
          name="keywords"
          content='аванттехно контакты, авант техно контакты, AvantTehno контакты, ООО"Авант Техно" контакты, ООО"Avant Техно" погрузчики в Саратове, JAC контакты, погрузчики JAC, джак, погрузчики контакты, официальный дилер JAC в Саратове, Бирюзова 22 контакты, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
        />
        <meta
          name="description"
          content='Контакты - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      <section className={classes.contacts__container}>
        <MapBlock />
        <Information />
      </section>
    </main>
  );
}
