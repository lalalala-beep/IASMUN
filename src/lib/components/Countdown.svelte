<script lang="ts">
	export let countdown: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	};

	import Digit from './Digit.svelte';
</script>

<ol>
	<li>
		<Digit position={0} val={countdown.days.toString().padStart(2, '0')} />
	</li>
	<li class="hours">
		<Digit position={1} val={countdown.hours.toString().padStart(2, '0')} />
	</li>
	<li>
		<Digit position={2} val={countdown.minutes.toString().padStart(2, '0')} />
	</li>
	<li>
		<Digit position={3} val={countdown.seconds.toString().padStart(2, '0')} />
	</li>
</ol>

<style>
	ol {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
		list-style-type: none;
	}
	li {
		width: 240px;
	}
	@media screen and (max-width: 600px) {
		ol {
			gap: 2px;
			justify-content: space-evenly;
		}
		li {
			width: 180px;
		}
	}
</style>
