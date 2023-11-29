import Error from '../pages/Page404/Page404';
import Main from '../pages/Main/Main';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import AboutCompany from '../pages/AboutCompany/AboutCompany';
import Catalog from 'pages/CatalogPage/Catalog';
import ForkliftsCatalog from 'components/catalogComponents/ForkliftsCatalog/ForkliftsCatalog';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '/contacts', component: ContactsPage, exact: true },
  { path: '/about', component: AboutCompany, exact: true },
  { path: '/catalog', component: Catalog, exact: true },
  { path: '/catalog/:type', component: ForkliftsCatalog, exact: true },
  { path: '*', component: Error, exact: true },
];
