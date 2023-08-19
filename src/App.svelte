<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Index from "./routes/Index.svelte";
  import About from "./routes/About.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Login from "./routes/account/Login.svelte";
  import Profile from "./routes/account/Profile.svelte";
  import Router from "svelte-spa-router";
  import { APP_NAME } from "./shared/constants";

  const envName = import.meta.env.VITE_ENV;

  const routes = {
    // Using named parameters, with last being optional
    //'/author/:first/:last?': Author,

    // Wildcard parameter
    //'/book/*': Book,

    "/": Index,
    "/about": About,
    "/account/login": Login,
    "/account/profile": Profile,
    "*": NotFound,
  };
</script>

<svelte:head>
  <title>{APP_NAME}</title>
</svelte:head>

<div class="page-root">
  <Header />
  <main>
    <Router {routes} />
  </main>
  <footer><small>{APP_NAME} 2023</small></footer>
</div>

<style lang="scss">
  @use "./app-tokens.scss" as *;

  .page-root {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }

  main {
    padding: 1rem;
    flex: 1;
  }

  footer {
    background-color: $color-bg;
    padding: 1rem;
  }
</style>
