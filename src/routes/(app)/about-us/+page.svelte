<script>
	import Saos from 'saos';
</script>

<svelte:head>
	<title>About Us</title>

	<meta name="description" content="The Mission, Vision, and History of IASMUN" />
</svelte:head>

<div class="about">
	<div class="container mission">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Mission</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				At IASMUN, our mission is to ignite curiosity, inspire collaboration, and empower young
				minds to become global citizens. We strive to create an inclusive and dynamic platform where
				students from diverse backgrounds can express their ideas, develop critical thinking skills,
				and foster lasting connections. We believe that by embracing dialogue, empathy, and
				creativity, we can shape a brighter future together.
			</p>
		</Saos>
	</div>
	<div class="container vision">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>Vision</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				In the second edition of IASMUN, we're building on the enthusiasm of our awesome senior
				leaders from 2023. Imagine a place where everyone's ideas matter, and we work together to
				solve global challenges. IASMUN 2024 is all about making friends, sharing thoughts, and
				finding real solutions. We want this to be a special space where you feel heard, and
				together, we'll make the world a better, more connected place. Join us in creating a future
				where kindness, teamwork, and understanding rule the day!
			</p>
		</Saos>
	</div>
	<div class="container history">
		<Saos once={true} animation="slide-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1>History</h1>
		</Saos>

		<Saos once={true} animation="fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
			<p>
				In the fall of 2023, a group of visionary seniors dared to dream big. Inspired by a shared
				passion for diplomacy and global issues, they founded the International Academic School
				Model United Nations (IASMUN). These seniors, now 2023 graduates, infused IASMUN with
				creativity and enthusiasm.
				<br />
				<br />
				In their first year, the 2023 seniors crafted innovative initiatives, fostering an environment
				where students could discuss, debate, and dream about solutions to global challenges. Their leadership
				not only built the foundation of IASMUN, but also left an indelible mark on the hearts of all
				who participated.
				<br />
				<br />

				As they embarked on their final year, the 2023 graduates envisioned a legacy beyond
				graduation. With determination and wisdom, they guided the 2024 seniors, sharing their
				insights and passing the torch. The second year of IASMUN, now under the capable hands of
				the 2024 seniors, continues to thrive, a testament to the enduring spirit of collaboration
				and leadership initiated by the founders.
				<br />
				<br />

				IASMUN's history is not just about conferences and resolutions; it's a tale of students,
				friendships, and the power of a shared vision. The journey continues, each year building
				upon the dreams of those who came before, ensuring that the spirit of IASMUN endures and
				inspires generations to come.
			</p>
		</Saos>
	</div>
</div>

<style>
	.about {
		margin-top: 18px;
		padding-bottom: 22px;
		display: grid;
		place-items: center;
		gap: 20px;
		font-family: 'Open Sans', sans-serif;
	}
	.container {
		width: 800px;
		color: #fff;
		text-align: center;
		padding: 22px 24px;
	}
	.mission,
	.vision {
		background-color: var(--teal);
	}
	.history {
		background-color: var(--dark-grey);
		color: var(--blue);
	}
	.container h1 {
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.06cm;
		margin-top: 0;
	}
	.container p {
		font-size: 20px;
	}

	@media screen and (max-width: 860px) {
		.container {
			width: calc(100% - 60px);
		}
	}
</style>
