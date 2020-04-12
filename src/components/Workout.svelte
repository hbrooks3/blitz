<script>
	import Time from './Time.svelte';
	import Goal from './Goal.svelte';
	
	export let workout = {
		name: "workout",
		time: 0,
		reps: [],
		goal: {
			rep: {
				best: 0,
				last: 0,
			},
			time: {
				best: 0,
				last: 0,
			},
		}
	}
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
	<h1>{workout.name} - <Time value={workout.time}/></h1>
	
	<div class=goals>
		<div class=goal>
			<h2>First Rep</h2>
			<Goal best={workout.goal.rep.best} last={workout.goal.rep.last} rep=true/>
		</div>
		<div class=goal>
			<h2>Time</h2>
			<Goal best={workout.goal.time.best} last={workout.goal.time.last}/>
		</div>
	</div>
</section>

