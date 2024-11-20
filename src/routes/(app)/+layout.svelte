<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Top from '$lib/components/Top.svelte';

	import IntersectionObserver from 'svelte-intersection-observer';

	let show_top_btn = false;

	let footer: any;
	let footer_intersecting = false;

	let hide_top_btn = false;

	$: {
		hide_top_btn = footer_intersecting;
	}

	let scrollY: number;

	const scroll = () => {
		show_top_btn = scrollY > 120;
	};
	const resetScroll = () => {
		scrollY = 0;
	};
</script>

<Navbar />

<svelte:window on:scroll={scroll} bind:scrollY />

<div class="main">
	<slot />
</div>

{#if show_top_btn && !hide_top_btn}
	<Top onClick={resetScroll} />
{/if}

<IntersectionObserver element={footer} bind:intersecting={footer_intersecting}>
	<div bind:this={footer}>
		<Footer onTopClick={resetScroll} />
	</div>
</IntersectionObserver>

<style>
	.main {
		background-color: #d9d9d9;
		height: 100%;
		padding-top: 94px;
	}
</style>
