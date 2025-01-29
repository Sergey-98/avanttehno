import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CatalogMainCards.module.css';
import { getCatalogData } from '../../../API/API';
import { ForkliftCardType } from '../../../types/types';

export default function CatalogMainCards() {
  const navigate = useNavigate();
  const data = getCatalogData();
  const forkliftData = Object.values(data);

  return (
    <section className={classes.main_wrapper}>
      {forkliftData.map((value: ForkliftCardType) => {
        return (
          <div
            key={value.title}
            className={classes.mainCatalog_wrapper}
            onClick={() => {
              navigate(`/catalog/${value.url}`);
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
  );
}
