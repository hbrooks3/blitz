<script>
	import MainTimer from '../components/MainTimer.svelte';
	import Workout from '../components/Workout.svelte';
	
	import { onDestroy, onMount } from 'svelte';

	let cancelAnimationFrame = () => {}

	onMount(() => {
		cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
		load_workout();
	})

	let lastExercise = exercise => exercise + 1 == workout.length;
	
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
		workout[exercise].time = Math.floor(workout[exercise].time);
		finished = true;
		alert("Workout complete! Good work.");
	}
	
	let next = () => {
		if (!running) return;
		if (lastExercise(exercise)) {
			finish()
		} else {
			let extra =  workout[exercise].time - Math.floor(workout[exercise].time);
			workout[exercise].time -= extra;
			exercise++;
			workout[exercise].time = extra;
		}
	}
	
	let reset = () => {
		if (!confirm("Reseting will erase the workout in progress.")) return;
		running = false;
		finished = false;
		last = window.performance.now();
		total_time = 0;
		change = 0;
		workout.forEach(workout => workout.time = 0)
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
	
	$: if (workout) workout[exercise].time += change / 1000;
	$: total_time += change / 1000;

	let workout 
	
	async function load_workout() {
		workout = await fetch("/new").
			then(r => r.json()).then(r => r.workout);
	}
	
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

{#if workout}

<Workout workout={workout[0]}/>
<Workout workout={workout[1]}/>
<Workout workout={workout[2]}/>

{/if}