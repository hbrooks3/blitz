<script>
	export let value;
	
	$: seconds = Math.floor(value % 60);
	$: minutes = Math.floor(value / 60);
	$: if (seconds < 10) {
		seconds = "0" + seconds
	}
</script>

{minutes}:{seconds}