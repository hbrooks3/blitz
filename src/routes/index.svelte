<script>
	import MainTimer from '../components/MainTimer.svelte';
	import Workout from '../components/Workout.svelte';
	
	import { onDestroy, onMount } from 'svelte';

	let cancelAnimationFrame = () => {}

	onMount(() => {
		cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	})

	let lastExercise = (exercise) => exercise + 1 == workouts.length;
	
	let start = () => {
		last = window.performance.now();
		running = true;
		update();
	}
	
	let stop = () => {
		running = false;
		cancelAnimationFrame(frame);
	}

	let finish = () => {
		stop();
		total_time = Math.floor(total_time);
		workouts[exercise].time = Math.floor(workouts[exercise].time);
		finished = true;
		alert("Workout complete! Good work.");
	}
	
	let next = () => {
		if (!running) return;
		if (lastExercise(exercise)) {
			finish()
		} else {
			let extra =  workouts[exercise].time - Math.floor(workouts[exercise].time);
			workouts[exercise].time -= extra;
			exercise++;
			workouts[exercise].time = extra;
		}
	}
	
	let reset = () => {
		if (!confirm("Reseting will erase the workout in progress.")) return;
		running = false;
		finished = false;
		last = window.performance.now();
		total_time = 0;
		change = 0;
		workouts.forEach(workout => workout.time = 0)
		exercise = 0
	}
	
	let exercise = 0
	let last;
	let frame;
	let total_time = 0;
	let change = 0;
	let running = false;
	let finished = false;

	function update() {
		if (running) {
			frame = requestAnimationFrame(update);
			const time = window.performance.now();
			change = time - last;
			last = time;
		}
	};
	
	onDestroy(stop);
	
	$: workouts[exercise].time += change / 1000;
	$: total_time += change / 1000;
	
	let workouts = [
		{
			name: "push-ups",
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
			},
		},
		{
			name: "squats",
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
			},
		},
		{
			name: "sit-ups",
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
			},
		},
	]
	
	let best_time = 0;
	let last_time = 0;
</script>

<style>
	/* :global(body) {
		background-color: black;
		color: white;
		font-family: Roboto;
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		align-items: center;
	} */
	
	.bar {
		display: flex;
		flex-direction: row;
  	align-items: center;
		background-color: black;
	}
	
	button {
		margin: 5px;
		font-size: 24px;
		font-family: Roboto;
		background-color: white;
		padding: 1px;
	}
</style>

<svelte:head>
	<title>Bodyweight Blitz</title>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<div class=bar>
	{#if !finished && !running}
		<button on:click={start}>
			{total_time ? "Continue" : "Start"}
		</button>
	{:else if !finished && running}
		<button on:click={stop}>
			Stop
		</button>

		<button on:click={next}>
			{lastExercise(exercise) ? "Finish" : "Next"}
		</button>
	{/if}

	{#if total_time && !running}
		<button on:click={reset}>
			Reset
		</button>
	{/if}
</div>

<MainTimer current={total_time} best={best_time} last={last_time}/>
<Workout workout={workouts[0]}/>
<Workout workout={workouts[1]}/>
<Workout workout={workouts[2]}/>