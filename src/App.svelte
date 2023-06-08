<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Index from "./routes/Index.svelte";
  import About from "./routes/About.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Router from "svelte-spa-router";

  const routes = {
    // Exact path
    "/": Index,

    // Using named parameters, with last being optional
    //'/author/:first/:last?': Author,

    // Wildcard parameter
    //'/book/*': Book,

    "/about": About,

    // Catch-all
    // This is optional, but if present it must be the last
    "*": NotFound,
  };
</script>

<div class="page-root app">
  <Header />
  <main>
    <Router {routes} />
  </main>
  <footer>@Footer</footer>
</div>
