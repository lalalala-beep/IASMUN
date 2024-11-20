<script lang="ts">
	import Saos from 'saos';

	import GA1CHAIR from '$lib/assets/dais/Agrima Sood.webp';
	import GA1COCHAIR from '$lib/assets/dais/Ali Shariq.webp';

	import GA2CHAIR from '$lib/assets/dais/Basil Adnan.webp';
	import GA2COCHAIR from '$lib/assets/dais/Reem Saleem.webp';

	import GA3CHAIR from '$lib/assets/dais/Zaynab.webp';
	import GA3COCHAIR from '$lib/assets/dais/Hiba Ali.webp';

	import GA4CHAIR from '$lib/assets/dais/Zaina Hisham.webp';

	import GA5CHAIR from '$lib/assets/dais/Arushi Gulati.webp';
	import GA5COCHAIR from '$lib/assets/dais/Joudy Ramy.webp';

	import UNODCCHAIR from '$lib/assets/dais/Meera Anwahi.webp';
	import UNODCCOCHAIR from '$lib/assets/dais/Nour Ashraf.webp';

	import WHOCHAIR from '$lib/assets/dais/Fatima Gazafi.webp';
	import WHOCOCHAIR from '$lib/assets/dais/Rahma Ahmed.webp';

	import ARABLEAGUECHAIR from '$lib/assets/dais/Rahaf Ahmed.webp';
	import ARABLEAGUECOCHAIR from '$lib/assets/dais/Zainab Waqass.webp';

	import UNICEFCHAIR from '$lib/assets/dais/Salma Hani.webp';
	import UNICEFCOCHAIR from '$lib/assets/dais/Nour Mostafa.webp';

	let width = 0;

	const committees = [
		{
			class: 'GA1',
			name: 'Disarmament & International Security Committee (GA1)',
			purpose:
				'GA1 is committed to advancing worldwide peace and security by tackling pressing concerns related to arms regulation, disarmament efforts, and conflict prevention',
			topics: [
				'The Regulation of Autonomous Weapon Systems',
				'Preventing the Militarization of Space'
			],
			chair_letter: `Hello delegates,
			<br />
			I'm Agrima Sood, your friendly neighborhood chair! I am delighted to welcome you all to General
			Assembly 1! After participating in MUNs for 3 years, I have realized that what I truly love about
			MUNs is the diplomatic drama. And believe me, I'm going to make sure there is enough of that in
			our committee. I look forward to hearing all of your propositions, but most of all, I look forward to
			hearing debates that will have everyone aggressively tapping the tables and rebuttals that will
			remind everyone to maintain decorum. Although I am here to make sure you have the best
			experience at this conference, I must remind you, with great power comes great responsibility.
			<br />
			Best of luck!
			<br />
			Agrima Sood (Spiderman)`,
			chair_photo: GA1CHAIR,
			chair_name: 'Agrima Sood',
			cochair_letter: `Hello wonderful delegates, 
				<br />
				Welcome to IASMUN24! I am extremely honored to be the Co-Chair for GA1 this year. I hope to make this a memorable, unique, and fun event for each and every one of you, whether this is your 100th or your 1st MUN. I look forward to your (hopefully) respectful arguments and debates, and I wish you all the very best!
				<br />
				Kindest Regards,
				<br />
				Ali`,
			cochair_photo: GA1COCHAIR,
			cochair_name: 'Ali Shariq'
		},
		{
			class: 'GA2',
			name: 'Economic & Financial Committee (GA2)',
			purpose:
				'GA2 places its emphasis on international economic affairs. Its main efforts are directed towards formulating policies and tactics to strengthen the global economy, diminish poverty, and reinforce financial security.',
			topics: [
				'Mitigating the Impact of Digital Currency on Traditional Banking Systems',
				'Addressing the Global Economic Consequences of Climate Change'
			],
			chair_letter: `Dear Esteemed delegates,
				<br /> <br />
				I’m delighted to welcome you all to this year’s edition of IASMUN24 with the committee of the
				second General Assembly (GA-2). My name is Basil Adnan, I’m 17 years old and in my senior year
				here at IAS. I am grateful that I have been handed this opportunity to be your chair in this years
				GA-2 committee. I have had experience as a delegate in the GA-2 committee in the past, in
				which I have learned and acquired skills regarding the various topics and subtopics that this
				committee focuses on. In addition, this is also my second year as a member of the Dias as I was
				a co-chair in last years IASMUN. Finally, I would like to say that I understand that for some this
				could be a new experience therefore i assure you that I would give you my utmost best support
				throughout your journey to achieve great success. I wish you all the best and I hope that that will
				this be a great experience for all of you.`,
			chair_photo: GA2CHAIR,
			chair_name: 'Basil Adnan',
			cochair_letter: `Hello delegates! I’m your Co-Chair Reem Saleem and i’m going to be moderating the General
			Assembly 2 committee alongside Basil Adnan (head chair). Whether this is your first or tenth
			conference, I am delighted to be working with you. From motions to resolutions, this conference
			is going to be an exciting journey filled with memorable moments.`,
			cochair_photo: GA2COCHAIR,
			cochair_name: 'Reem Saleem'
		},
		{
			class: 'GA3',
			name: 'Social, Cultural, & Humanitarian Affairs (GA3)',
			purpose:
				'GA3 is all about humanity. This committee addresses social and humanitarian challenges worldwide, from healthcare and education to culture and sustainable development. Delegates collaborate to make the world a better place for all.',
			topics: [
				'Promoting Educational Access for Children in Palestine',
				'Recovery and Reintegration of Internally Displaced Persons (IDPs) in Libya'
			],
			chair_letter: `Hello delegates! I'm Zaynab your Head Chair for the General Assembly Third Committee. I can't wait to meet each of you and witness the incredible debates and discussion that will unfold during this conference. Good luck :)`,
			chair_photo: GA3CHAIR,
			chair_name: 'Zaynab',
			cochair_letter: `Hi delegates! I’m Hiba Ali and i’m the co-chair of GA3 committee. I look forward to see all of you
			and get to know each and every one of you. I hope to create a comfortable and friendly
			environment where everyone can communicate and debate without problems!`,
			cochair_photo: GA3COCHAIR,
			cochair_name: 'Hiba Ali'
		},
		{
			class: 'GA4',
			name: 'Special Political Decolonizations (GA4)',
			purpose:
				'GA4 is dedicated to addressing matters related to decolonization and the right to self-determination. It works to facilitate the peaceful transition of non-self-governing territories towards independence and self-governance.',
			topics: [
				'Addressing the Western Sahara Conflict: Self-Determination and Peaceful Resolution',
				'Enhancing Cybersecurity in the Context of State Sovereignty'
			],
			chair_letter: `Hello there, esteemed delegates! Welcome to General Assembly 4 at IASMUN. I am Zaina Hisham, your chair for this riveting conference. As we embark on this journey together, I am thrilled to meet such a diverse and talented group of individuals. As I see it, this is more than just a conference; it's a chance for you to exchange ideas and build skills that transcend beyond school halls. I encourage each of you to engage fully and embrace this opportunity. Let's make this conference not only insightful but also enjoyable. I am looking forward to witnessing the incredible contributions I am confident you will all bring to the table!`,
			chair_photo: GA4CHAIR,
			chair_name: 'Zaina Hisham'
		},
		{
			class: 'GA5',
			name: 'Administrative & Budgetary Questions (GA5)',
			purpose:
				"GA5 handles the administrative and budgetary aspects of the United Nations. It ensures that the organization's resources are used efficiently and transparently, so the UN can effectively carry out its missions.",
			topics: [
				'Strengthening UN Peacekeeping Operations',
				'Financial Support for Climate Resilience in Developing Countries'
			],
			chair_letter: `Dear Esteemed Delegates,
			<br /><br />
			I am delighted to extend a warm welcome as we embark on this year's conference journey
			together. I am Arushi Gulati, your Head Chair for General Assembly 5. Your collective expertise
			and passion are truly commendable, and I am excited to witness the innovation and positive
			change that will emerge from our discussions.
			<br />
			As Head Chair, I am committed to fostering effective communication, collaboration, and
			innovation. With a background in mentoring and leadership, I am dedicated to guiding our
			discussions towards insightful outcomes. Let's make this conference a platform for new ideas,
			meaningful connections, and collaborative achievements. Remember, within the spectrum of our
			discussions and collaborations lies the power to innovate, influence, and inspire positive change.
			<br /><br />
			Warm regards,
			<br />
			Arushi Gulati
			<br />
			Head Chair: General Assembly 5`,
			chair_photo: GA5CHAIR,
			chair_name: 'Arushi Gulati',
			cochair_letter: `Hey! It’s Joudy, a sophomore in IAS. I am excited to be a part of IASMUN as Co-Chair of GA5. My MUN Journey has been an exciting experience, and I can’t wait for this IASMUN to make it even more special. I aim to make this experience fun, educational, and most importantly, memorable.
			<br />
			So, brace yourselves for an event you surely won’t forget!`,
			cochair_photo: GA5COCHAIR,
			cochair_name: 'Joudy Ramy'
		},
		{
			class: 'UNODC',
			name: 'United Nations Office on Drugs and Crime (UNODC)',
			purpose:
				"UNODC is the United Nations' front line against drugs and crime. They work to combat drug trafficking, corruption, human trafficking, and other global crimes.",
			topics: [
				'Combatting Cybercrime and Cybersecurity in the Age of Digitalization',
				'Tackling Illicit Drug Trade in Conflict Zones'
			],
			chair_letter: `Hello Delegates!
			<br /><br />
			I'm Meera, your UNODC Chair for IASMUN 2024. Let me share a bit about myself: I'm 17, a first-year university student pursuing a Bachelor of Science in Sustainability and Environmental Science, and proudly a member of my university's football team. I'm looking forward to meeting you all and be part to this year's conference. Best of luck delegates!`,
			chair_photo: UNODCCHAIR,
			chair_name: 'Meera Anwahi',
			cochair_letter: `Hello fellow delegates! My name is Nour Ashraf. I am from Egypt, and I am 15 years old. I am a
			sophomore at the International Academic School. My hobbies include painting, baking, skating,
			and many more. I am honored to be the Co-Chair of UNODC for this year's IAS Model United
			Nations. I will make sure to dedicate all my hard work to preserve the smooth flow of the debates
			while at the same time ensuring that all rules are complied with to keep this fair and an
			opportunity for everyone to shine in this significant event. I wish all the delegates the best of
			luck, and I hope to see you there soon! &#9825;`,
			cochair_photo: UNODCCOCHAIR,
			cochair_name: 'Nour Ashraf'
		},
		{
			class: 'WHO',
			name: 'World Health Organization (WHO)',
			purpose:
				'WHO is the global guardian of public health. They lead international efforts to prevent epidemics, ensure access to quality healthcare, and promote health for all.',
			topics: [
				'Addressing the Global Challenge of Antimicrobial Resistance (AMR) and Ensuring Effective Use of Antibiotics',
				'Global Access to Clean Drinking Water and Sanitation in Afghanistan: A Fundamental Human Right'
			],
			chair_letter: `Hello! I am Fatima Gazafi, and I'll be chairing for WHO at IASMUN 2024. It is my pleasure to guide
			you through the exhilarating world that is of Model United Nations and watch what constructive
			policies, rigorous debates and dynamic problem-solving will play out.
			<br /><br />
			As we embark on this adventure, I believe an enjoyable and enriching experience awaits everyone
			in the art of public speaking and confident that each of you will contribute to a memorable
			experience. Best of luck delegates!`,
			chair_photo: WHOCHAIR,
			chair_name: 'Fatima Gazafi',
			cochair_letter: `I hope this message finds you well. I'm Rahma, a sophomore at IAS and honored to be your co-
			chair for this year's conference.
			<br />
			As we gather to exchange ideas and enhance our public speaking skills, I extend a warm
			welcome to each of you. Your presence reflects a shared commitment to advancing our interests,
			and I look forward to the rich knowledge exchange during the conference.
			<br /><br />
			Your enthusiasm contributes to the success and vibrancy of this event. Thank you for your vital
			participation. Let's ensure everyone leaves with collaborative and unforgettable memories.
			Excited to meet and engage in fascinating conversations with each of you.
			<br /><br />
			Best wishes for a productive and rewarding conference!`,
			cochair_photo: WHOCOCHAIR,
			cochair_name: 'Rahma Ahmed'
		},
		{
			class: 'arab-league',
			name: 'Arab League (EN)',
			purpose:
				'The Arab League is an organization dedicated to promoting cooperation and coordination among Arab nations. Their work spans various areas, including politics, economics, culture, and social issues, all with a focus on advancing the interests of Arab states.',
			topics: ['The Humanitarian Crisis in Gaza', 'The Syrian Civil War'],
			chair_letter: `Dear distinguished delegstes, I'm Rahaf Ahmed, an IAS senior, and I'm honored to be head of chairs and Arab League EN chair. I am delighted to have you all as part of the IASMUN family.
			<br /><br />
			My passion for politics and debate has always been strong. But my passion grew after my first MUN. I enjoyed it so much that I switched to international relations from law.
			<br /><br />
			I pushed for an Arab League in English committee for this year's IASMUN. Several Middle Eastern countries, some of which are in the spotlight while others are overlooked, face significant challenges that motivated this decision.
			<br /><br />
			Our generation possesses a strong awareness of global affairs; therefore, I have selected ongoing conflicts that provoke strong opinions from all of us, and it's crucial that I give our youth a place to debate and innovate.
			<br /><br />
			With that being said, I extend a warm welcome to you at IASMUN. I hope that this experience provides you with the opportunity to improve your public speaking abilities, debate skills, research capabilities, quick thinking abilities, and confidence.
			<br /><br />
			I hope we host a conference that you will enjoy and will always remember. I wish you all the best of luck.`,
			chair_photo: ARABLEAGUECHAIR,
			chair_name: 'Rahaf Ahmed',
			cochair_letter: `Esteemed delegates, it's with great pleasure and enthusiasm that I, Zainab Waqass, the co-chair of Arab League (EN) extend a warm welcome to each and everyone of you at the IASMUN '24. 
			<br /><br />
			We are gathered here to address issues of the highest significance, and I am enthusiastic about the productive and beneficial dialogue that will take place. Each of you represents your countries with honor and integrity, and your attendance must be the evidence of that commitment and dedication. The Arab League is a platform for cooperation and mutual understanding, and your support is crucial to achieving our common goals. I hope that this conference serves as a forum for honest communication, respect for one another, and the sharing of creative ideas. I wish that all of your initiatives are successful as we set out on this exciting journey together, such that your discussions result in decisions that will benefit the Arab world and promote prosperity, harmony, and peace in the future.
			<br /><br />
			Once again, welcome to the Arab League. Of cooperation and progress, let us work hand in hand to create a legacy.
			<br /><br />
			Sincerely,
			<br />
			Zainab Waqass
			<br />
			Co-Chair, Arab League`,
			cochair_photo: ARABLEAGUECOCHAIR,
			cochair_name: 'Zainab Waqass'
		},
		{
			class: 'UNICEF',
			name: "United Nations International Children's Emergency Fund (UNICEF)",
			purpose:
				"UNICEF is all about children's well-being. They provide humanitarian aid, health care, and education to children in need around the world. Their mission is to ensure every child has the opportunity to grow up healthy, educated, and safe.",
			topics: [
				'Child Rights in the Context of Armed Conflict',
				'Addressing the Impact of Child Marriage on Gender Equality'
			],
			chair_letter: `Greetings delegates! I’m Salma Hani, I’ll be serving as the Chair of UNICEF in IASMUN24. Words can’t describe how excited I am to witness all the drama and heated debates that will, for sure, happen in our committee. I’m a strong believer that MUNs could be a new found hobby to anyone and it’ll be my responsibility to make this conference an unforgettable and enlightening experience to you all.`,
			chair_photo: UNICEFCHAIR,
			chair_name: 'Salma Hani',
			cochair_letter: `Welcome to IASMUN, it's a pleasure to greet each one of you. Your presence at this MUN will
				bring knowledge and invaluable experience. As a co-chair, I'm committed to facilitate an
				environment that opens debates, encourages the exchange of ideas, and makes this experience
				unforgettable. Thank you for being a part of UNICEF IASMUN. Lets make this MUN an inspiring
				and a memorial experience. Sincerely,
				<br />
				Nour Moustafa Co-chair of UNICEF IASMUN`,
			cochair_photo: UNICEFCOCHAIR,
			cochair_name: 'Nour Mostafa'
		}
	];
