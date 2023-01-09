import React, { useEffect, useContext } from 'react';
import classes from './ForkliftsCatalog.module.css';
import { Context } from '../../../Context/Context';
import ForkliftCards from '../ForkliftCards/ForkliftCards';

export default function ForkliftsCatalog() {
  const { catalogTitle } = useContext(Context);
  useEffect(() => {
    document.title = 'Avant-Техно | Каталог';
  });
  return (
    <main className={classes.main__catalog_wrapper}>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>{catalogTitle}</h2>
      </div>
      <ForkliftCards />
    </main>
  );
}
