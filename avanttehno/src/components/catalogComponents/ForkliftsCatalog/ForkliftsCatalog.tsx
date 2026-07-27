import React from 'react';
import { Helmet } from 'react-helmet';
import classes from './ForkliftsCatalog.module.css';
import { getCatalogData } from 'API/API';
import { useParams } from 'react-router';
import { ForkliftCardType } from '../../../types/types';
// import { Context } from '../../../Context/Context';
import ForkliftCards from '../ForkliftCards/ForkliftCards';

export default function ForkliftsCatalog() {
  // const { catalogTitle } = useContext(Context);
  const { id, name } = useParams();
  const param = id;
  const data: ForkliftCardType[] = getCatalogData();
  const catalogTitle = data.filter((elem) => elem.url == param)[0].title;
  let title;
  if (name) {
    title = data
      .filter((elem) => elem.url == param)[0]
      .elems?.filter((elem) => elem.url == name)[0].title;
  }

  return (
    <main className={classes.main__catalog_wrapper}>
      <Helmet>
        <title>{name ? title : catalogTitle} | Avant-Техно</title>
        <meta
          name="keywords"
          content={`JAC погрузчики, погрузчики JAC, ${(name
            ? title
            : catalogTitle
          )?.toLowerCase()}, ${(name ? title : catalogTitle)?.toLowerCase()} в Саратове, ${(name
            ? title
            : catalogTitle
          )?.toLowerCase()} в саратове`}
        />
        <meta
          name="description"
          content={`Каталог (${
            name ? title : catalogTitle
          }) - ООО"AvantTehno" - официальный дилер погрузчиков JAC.`}
        />
      </Helmet>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>{name ? title : catalogTitle}</h2>
      </div>
      <ForkliftCards />
    </main>
  );
}
