import React, { useEffect } from 'react';
import classes from './ContactsPage.module.css';
import MapBlock from '../../components/contactsComponents/Map/Map';
import Information from 'components/contactsComponents/Information/Information';

export default function ContactsPage() {
  useEffect(() => {
    document.title = 'Avant-Техно | Контакты';
  });
  return (
    <main className={classes.main__contacts__container}>
      <section className={classes.contacts__container}>
        <MapBlock />
        <Information />
      </section>
    </main>
  );
}
