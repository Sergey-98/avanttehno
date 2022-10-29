import React, { useEffect } from 'react';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import AboutCompany from 'components/mainComponents/AboutCompany/aboutCompany';
import Partners from 'components/mainComponents/partners/partners';
import Advantages from 'components/advantages/advantages';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import classes from './Main.module.css';

export default function Main() {
  useEffect(() => {
    document.title = 'Avant-Техно | Главная';
  });
  return (
    <main className={classes.main__container}>
      <Header />
      <MainPhoto />
      <AboutCompany />
      <Partners />
      <Advantages />
      <Footer />
    </main>
  );
}
