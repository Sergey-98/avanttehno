import React, { useEffect } from 'react';
import classes from './Catalog.module.css';
import CatalogCards from '../../components/catalogComponents/CatalogCards/CatalogCards';

export default function Catalog() {
  useEffect(() => {
    document.title = 'Avant-Техно | Каталог';
  });
  return (
    <main className={classes.main__catalog_wrapper}>
      <div className={classes.main__title_wrapper}>
        <h2 className={classes.main__catalog_title}>Каталог</h2>
      </div>
      <CatalogCards />
    </main>
  );
}
