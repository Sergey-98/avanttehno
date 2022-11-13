import Error from '../pages/Page404/Page404';
import Main from '../pages/Main/Main';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import AboutCompany from '../pages/AboutCompany/AboutCompany';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '/contacts', component: ContactsPage, exact: true },
  { path: '/about', component: AboutCompany, exact: true },
  { path: '*', component: Error, exact: true },
];
