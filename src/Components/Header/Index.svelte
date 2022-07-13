<script>
  import { Link } from 'svelte-navigator';
  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      link: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      link: '/quote',
    },
  ];
</script>

<header class="header">
  <nav class="nav">
    <div class="logo">
      <a href="/#">Math Magicians</a>
    </div>
    <ul class="nav-list">
      {#each links as { id, name, link } (id)}
        <li class="nav-item">
          <Link to={link} role="button" class="nav-link">{name}</Link>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .header {
    padding: 5px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto 5px;
    align-items: center;
  }

  .logo {
    flex: 1;
  }

  .logo a {
    font-size: 30px;
    color: #000;
  }

  .nav-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 2;
  }

  .nav-item {
    border-right: 2px solid #000;
    padding: 0 1.5rem;
    text-align: center;
  }

  .nav-item:last-child {
    border: none;
  }

  :global(.nav-link) {
    display: block;
    text-decoration: underline;
    color: blue;
    font-size: 1.5rem;
  }
</style>