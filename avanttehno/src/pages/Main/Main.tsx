import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import MainAbout from 'components/mainComponents/About/MainAbout';
import Partners from 'components/mainComponents/partners/partners';
import Advantages from 'components/mainComponents/advantages/advantages';
import classes from './Main.module.css';

export default function Main() {
  //TODO: При необходимости удалить navigate!!!
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/');
  // }, [navigate]);
  return (
    <main className={classes.main__container}>
      <Helmet>
        <title>Главная | Avant-Техно</title>
        <meta
          name="keywords"
          content='аванттехно, JAC, погрузчики в саратове, погрузчики в Саратове, JAC в Саратове, вилочные погрузчики jac, авант техно, AvantTehno, ООО"Авант Техно", ООО"Avant Техно" погрузчики в Саратове, погрузчики JAC, джак, погрузчики, официальный дилер JAC в Саратове, Бирюзова 22, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
        />
        <meta
          name="description"
          content='ООО"AvantTehno" - официальный дилер вилочных погрузчиков JAC. Прямые поставки из Китая погрузчиков фирмы JAC. Гарантия ⑤ лет! ✓ В наличии на складе! Быстрая доставка по России ⛟. тел: ☎'
        />
      </Helmet>
      <MainPhoto />
      <MainAbout />
      <Partners />
      <Advantages />
    </main>
  );
}
