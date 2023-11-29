import React from 'react';
import { Helmet } from 'react-helmet';
import classes from './AboutCompany.module.css';
import About from '../../components/aboutComponents/About/About';
import Director from '../../components/aboutComponents/Director/Director';
import Features from '../../components/aboutComponents/Features/Features';

export default function AboutCompany() {
  return (
    <main className={classes.main__about__container}>
      <Helmet>
        <title>О Компании | Avant-Техно</title>
        <meta
          name="keywords"
          content='аванттехно, аванттехно о компании, JAC о компании, погрузчики в саратове, погрузчики в Саратове, JAC в Саратове, авант техно о компании, AvantTehno о компании, ООО"Авант Техно" о компании, ООО"Avant Техно" погрузчики в Саратове, погрузчики JAC, джак, погрузчики, официальный дилер JAC в Саратове, Бирюзова 22 о компании, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
        />
        <meta
          name="description"
          content='О Компании - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      <div className={classes.main__about_company}>
        <About />
        <Director />
      </div>
      <Features />
    </main>
  );
}
