import Error from '../pages/Page404/Page404';
import Main from '../pages/Main/Main';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import AboutCompany from '../pages/AboutCompany/AboutCompany';
import Catalog from 'pages/CatalogPage/Catalog';
import ForkliftsCatalog from 'components/catalogComponents/ForkliftsCatalog/ForkliftsCatalog';
import Service from 'pages/Service/Service';
// import CatalogMainCards from 'components/catalogComponents/CatalogMainCards/CatalogMainCards';
import CatalogCards from 'components/catalogComponents/CatalogCards/CatalogCards';

export const routes = [
  { path: '/', component: Main },
  { path: '/contacts', component: ContactsPage },
  { path: '/service', component: Service },
  { path: '/about', component: AboutCompany },
  { path: '/catalog', component: Catalog },
  { path: '/catalog/:id', component: CatalogCards },
  { path: '/catalog/:id/:name', component: ForkliftsCatalog },
  { path: '*', component: Error },
];
