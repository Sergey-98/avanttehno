import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './Page404.module.css';
import errorImg from '../../assets/error-image.jpg';

export default function Error() {
  return (
    <main className={classes.error__contsiner}>
      <Helmet>
        <link rel="canonical" href="https://avanttehno.ru/PageNotFound" />
        <title>404 — Страница не найдена</title>
      </Helmet>
      <div className={classes.error_block}>
        <div className={classes.error_number_wrapper}>
          <div className={classes.error_number}>404</div>
        </div>
        <div className={classes.error_main_block}>
          <h1 className={classes.error_title}>Вы перешли на несуществующую страницу!</h1>
          <p className={classes.error_text_block}>
            Такое иногда случается! Самые вероятные причины - устаревшая ссылка или страница была
            удалена. Перейдите на <Link to="/">главную страницу</Link> и попробуйте начать оттуда.
          </p>
        </div>
      </div>
      <div className={classes.container__img}>
        <img src={errorImg} alt="broken jac" width="400px" height="400px"></img>
      </div>
    </main>
  );
}
