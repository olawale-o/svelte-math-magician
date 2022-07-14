<script>
  import { createEventDispatcher } from 'svelte';
  export let cssClass, text;
  const dispatch = createEventDispatcher();

  function handleCalc(e) {
    dispatch('calc', {
      text: e.target.textContent,
    });
  }
</script>

<button type="button" class={cssClass} on:click={handleCalc}>{text}</button>