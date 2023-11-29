import React from 'react';
import { Helmet } from 'react-helmet';
import classes from './Catalog.module.css';
import CatalogCards from '../../components/catalogComponents/CatalogCards/CatalogCards';

export default function Catalog() {
  return (
    <main className={classes.main__catalog_wrapper}>
      <Helmet>
        <title>Каталог | Avant-Техно</title>
        <meta
          name="keywords"
          content="аванттехно, авант техно каталог, аванттехно каталог, каталог JAC, JAC погрузчики, погрузчики JAC, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчики JAC каталог, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC"
        />
        <meta
          name="description"
          content='Каталог - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>Каталог</h2>
      </div>
      <CatalogCards />
    </main>
  );
}
