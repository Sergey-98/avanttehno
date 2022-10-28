import React from 'react';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import AboutCompany from 'components/mainComponents/AboutCompany/aboutCompany';
import Partners from 'components/mainComponents/partners/partners';
import Advantages from 'components/advantages/advantages';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Main() {
  return (
    <main>
      <Header />
      <MainPhoto />
      <AboutCompany />
      <Partners />
      <Advantages />
      <Footer />
    </main>
  );
}
