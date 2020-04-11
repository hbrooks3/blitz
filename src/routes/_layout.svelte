<style>
	main {
		background-color: black;
		color: white;
		font-family: Roboto;
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<slot></slot>
</main>