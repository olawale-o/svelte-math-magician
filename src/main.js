import App from './App.svelte';
import routes from './routes';

const app = new App({
  target: document.getElementById('app'),
    props: {
    routes,
  },
})

export default app
