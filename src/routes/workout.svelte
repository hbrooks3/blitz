<script>
	import MainTimer from '../components/MainTimer.svelte';
	import Exercise from '../components/Exercise.svelte';

	import { onDestroy, onMount } from 'svelte';

	// // For dev mode
	// import blank_workout from './_workout.js';

	let workout;

	onMount(async () => {
		workout = await fetch("/new").then(r => r.json());

		// // For dev mode
		// workout = await new Promise((resolve, reject) => {
		// 	setTimeout(resolve(blank_workout), 1000);
		// });
	});

	const getTime = () => (new Date()).setMilliseconds(0)	

	let timer;
	let now;

	const update = () => {
		now = getTime();
		timer = requestAnimationFrame(update);
	}

	let running = false;
	let started = false;
	let finished = false;
	let currentExercise = 0;

	const start = () => {
		if (!started) {
			let now = getTime()
			workout.start = now;
			workout.exercises[currentExercise].start = now;
		}
		running = true;
		started = true;
		update();
	}

	const stop = () => {
		running = false;
		cancelAnimationFrame(timer);
	}

	const next = () => {
		workout.exercises[currentExercise].end = now;
		currentExercise++;

		if (currentExercise == workout.exercises.length) {
			stop()
			finished = true;
			workout.end = getTime();
			alert("Workout complete! Good work.");
		} else {
			workout.exercises[currentExercise].start = now;
		}
	}

	const reset = () => {
		if (!confirm("Reseting will erase the workout in progress.")) return;
		started = false;
		finished = false;
		currentExercise = 0;
		stop();
		delete workout.start;
		delete workout.end;
		workout.exercises.forEach(exercise => {
			delete exercise.start;
			delete exercise.end;
		});
		now = getTime();
	}
</script>

<style>
	.bar {
		display: flex;
		flex-direction: row;
  		align-items: center;
		justify-content: center;
		background-color: black;
		position: fixed;
  		bottom: 0;
		width: 100%;
		height: 100px;
	}

	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
  		align-items: center;
		justify-content: center;
		padding-bottom: 100px;
	}
	
	button {
		background-color: black;
        color: white;
        border: 5px solid white;
		font-size: 24px;
        height: 60px;
		font-family: Roboto;
		text-transform: uppercase;
		margin: 10px;
	}

	h1 {
		margin: 100px;
		font-size: 32px;
	}
</style>

<svelte:head>
	<title>Bodyweight Blitz</title>
</svelte:head>

{#if workout}
	<MainTimer {workout} {now}/>

	<main>
		{#each workout.exercises as exercise}
			<Exercise {exercise} {now}/>
		{/each}
	</main>


	<div class=bar>
		{#if !finished && !running}
			<button on:click={start}>
				{started ? "Continue" : "Start"}
			</button>
		{:else if !finished && running}
			<button on:click={stop}>
				Stop
			</button>

			<button on:click={next}>
				{currentExercise + 1 == workout.exercises.length ? "Finish" : "Next"}
			</button>
		{/if}

		{#if started && !running}
			<button on:click={reset}>
				Reset
			</button>
		{/if}
	</div>
{:else}
	<main>
		<h1>LOADING...</h1>
	</main>
{/if}