<script lang="ts">
	import Saos from 'saos';

	import Blob1 from '$lib/assets/2023/blobs/Vector 1.svg';
	import Blob2 from '$lib/assets/2023/blobs/Vector 2.svg';
	import Blob3 from '$lib/assets/2023/blobs/Vector 3.svg';

	import Line1 from '$lib/assets/2023/lines/Vector 1.svg';
	import Line2 from '$lib/assets/2023/lines/Vector 2.svg';
	import Line3 from '$lib/assets/2023/lines/Vector 3.svg';

	import Shape1 from '$lib/assets/2023/shapes/Vector 1.svg';
	import Shape2 from '$lib/assets/2023/shapes/Vector 2.svg';
	import Shape3 from '$lib/assets/2023/shapes/Vector 3.svg';
	import Shape4 from '$lib/assets/2023/shapes/Vector 4.svg';
	import Shape5 from '$lib/assets/2023/shapes/Vector 5.svg';
	import Shape6 from '$lib/assets/2023/shapes/Vector 6.svg';
	import Shape7 from '$lib/assets/2023/shapes/Vector 7.svg';
	import Shape8 from '$lib/assets/2023/shapes/Vector 8.svg';

	import Aya from '$lib/assets/2023/committee-members/Aya.jpg';
	import Basil from '$lib/assets/2023/committee-members/Basil.jpg';
	import Carine from '$lib/assets/2023/committee-members/Carine.jpg';
	import Imran from '$lib/assets/2023/committee-members/Imran.jpg';
	import Jasmine from '$lib/assets/2023/committee-members/Jasmine.jpg';
	import Nasser from '$lib/assets/2023/committee-members/Nasser.jpg';
	import Rahaf from '$lib/assets/2023/committee-members/Rahaf.jpg';
	import Rana from '$lib/assets/2023/committee-members/Rana.jpg';
	import Shayan from '$lib/assets/2023/committee-members/Shayan.jpg';

	let width = 0;

	const committees = [
		{
			class: 'GA',
			name: 'General Assembly (GA)',
			biography:
				'The first UNGA meeting was held in London on the 10th of January in 1946. It included representatives from 51 nations. It was created as the principal organ of the United Nations, and the other committees derived from it. The subsequent few sessions were held in different sessions from New York City to Paris. It then moved to its permanent residence at the Headquarters of the United Nations in New York City.',
			purpose:
				'The overarching mission of the United Nations General Assembly is to ensure and promote international political cooperation and the development of international law. It also seeks to realize human rights and freedoms while pushing for international collaboration in the economic, social, humanitarian, health, and educational fields.',
			topics: ['Ukraine and The Global Economy', 'Palestine and Human Rights'],
			chair_letter:
				"Dear delegates, I welcome you to the IASMUN. My name is Nasser Mansour, and I will be the Chair of the General Assembly. I expect to meet many outspoken and intelligent folk during this event, and I am very excited to see them engaging and interacting with one another in solving the world's pressing matters. I hope everyone who participates with us leaves with a new outlook on their ideas and a smile.<br /><br />During your stay as General Assembly delegate, I will constantly ensure a steady flow of debate and a balanced turn structure that will guarantee everyone will get their chance to speak and voice their opinions. I sincerely hope you find my leadership rewarding, and I hope to witness a fruitful debate through it.",
			chair_photo: Nasser,
			cochair_letter:
				"Greetings, Dear MUN conference delegates,<br /><br />My name is Aya Bawaba, and I'm a junior at IAS. I am privileged to have been allowed to serve as a co-chair in the MUN hosted by my school. I sincerely hope you'll put your public speaking, research, teamwork, and critical thinking abilities to the test by attending this conference. The significance of these skills will come in handy on many occasions, and it is my role to grant you the chance to enhance them in a formal and educational environment. I have been actively involved in leadership roles in the debating and public speaking fields at every school I have ever attended, so with that being said, I assure you that with those experiences, I'll give my most outstanding effort to serve as a co-chair on this committee.<br /><br />Besides MUN, I'm also interested and enthusiastic about other activities, such as painting, playing basketball, and reading self-help books. Moreover, I fully comprehend the effort and dedication required for MUN and how uneasy one may feel at a first conference. Rest assured, you will grow to love the experience it brings and will want to participate in as many future conferences as possible. Please take this opportunity to speak your mind and make it a fun experience overall.<br /><br />I'm looking forward to chairing this year's conference and listening to all the great speeches and resolutions written by fellow delegates during this conference. I wish you all the best of luck!",
			cochair_photo: Aya,
			cochair2_letter:
				"My name is Rana Mohammed, and I am a senior at IAS. I'm glad to be allowed to serve as a co-chair at IASMUN's first mun conference. My hobbies include basketball as well as photography. My rule as a co-chair involves making sure delegates fathom the complex rules and regulations in the mun while keeping it fun and light for them. My strongest desires are that this mun allows participants to present their research, teamwork, and debate skills and that they'll be able to make the best of their experience. Moreover, I'll do the best work I can as a co-chair. I wish all delegates the best of luck, and I'm thrilled to welcome you to this conference.",
			cochair2_photo: Rana
		},
		{
			class: 'DISEC',
			name: 'Disarmament and International Security Council (DISEC)',
			biography:
				'The United Nations (UN) Disarmament and International Security Committee (DISEC) was created as the first of the Main Committees in the General Assembly when the charter of the United Nations was signed in 1945. Thus, DISEC is often referred to as the First Committee. DISEC was formed to respond to the need for an international forum to discuss peace and security issues among members of the international community.',
			purpose:
				'According to the UN Charter, the purpose of DISEC in the General Assembly is to establish \'general principles of cooperation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armaments, and also to give "recommendations concerning such principles to the Members or to the Security Council." Although DISEC cannot directly advise the Security Council\'s decision-making process, the UN Charter explains that DISEC can suggest specific topics for Security Council consideration.',
			topics: ['The Peaceful Applications of Nuclear Technology', 'Global Weapon Disarmament'],
			chair_letter:
				'My name is Shayan Abbas, and I am a Senior at IAS. I have been selected as a Chair at the IASMUN. I hope to help you navigate the complex rules and regulations in the MUN while keeping it fun for all delegates. My strongest desire is that this MUN will help you showcase your research, teamwork, debate skills, critical thinking, and public speaking abilities. As the chair, it is my responsibility that you will be able to make the most of your experience at the MUN. Moreover, I understand how privileged I am and will do my best to serve as my committee chair. I wish you all the best of luck!',
			chair_photo: Shayan,
			cochair_letter:
				"My name is Rahaf Ahmed, and I am a junior at IAS. I am thrilled to have been appointed co-chair of my school's model United Nations. By participating in this event, you will be able to showcase your most robust research, teamwork, debate, critical thinking, and public speaking abilities. As co-chair, I am responsible for encouraging all delegates to do their best and make the most of this experience, as it can enhance their self-confidence and public speaking skills. Taking part in model UN brings me great joy and excitement. It provides me with valuable experience and skills for my desired career path. I want to be a lawyer. As important as preparation is, the ability to think on your feet is equally essential when defending your client. Model UN can teach you both these skills. Although Model United Nations is a great learning experience, and I encourage you to take it very seriously, some may initially feel nervous or uneasy. However, I assure you that it is much fun and that you will want to participate again after your first time. Moreover, I understand how privileged and lucky I am, and I will do my best to serve as a co-chair on my committee. I wish you all the best of luck!",
			cochair_photo: Rahaf
		},
		{
			class: 'WHO',
			name: 'World Health Organization (WHO)',
			biography:
				"From the very beginnings of the United Nations, the founding fathers determined the need for world health officials to expand the organization's purpose beyond politics. And in 1948, the WHO established its headquarters in Geneva, Switzerland, with its first meeting in July of that year. The governing body -namely, the World Health Assembly- met to, and continues to meet annually, coordinate major health affairs within the UN system. Today, there are six regional and 150 country offices worldwide under the leadership of the general director, Dr. Tedros Adhanom Ghebreyesus.",
			purpose:
				'The World Health Organization thrives under the objective of "the attainment by all peoples of the highest possible level of health." Improving local health systems and coordinating the global response to health threats is essential. And it promotes healthier lives - from pregnancy care through old age. It is an office created to connect with and aid people on a vulnerable, humanitarian level.',
			topics: ['Drought and Food Shortage in Africa', 'Issues with World Population'],
			chair_letter:
				"Having prior MUN experience with a 'Best Position Paper' award, I profess to be able to guide my delegates through the incredible experience as smoothly as possible. My name is Carine Chamas, and I am the World Health Organization Committee chair. I have long been interested in politics and its effect on health-related fields. I want to make the first-ever IASMUN an extraordinary success for the books.",
			chair_photo: Carine,
			cochair_letter:
				"With the exciting news, I'll be taking part in this year's MUN with my team as the co-chair. I had a positive experience with MUN in my previous high school, so I am well-equipped and qualified for the role of co-chair. We want to ensure that the delegates feel safe and firm to exchange ideas and observations of their assigned countries during the debates in a constructive respectful manner and not behave in a way that will destroy the competitive spirit of MUN or make it seem like a hostile environment. And last but not least, best of luck to everyone involved for IAS's 2023 MUN!",
			cochair_photo: Imran
		},
		{
			class: 'UNODC',
			name: 'United Nations Office on Drugs and Crime (UNODC)',
			biography:
				"The United Nations Of Drugs and Crime is a United Nations office created in 1997 as the Office for Drug Control and Crime Prevention by fusing the Crime Prevention and Criminal Justice Division at the United Nations Office in Vienna with the United Nations International Drug Control Program (UNDCP). The program changed its name in 2002 to the United Nations Office on Drugs and Crime. In addition to carrying out the UN lead program on terrorism, the United Nations Office on Narcotics and Crime (UNODC) is a global leader in the struggle against illegal drugs and transnational crime. The UNODC aims to enhance member states' ability to combat international organized crime. It aids member governments in ratifying and putting into practice various agreements, laws, and other legal instruments designed to combat financial and organized crime to achieve these goals.",
			purpose:
				'Through conferences and discussions held worldwide, the United Nations Office on Drugs and Crime works to ensure everyone has access to justice, prevent violence, make the world safer from drugs and crime, and promote health and well-being. It also works to increase the knowledge base needed to make informed decisions. Additionally, it surveys and analyzes the current worldwide drug situation, considering the interconnected issues of drug abuse prevention, drug user rehabilitation, and the supply and trafficking of illegal drugs. By addressing these dangers to achieve health, security, and justice for all and fostering lasting peace and well-being, UNODC seeks to make the world less dangerous from drugs, organized crime, corruption, and terrorism.',
			topics: [
				'Reforming Criminal Justice and Incarceration',
				'Financial Crimes and Embezzlement',
				'Drug Abuse Prevention and Treatment'
			],
			chair_letter:
				"Dear distinguished delegates, it is my pleasure to welcome you to the 1st annual IASMUN 2023 on the committee of the United Nations Of Drugs and Crime. My name is Jasmine, I'm 17 years old and a senior in IAS, and I have been allowed to be your chair in this year's UNODC committee. I'm very passionate about debating and taking stances, and I enjoy reading and partaking in different outdoor activities. As a former Delegate on this committee, I have accumulated many additional tips and tricks that I can give to all your delegates participating this year.<br /><br />I understand the pressure of preparing and getting ready for such challenging conferences. However, these debates and discussions can help each exchange points of view with other delegates and expand their knowledge in certain aspects. My goal this year is to guide and ensure that each delegate reaches their fullest potential in researching and debating. I wish everyone a pleasant experience this year, and I can't wait to hear from and talk to you, delegates!",
			chair_photo: Jasmine,
			cochair_letter:
				"My name is Basil Adan. I am from Jordan, and I am 16 years of age. I'm currently in my junior year at International Academic School. I have allocated many significant achievements throughout my time in lAS, like ranking first academically from grade 10, Volunteering in different activities to help the school, Joining competitions such as the mental math competition and the robotics club competition, and many other various things. Regarding being honored with the role of co-chair in this year's IAS Model United Nations (MUN), I will give my utmost best in providing you with the appropriate requirements and rules. In addition, I will make sure to dedicate all my hard work to preserve the smooth flow of the debates while at the same time ensuring that all rules be complied with to keep this fair and an opportunity for everyone to shine in this significant event.",
			cochair_photo: Basil
		}
	];
