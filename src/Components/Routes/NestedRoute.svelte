<script>
  import { Route } from 'svelte-navigator';
  import SingleRoute from './SingleRoute.svelte';
  export let routes;
  let props;
  $: {
    const {routes, ...restProps } = $$props;
    props = restProps;
  }
</script>

<Route {...props}>
  {#each routes as route}
    <SingleRoute {...route} />
  {/each}
</Route>