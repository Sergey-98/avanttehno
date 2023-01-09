import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CatalogCards.module.css';
import { getCatalogData } from '../../../API/API';
import CatalogCard from '../CatalogCard/CatalogCard';
import { Context } from '../../../Context/Context';
import { ForkliftCardType } from '../../../types/types';

export default function CatalogCards() {
  const navigate = useNavigate();
  const { forkliftDispatch, setCatalogTitle } = useContext(Context);
  const data = getCatalogData();
  const forkliftTypes = Object.keys(data);
  const forkliftData = Object.values(data);
  const openForkliftType = (forkliftType: string, forkliftD: string) => {
    forkliftDispatch({ type: 'resetType', payload: { type: forkliftType } });
    navigate(`/${forkliftType}`);
    localStorage.setItem('typeForklift', forkliftType);
    localStorage.setItem('catalogTitle', forkliftD);
    setCatalogTitle(forkliftD);
  };

  return (
    <section className={classes.mainCatalog_wrapper}>
      {forkliftData.map((value: ForkliftCardType, id: number) => {
        return (
          <CatalogCard
            onOpenForklift={() => openForkliftType(forkliftTypes[id], forkliftData[id].title)}
            cardValue={value}
            key={id}
          />
        );
      })}
    </section>
  );
}
