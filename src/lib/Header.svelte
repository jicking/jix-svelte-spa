<script lang="ts">
  import { link } from "svelte-spa-router";
  import active from 'svelte-spa-router/active'
</script>

<header>
  <div class="nav-container">
    <div class="brand"><a href="/" use:link use:active>Home</a></div>
    <nav>
      <ul>
        <li />
        <li><a href="/about" use:link use:active>About</a></li>
        <li><a href="/x" use:link>404</a></li>
      </ul>
    </nav>
  </div>
  <div>
    <button>Login</button>
  </div>
</header>

<style lang="scss">
  $color: red;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
      font-weight: bolder;
      margin-right: 16px;
    }

    .nav-container {
      display: flex;
    }

    nav ul li {
      display: inline;
    }
  }

  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
    color: red;
  }
</style>