</script>

<svelte:head>
	<title>Committees</title>

	<meta
		name="description"
		content="Introduction to The 9 Committees of IASMUN, along with their topics, purpose, and their dais"
	/>
</svelte:head>

<svelte:window bind:innerWidth={width} />

<h1 class="header">Committees</h1>

<Saos once={true} animation="slide-top-qaccess 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
	<div class="quickaccess">
		{#each committees as committee}
			<a class="quickaccess-links" href={`#${committee.class}`}
				>{committee.class == 'arab-league' ? 'AL (EN)' : committee.class}</a
			>
		{/each}
	</div>
</Saos>

<div class="committees">
	{#each committees as committee}
		<div class={`committee ${committee.class}`} id={committee.class}>
			<div class="committee-header">
				<Saos
					once={true}
					animation={'slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
				>
					<h1>{committee.name}</h1>
				</Saos>
			</div>
			<div class="purpose">
				<h2 class="subheader">Purpose</h2>
				<p class="desc">{committee.purpose}</p>
			</div>

			<h2 class="subheader topics-header">Topics</h2>
			<ol class="topics">
				{#each committee.topics as topic}
					<li>{topic}</li>
				{/each}
			</ol>

			<div class="letters">
				<div class="chair">
					<h2 class="subheader">Chair's Letter</h2>
					<div class="content">
						<Saos
							once={true}
							animation="slide-right-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
						>
							<p>{@html committee.chair_letter}</p>
						</Saos>

						<Saos
							once={true}
							animation="slide-left-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
						>
							<div class="dais">
								<img class="img" src={committee.chair_photo} alt={committee.chair_name} />
								<p class="dais-name">{committee.chair_name}</p>
							</div>
						</Saos>
					</div>
				</div>

				{#if committee.cochair_name !== undefined}
					<div class="co-chair">
						<h2 class="subheader">Co-Chair's Letter</h2>
						<div class="content">
							<Saos
								once={true}
								animation="slide-left-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
							>
								<p>{@html committee.cochair_letter}</p>
							</Saos>

							<Saos
								once={true}
								animation="slide-right-letter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
							>
								<div class="dais">
									<img class="img" src={committee.cochair_photo} alt={committee.cochair_name} />
									<p class="dais-name">{committee.cochair_name}</p>
								</div>
							</Saos>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	:target {
		scroll-margin-top: 105px;
	}

	h1 {
		margin: 0;
		font-family: 'Alfa Slab One', sans-serif;
		letter-spacing: 0.07cm;
	}

	* {
		font-family: 'Open Sans', sans-serif;
	}

	.header {
		font-family: 'Alfa Slab One', sans-serif;
		font-size: 48px;
		text-align: center;
		margin: 46px 0 0 0;
		font-weight: 400;
	}
	.committee-header {
		color: var(--blue);
	}
	.subheader {
		font-family: 'Copperplate Gothic', sans-serif;
		color: white;
	}
	.purpose .subheader,
	.topics-header {
		color: var(--blue);
		font-weight: 800;
	}
	.quickaccess {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 18px;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 42px;
		padding: 0 8px;
	}
	.quickaccess-links {
		position: relative;
		text-decoration: underline;
		font-size: 20px;
		color: var(--blue);
		opacity: 0.6;
		transition: 0.25s;
	}
	.quickaccess-links:hover {
		opacity: 1;
	}

	.committees {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr;
		gap: 16px;
		padding-bottom: 36px;
		position: relative;
		overflow: visible;
	}
	.committee {
		width: calc(100vw - 300px) !important;
		background-color: var(--dark-grey);
		color: #fff;
		width: 780px;
		padding: 24px;
		padding-bottom: 6px;
		position: relative;
	}
	.committee-header {
		text-align: center;
		margin-bottom: 24px;
	}
	.subheader {
		font-size: 26px;
		font-weight: 700;
		margin-bottom: 0;
	}
	.desc {
		margin-top: 4px;
		font-size: 22px;
	}
	.topics {
		margin-bottom: 4px;
		margin-top: 2px;
	}
	.topics li {
		margin-bottom: 8px;
		font-size: 22px;
	}
	.letters {
		margin-top: 16px;
		padding: 8px 16px;
		padding-bottom: 20px;
		background-color: var(--teal);
		color: white;
	}
	.letters .subheader {
		text-align: center;
		margin-bottom: 12px;
		font-size: 38px;
	}
	.letters .content {
		font-size: 22px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		gap: 35px;
	}
	.letters p {
		margin: 0;
	}
	.dais {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: space-around;
		gap: 10px;
	}
	.dais-name {
		font-weight: 800;
		text-align: center;
	}
	.co-chair .content {
		flex-direction: row-reverse;
	}
	.letters p {
		flex: 0.85;
	}
	.letters .img {
		flex: 0.25;
		width: 380px;
	}

	@keyframes -global-slide-right {
		0% {
			-webkit-transform: translateX(-200px);
			transform: translateX(-200px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-right-letter {
		0% {
			-webkit-transform: translateX(-50px);
			transform: translateX(-50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-left-letter {
		0% {
			-webkit-transform: translateX(50px);
			transform: translateX(50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-left {
		0% {
			-webkit-transform: translateX(200px);
			transform: translateX(200px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-50px);
			transform: translateY(-50px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
	@keyframes -global-slide-top-qaccess {
		0% {
			-webkit-transform: translateY(40px);
			transform: translateY(40px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@media screen and (max-width: 840px) {
		.committee {
			width: calc(100vw - 90px) !important;
		}
	}
	@media screen and (max-width: 1300px) {
		.letters .content {
			flex-direction: column-reverse;
		}
		.letters .img {
			flex: 1;
			width: 220px;
			height: 180px;
		}
		.dais {
			margin-bottom: 22px;
		}
	}
	@media screen and (max-width: 500px) {
		.content > p {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 355px) {
		.header {
			font-size: 35px;
		}
		.committee-header {
			font-size: 10px;
		}
	}
	@media screen and (max-width: 320px) {
		.letters .img {
			width: 100%;
		}
	}
</style>
