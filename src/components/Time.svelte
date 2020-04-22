<script>
	export let value;

	$: time = new Date(value);
	$: seconds = time.getSeconds();
	$: minutes = time.getMinutes();
	$: if (seconds < 10) {
		seconds = "0" + seconds
	}
</script>

{minutes}:{seconds}