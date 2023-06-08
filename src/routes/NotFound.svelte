<script lang="ts">
    import {push} from 'svelte-spa-router'
    function handleClickBtn() {
		push('/')
	}
</script>

<h1>404</h1>
<button on:click={handleClickBtn}>Back to home</button>
