import Error from './404.svelte';
import Home from './Home.svelte';
import Quote from './Quote/index.svelte';
import Calculator from './Calculator/index.svelte';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'quote',
    component: Quote,
  },
  {
    path: 'calculator',
    component: Calculator,
  },
  {
    path: '*',
    component: Error,
  }
];

export default routes;
