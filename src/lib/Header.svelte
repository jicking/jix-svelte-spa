<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<header>
  <nav>
    <ul>
      <li><a href="/" use:link>Home</a></li>
      <li><a href="/about" use:link>About</a></li>
      <li><a href="/x" use:link>404</a></li>
    </ul>
  </nav>
</header>
