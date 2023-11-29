import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import classes from './ForkliftsCatalog.module.css';
import { Context } from '../../../Context/Context';
import ForkliftCards from '../ForkliftCards/ForkliftCards';

export default function ForkliftsCatalog() {
  const { catalogTitle } = useContext(Context);
  return (
    <main className={classes.main__catalog_wrapper}>
      <Helmet>
        <title>{catalogTitle} | Avant-Техно</title>
        <meta
          name="keywords"
          content={`JAC погрузчики, погрузчики JAC, ${catalogTitle.toLowerCase()}, ${catalogTitle.toLowerCase()} в Саратове, ${catalogTitle.toLowerCase()} в саратове`}
        />
        <meta
          name="description"
          content={`Каталог (${catalogTitle}) - ООО"AvantTehno" - официальный дилер погрузчиков JAC.`}
        />
      </Helmet>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>{catalogTitle}</h2>
      </div>
      <ForkliftCards />
    </main>
  );
}
