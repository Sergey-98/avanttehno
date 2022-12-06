import React, { useEffect } from 'react';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import MainAbout from 'components/mainComponents/About/MainAbout';
import Partners from 'components/mainComponents/partners/partners';
import Advantages from 'components/mainComponents/advantages/advantages';
import classes from './Main.module.css';

export default function Main() {
  useEffect(() => {
    document.title = 'Avant-Техно | Главная';
  });
  return (
    <main className={classes.main__container}>
      <MainPhoto />
      <MainAbout />
      <Partners />
      <Advantages />
    </main>
  );
}
