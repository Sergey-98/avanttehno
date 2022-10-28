import React from 'react';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import AboutCompany from 'components/mainComponents/AboutCompany/aboutCompany';
import Partners from 'components/mainComponents/partners/partners';
import Advantages from 'components/advantages/advantages';

export default function Main() {
  return (
    <main>
      <MainPhoto />
      <AboutCompany />
      <Partners />
      <Advantages />
    </main>
  );
}
