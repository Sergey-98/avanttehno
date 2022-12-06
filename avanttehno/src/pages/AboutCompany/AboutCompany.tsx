import React, { useEffect } from 'react';
import classes from './AboutCompany.module.css';
import About from '../../components/aboutComponents/About/About';
import Director from '../../components/aboutComponents/Director/Director';
import Features from '../../components/aboutComponents/Features/Features';

export default function AboutCompany() {
  useEffect(() => {
    document.title = 'Avant-Техно | О Компании';
  });
  return (
    <main className={classes.main__about__container}>
      <div className={classes.main__about_company}>
        <About />
        <Director />
      </div>
      <Features />
    </main>
  );
}
