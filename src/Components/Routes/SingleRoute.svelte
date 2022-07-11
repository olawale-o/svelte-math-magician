<script>
  import { Route } from 'svelte-navigator';
  export let component;
  let props;
  $: {
    const {component, ...restProps } = $$props;
    props = restProps;
  }
</script>

<Route {...props}>
  <svelte:component this={component} />
</Route>