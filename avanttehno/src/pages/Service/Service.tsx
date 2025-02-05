import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classes from './Service.module.css';

export default function Service() {
  useEffect(() => {
    document.title = 'Сервис | Avant-Техно';
  }, []);
  return (
    <main className={classes.main__service__container}>
      <Helmet>
        <meta
          name="keywords"
          content='аванттехно, аванттехно о компании, JAC о компании, погрузчики в саратове, погрузчики в Саратове, JAC в Саратове, авант техно о компании, AvantTehno о компании, ООО"Авант Техно" о компании, ООО"Avant Техно" погрузчики в Саратове, погрузчики JAC, джак, погрузчики, официальный дилер JAC в Саратове, Бирюзова 27 о компании, погрузчик JAC, вилочный погрузчик, вилочный погрузчик саратов, вилочный погрузчик JAC'
        />
        <meta
          name="description"
          content='Сервис - ООО"AvantTehno" - официальный дилер погрузчиков JAC.'
        />
      </Helmet>
      <div className={classes.service__company_wrapper}>
        <div className={classes.service__company_textwrapper}>
          <div className={classes.service__company_title}>
            <h2 className={classes.main__title}>Запчасти</h2>
          </div>
          <span className={classes.service__company_text}>
            Наша Компания, являясь официальным дилером GOODSENSE, JAC, SHANN, и использует в работе
            и предлагает своим клиентам только оригинальные запасные части и рекомендованные
            производителями расходные материалы. На нашем складе всегда в наличии колеса ,
            расходники , смазывающие жидкости а так же полный перечень запчастей необходимый для
            обслуживания и ремонта спецтехники.
          </span>
          <span className={classes.service__company_text}>
            Использование оригинальных запасных частей является залогом долгой службы и высокой
            производительности, эксплуатируемой вами, техники.
          </span>
          <span className={classes.service__company_text}>
            Благодаря всестороннему контролю качества, запчасти к автопогрузчикам,
            электропогрузчикам, и другой складской технике отвечают самым высоким стандартам
            качества, в отличие от второсортных подделок, выполненных из дешевых материалов.
          </span>
          <span className={classes.service__company_text}>
            Низкое качество подделок оказывает существенное влияние на срок службы техники,
            функциональность и безопасность эксплуатации.
          </span>
          <span className={classes.service__company_text}></span>
        </div>
        <div className={classes.service__company_textwrapper}>
          <div className={classes.service__company_title}>
            <h2 className={classes.main__title}>Техническое обслуживание</h2>
          </div>
          <span className={classes.service__company_text}>
            Не секрет, что даже самое качественное оборудование, требует грамотного ухода и
            квалифицированного технического обслуживания.
          </span>
          <span className={classes.service__company_text}>
            <div className={classes.service__company_title}>
              <h3 className={classes.option__title}>Наши преимущества:</h3>
            </div>

            <ul className={classes.option__advantages}>
              <li>облуживание любой спецтехники</li>
              <li>оперативный выезд сервисной бригады на место эксплуатации техники</li>
              <li>контрольно - диагностические работы</li>
              <li>регулировка и плановая замена деталей и расходных материалов</li>
              <li>
                выезд по любому запросу, связанному с оказанием сервисных услуг, в течение 24 часов
              </li>
              <li>
                за вами будет закреплена персональная бригада сервисных инженеров , готовых всегда
                вам помочь
              </li>
              <li>двойной контроль качества выполнения работ</li>
              <li>фиксированная стоимость</li>
              <li>дополнительная скидка на расходные материалы</li>
              <li>ремонт любой сложности</li>
              <li>использование передового оборудования для диагностики и оборудования</li>
            </ul>
          </span>
          <span className={classes.service__company_text}></span>
        </div>
      </div>
    </main>
  );
}
