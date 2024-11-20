<script>
	import { page } from '$app/stores';
</script>

<div class="main">
	<h1>{$page.status} | {$page.error?.message}</h1>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

	.main {
		height: calc(100vh - 85px);
		display: grid;
		place-items: center;
		font-family: 'Nunito', sans-serif;
		text-align: center;
	}
</style>
