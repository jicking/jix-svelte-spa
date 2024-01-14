<script lang="ts">
  import { push, replace } from "svelte-spa-router";
  import {
    useForm,
    HintGroup,
    Hint,
    validators,
    email,
    required,
  } from "svelte-use-form";
  import { userAuth } from "../../store";
  import { onMount } from "svelte";

  const form = useForm();
  // We could also define the valdidator here
  // const form = useForm({
  // 		minimalExample: { validators: [minLength(5)] }
  // })

  function handleSubmit() {
    const email = $form.email?.value;
    userAuth.setUserAuth(email, "xYt5sKM", "xoPl1");
    push("/");
  }

  onMount(() => {
    if (userAuth.isAuthSet()) replace("/");
  });
</script>

<h1>Login</h1>

<form class="form" use:form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    name="email"
    use:validators={[required, email]}
    required
  />
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup>

  <label for="password">Password</label>
  <input
    id="password"
    type="password"
    name="password"
    use:validators={[required]}
    required
  />
  <Hint for="password" on="required">This is a mandatory field</Hint>

  <input class="m-top" type="submit" value="Submit" disabled={!$form.valid} />
</form>

<!-- <pre>
  {JSON.stringify($form, null, " ")}
</pre> -->

<style>
  :global(.touched:invalid) {
    border-color: red;
    outline-color: red;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 240px;
  }

  .m-top {
    margin-top: 12px;
  }
</style>
