import React from 'react';
import classes from './ForkliftCards.module.css';
import { getCatalogData } from '../../../API/API';
import ForkliftCard from '../ForkliftCard/ForkliftCard';
import { TypeForForkliftCard } from '../../../types/types';
import { useParams } from 'react-router';

export default function ForkliftCards() {
  const data = getCatalogData();
  // const type = forkliftState.type;
  // const s = data[type as keyof typeof data];
  // const forkliftData = Object.values(s['values' as keyof typeof s]) as TypeForForkliftCard[];
  const { id, name } = useParams();
  const param = id;
  const n = name;
  const result = data.filter((elem) => elem.url == param)[0].elems;
  const forkliftData = result?.filter((elem) => elem.url == n)[0].pages;

  return (
    <section className={classes.mainCatalog_wrapper}>
      {forkliftData?.map((val: TypeForForkliftCard, id: number) => {
        return <ForkliftCard cardValue={val} key={id} />;
      })}
    </section>
  );
}
