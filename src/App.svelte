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
    // Exact path
    "/": Index,

    // Using named parameters, with last being optional
    //'/author/:first/:last?': Author,

    // Wildcard parameter
    //'/book/*': Book,

    // No param pages
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
  @import "./app-tokens.scss";

  .page-root {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }

  button {
    padding: 8px;
    margin-right: 8px;
  }

  main {
    padding: 1rem;
    flex: 1;

    .container {
      max-width: $content-width-max;
    }
  }

  footer {
    background-color: $color-bg;
    padding: 1rem;
  }
</style>
