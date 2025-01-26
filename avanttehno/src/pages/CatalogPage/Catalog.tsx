import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainPhoto from 'components/mainComponents/mainPhoto/mainPhoto';
import classes from './Catalog.module.css';
import CatalogMainCards from 'components/catalogComponents/CatalogMainCards/CatalogMainCards';

export default function Catalog() {
  useEffect(() => {
    document.title = 'Каталог погрузчиков | Avant-Техно';
  }, []);
  return (
    <main className={classes.main__catalog_wrapper}>
      <Helmet>
        <meta
          name="keywords"
          content="аванттехно, авант техно каталог, аванттехно каталог, каталог JAC, JAC погрузчики, погрузчики JAC, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчики JAC каталог, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC"
        />
        <meta
          name="description"
          content='Каталог - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      {/* <MainPhoto /> */}
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>Каталог</h2>
      </div>
      <CatalogMainCards />
    </main>
  );
}
