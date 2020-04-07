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
  	align-items: center;
	}
	
	.timer {
		font-size: 96px;
	}
	
	.goal {
		left: 20px;
		position: relative;
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