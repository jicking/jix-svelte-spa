<script lang="ts">
  import { push, replace } from "svelte-spa-router";
  import { userAuth } from "../../store";
  import { onMount } from "svelte";

  onMount(() => {
    console.log('jix', userAuth.isAuthSet())
    if (!userAuth?.isAuthSet()) push("/account/login");
  });
</script>

<h1>Profile</h1>
<div>
  <strong>Email:</strong>{$userAuth?.username}
</div>
<div>
    <strong>Token:</strong> {$userAuth?.securityToken}
</div>
