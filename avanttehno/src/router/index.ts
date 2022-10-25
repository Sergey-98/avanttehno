import Error from '../pages/Page404/Page404';
import Main from '../pages/MainPage/Main';
// import Contacts from '../pages/Contact/Contacts';

export const routes = [
  { path: '/', component: Main, exact: true },
  // { path: '/contacts', component: Contacts, exact: true },
  { path: '*', component: Error, exact: true },
];
