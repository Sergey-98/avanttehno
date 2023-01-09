import React, { useContext } from 'react';
import classes from './ForkliftCards.module.css';
import { getCatalogData } from '../../../API/API';
import ForkliftCard from '../ForkliftCard/ForkliftCard';
import { Context } from '../../../Context/Context';
import { TypeForForkliftCard } from '../../../types/types';

export default function ForkliftCards() {
  const { forkliftState } = useContext(Context);
  const data = getCatalogData();
  const type = forkliftState.type;
  const s = data[type as keyof typeof data];
  const forkliftData = Object.values(s['values' as keyof typeof s]) as TypeForForkliftCard[];

  return (
    <section className={classes.mainCatalog_wrapper}>
      {forkliftData.map((val: TypeForForkliftCard, id: number) => {
        return <ForkliftCard cardValue={val} key={id} />;
      })}
    </section>
  );
}
