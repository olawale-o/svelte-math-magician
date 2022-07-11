<script>
  import { useFocus } from 'svelte-navigator';
  const registerFocus = useFocus();
</script>

<div class="quote">
  <p data-testid="quote" use:registerFocus>
    Mathematics is not about numbers, equations, computations
    <br />
    or algorithms: it is about understanding. -William Paul Thurston
  </p>
</div>

<style>
  .quote {
    padding: 15px;
  }

  .quote p {
    font-size: 3.5rem;
    font-weight: light;
    margin: 10rem auto;
    width: 85%;
  }
</style>