</script>

<svelte:head>
	<title>Committees</title>
</svelte:head>

<svelte:window bind:innerWidth={width} />

<img class="shapes shape1" src={Shape1} alt="" />
<img class="shapes shape2" src={Shape7} alt="" />

<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
	<h1 class="header"><b>Committees</b></h1>
</Saos>

<Saos once={true} animation="slide-top-qaccess 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
	<div class="quickaccess">
		{#each committees as committee}
			<a class="quickaccess-links" href={`#${committee.class}`}>{committee.class}</a>
		{/each}
	</div>
</Saos>

<img class="lines line3" src={Line3} alt="" />
<img class="blobs blob1" src={Blob1} alt="" />

<div class="committees">
	{#each committees as committee, index}
		<Saos
			once={true}
			animation={width >= 840
				? index % 2 == 0
					? 'slide-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
					: 'slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
				: undefined}
		>
			<div class={`committee ${committee.class}`} id={committee.class}>
				<div class="committee-header">
					<h1>{committee.name}</h1>
				</div>
				<div class="biography">
					<h2 class="subheader">Biography</h2>
					<p class="desc">{committee.biography}</p>
				</div>
				<div class="purpose">
					<h2 class="subheader">Purpose</h2>
					<p class="desc">{committee.purpose}</p>
				</div>

				<h2 class="subheader">Topics</h2>
				<ol class="topics">
					{#each committee.topics as topic}
						<li>{topic}</li>
					{/each}
				</ol>

				<div class="letters">
					<div class="chair">
						<h2 class="subheader">Chair's Letter</h2>
						<div class="content">
							<p>{@html committee.chair_letter}</p>
							<img class="img" src={committee.chair_photo} alt="" />
						</div>
					</div>

					<div class="co-chair">
						<h2 class="subheader">Co-Chair's Letter</h2>
						<div class="content">
							<p>{@html committee.cochair_letter}</p>
							<img class="img" src={committee.cochair_photo} alt="" />
						</div>
					</div>

					{#if committee.cochair2_letter}
						<div class="co-chair2">
							<h2 class="subheader">Co-Chair's Letter</h2>
							<div class="content">
								<p>{@html committee.cochair2_letter}</p>
								<img class="img" src={committee.cochair2_photo} alt="" />
							</div>
						</div>
					{/if}
				</div>
			</div>
		</Saos>

		<img class="shapes shape3" src={Shape6} alt="" />
		<img class="shapes shape4" src={Shape8} alt="" />
		<img class="shapes shape5" src={Shape2} alt="" />
		<img class="shapes shape6" src={Shape3} alt="" />
		<img class="shapes shape7" src={Shape4} alt="" />
		<img class="shapes shape8" src={Shape5} alt="" />
	{/each}

	<img class="lines line2" src={Line2} alt="" />
	<img class="blobs blob2" src={Blob2} alt="" />

	<img class="lines line1" src={Line1} alt="" />
	<img class="blobs blob3" src={Blob3} alt="" />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	:target {
		scroll-margin-top: 105px;
	}

	h1 {
		margin: 0;
		font-weight: 700;
	}

	* {
		font-family: 'Montserrat', sans-serif;
	}

	.lines,
	.blobs,
	.shapes {
		position: absolute;
		z-index: -1;
	}
	.line3 {
		top: 0;
		left: -120px;
		height: 900px;
	}
	.blob1 {
		top: 300px;
		left: -120px;
	}

	.line2 {
		right: 0;
		transform: rotate(25deg);
		top: 1200px;
		height: 1300px;
	}
	.blob2 {
		top: 2300px;
		right: 0;
	}

	.line1 {
		left: 0;
		top: 3500px;
	}
	.blob3 {
		left: -100px;
		top: 4000px;
	}

	.shapes {
		width: 100px;
		height: 100px;
	}
	.shape1 {
		top: 180px;
		right: 20px;
		transform: rotate(50deg);
		width: 200px;
		height: 130px;
	}
	.shape2 {
		top: 120px;
		left: 40px;
		transform: rotate(30deg);
		width: 140px;
	}
	.shape3 {
		top: 400px;
		right: 5px;
		transform: rotate(40deg);
	}
	.shape4 {
		top: 1000px;
		left: 24px;
	}
	.shape5 {
		top: 1900px;
		left: 0;
		transform: rotate(40deg);
	}
	.shape6 {
		top: 3000px;
		left: 0;
	}
	.shape7 {
		top: 3800px;
		right: 0;
	}
	.shape8 {
		top: 5000px;
		right: 0;
	}

	.header {
		text-align: center;
		margin: 46px 0 0 0;
		font-weight: 400;
	}
	.quickaccess {
		text-align: center;
		margin-top: 20px;
		margin-bottom: 42px;
	}
	.quickaccess-links {
		position: relative;
		margin-right: 18px;
		text-decoration: none;
		font-size: 20px;
		color: #2980b9;
		opacity: 0.8;
		transition: 0.25s;
	}
	.quickaccess-links:hover {
		opacity: 1;
		text-decoration: underline;
	}
	.quickaccess-links::after {
		content: '';
		position: absolute;
		right: -12px;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #ced3d9;
	}
	.quickaccess-links:last-child::after {
		display: none;
	}
	.quickaccess-links:last-child {
		margin-right: 0;
	}

	.committees {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr;
		gap: 16px;
		margin-bottom: 36px;
		position: relative;
		overflow: visible;
	}
	.committee {
		width: calc(100vw - 300px) !important;
		background-color: green;
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
	}
	.topics li {
		margin-bottom: 8px;
		font-size: 22px;
	}
	.letters {
		margin-top: 16px;
		background-image: linear-gradient(to bottom, grey, #000);
		padding: 8px 16px;
	}
	.letters .subheader {
		text-align: center;
		margin-bottom: 12px;
	}
	.letters .content {
		font-size: 22px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
	}
	.co-chair .content {
		flex-direction: row-reverse;
	}
	.letters p {
		flex: 0.85;
	}
	.letters .img {
		flex: 0.25;
		height: 380px;
	}
	.GA {
		background-image: linear-gradient(to bottom, #326198, #000);
	}
	.UNODC {
		background-image: linear-gradient(to bottom, #080a68, #000);
	}
	.WHO {
		background-image: linear-gradient(to bottom, #1f4e60, #000);
	}
	.DISEC {
		background-image: linear-gradient(to bottom, #d3bfa1, #000);
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
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px);
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
			width: calc(100vw - 60px) !important;
		}
		.lines,
		.blobs {
			display: none;
		}
		.line3 {
			display: block;
			left: -320px;
		}
	}
	@media screen and (max-width: 1300px) {
		.letters .content {
			flex-direction: column;
		}
		.letters .img {
			flex: 1;
			width: 220px;
			height: 180px;
		}
	}
	@media screen and (max-width: 470px) {
		.line3 {
			display: none;
		}
	}
</style>
