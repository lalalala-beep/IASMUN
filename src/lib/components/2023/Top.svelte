<script lang="ts">
	import { fly } from 'svelte/transition';

	export let onClick: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={onClick}
	in:fly={{ duration: 500, y: 100 }}
	out:fly={{ duration: 500, y: 100 }}
	class="top"
	width="20"
	height="20"
	viewBox="0 0 248 121"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		class="outline"
		d="M248 116.169C248 117.113 247.713 118.036 247.174 118.821C246.634 119.606 245.867 120.217 244.97 120.579C244.073 120.94 243.086 121.034 242.133 120.85C241.181 120.666 240.306 120.211 239.619 119.544L129.797 12.8177C128.246 11.3222 126.15 10.483 123.966 10.483C121.781 10.483 119.685 11.3222 118.134 12.8177L8.31864 119.544C7.39286 120.413 6.15289 120.893 4.86586 120.883C3.57884 120.872 2.34776 120.37 1.43766 119.485C0.527561 118.601 0.0113694 117.404 0.000185547 116.153C-0.0109983 114.903 0.483794 113.697 1.37794 112.798L111.19 6.07186C114.583 2.78652 119.177 0.941895 123.966 0.941895C128.755 0.941895 133.349 2.78652 136.741 6.07186L246.56 112.798C247.017 113.24 247.379 113.765 247.626 114.344C247.874 114.922 248.001 115.543 248 116.169Z"
		fill="white"
	/>
</svg>

<style>
	.top {
		cursor: pointer;
		position: fixed;
		bottom: 15px;
		right: 15px;
		border-radius: 100%;
		background-color: #000;
		padding: 8px 8px;
		transition: 0.55s;
	}
	.top:hover {
		transform: translateY(-12px);
	}
</style>
