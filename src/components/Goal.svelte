<script>
	import Time from './Time.svelte';
	
	export let best = 0;
	export let last = 0;
	export let rep = false;
</script>

<style>
	.goal {
		font-size: 18px;
		line-height: 1.8;
		text-align: center;
		width: 100px;
		height: 70px;
		margin: auto;
	}
</style>

<div class=goal>
	BEST - {#if rep}{best}{:else}<Time value={best}/>{/if}
	<br>
	LAST - {#if rep}{last}{:else}<Time value={last}/>{/if}
</div>

