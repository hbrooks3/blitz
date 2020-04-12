<script>
	import Time from './Time.svelte';
	import Goal from './Goal.svelte';
	
	export let current = 0;
	export let best = 0;
	export let last = 0;
</script>

<style>
	header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
  		align-items: center;
		justify-content: center;
		padding: 20px;
	}
	
	.timer {
		font-size: 96px;
		line-height: 1em;
	}
	
	.goal {
		margin-left: 10px;
	}
</style>

<header>
	<div class=timer>
		<Time value={current}/>
	</div>
	
	<div class=goal>
		<Goal best={best} last={last}/>
	</div>
</header>