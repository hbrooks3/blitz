<script>
	import Time from './Time.svelte';
	import Goal from './Goal.svelte';

	export let workout;
	export let now;

	$: time = workout.end ?
		(workout.end - workout.start) : (workout.start ? now - workout.start : 0);
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
		<Time value={time}/>
	</div>
	
	<div class=goal>
		<Goal best={workout.goal.time.best} last={workout.goal.time.last}/>
	</div>
</header>