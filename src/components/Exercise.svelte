<script>
	import Time from './Time.svelte';
	import Goal from './Goal.svelte';
	
	export let exercise;
	export let now;

	$: time = exercise.end ?
		(exercise.end - exercise.start) : (exercise.start ? now - exercise.start : 0)
</script>

<style>
	section {
		padding: 0 20px;
		text-align: center;
	}
	
	h1 {
		font-size: 36px;
		display: inline;
		font-weight: normal;
	}
	
	h2 {
		font-size: 24px;
		display: inline;
		font-weight: normal;
	}
	
	.goals {
		display: flex;
		flex-direction: row;
	}
	
	.goal {
		margin: 20px;
	}
</style>

<section>
	<h1>{exercise.name} - <Time value={time}/></h1>
	
	<div class=goals>
		<div class=goal>
			<h2>First Rep</h2>
			<Goal best={exercise.goal.rep.best} last={exercise.goal.rep.last} rep=true/>
		</div>
		<div class=goal>
			<h2>Time</h2>
			<Goal best={exercise.goal.time.best} last={exercise.goal.time.last}/>
		</div>
	</div>
</section>

