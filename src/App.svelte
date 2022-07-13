<script>
  import { Router } from 'svelte-navigator';
  import Header from './Components/Header/Index.svelte';
  import SingleRoute from './Components/Routes/SingleRoute.svelte';
  import NestedRoute from './Components/Routes/NestedRoute.svelte';
  export let routes;
</script>

<Router>
  <Header />
  <div id="app">
    {#each routes as route}
      {#if route.routes}
        <NestedRoute {...route} />
      {:else}
        <SingleRoute {...route} />
      {/if}
    {/each}
  </div>
</Router>

<style>
</style>
