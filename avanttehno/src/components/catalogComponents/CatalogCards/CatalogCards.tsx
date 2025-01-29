import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './CatalogCards.module.css';
import { getCatalogData } from '../../../API/API';
// import CatalogCard from '../CatalogCard/CatalogCard';
// import { Context } from '../../../Context/Context';
import { ForkliftCardType } from '../../../types/types';
import { Helmet } from 'react-helmet';

export default function CatalogCards() {
  const navigate = useNavigate();
  const { id } = useParams();
  const param = id;
  const data = getCatalogData();
  const result = data.filter((elem) => elem.url == param)[0].elems;

  useEffect(() => {
    document.title = `${data.filter((elem) => elem.url == param)[0].title} | Avant-Техно`;
  });
  return (
    <main className={classes.main__catalog_wrapper}>
      <Helmet>
        <meta
          name="keywords"
          content="аванттехно, авант техно каталог, аванттехно каталог, каталог JAC, JAC погрузчики, погрузчики JAC, продажа погрузчиков, спецтехника, спец техника в Саратове, погрузчики JAC каталог, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC"
        />
        <meta
          name="description"
          content='Каталог погрузчиков JAC - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>
          {data.filter((elem) => elem.url == param)[0].title}
        </h2>
      </div>
      <section className={classes.main_wrapper}>
        {result?.map((value: ForkliftCardType) => {
          return (
            <div
              key={value.title}
              className={classes.mainCatalog_wrapper}
              onClick={() => {
                navigate(
                  `/catalog/${data.filter((elem) => elem.url == param)[0].url}/${value.url}`
                );
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <h4 className={classes.mainCatalog_title}>{value.title}</h4>
              <img src={value.img} alt={value.title} className={classes.img} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
