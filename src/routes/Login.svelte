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
  import { userAuth } from "../store";
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
<form use:form on:submit|preventDefault={handleSubmit}>
  <label for="email"><b>Email</b></label>
  <input
    type="email"
    name="email"
    use:validators={[required, email]}
    required
  />
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup>

  <br />
  <label for="password"><b>Password</b></label>
  <input type="password" name="password" use:validators={[required]} required />
  <Hint for="password" on="required">This is a mandatory field</Hint>

  <br />

  <button disabled={!$form.valid}>Login</button>
</form>

<!-- <pre>
  {JSON.stringify($form, null, " ")}
</pre> -->

<style>
  :global(.touched:invalid) {
    border-color: red;
    outline-color: red;
  }
</style>
