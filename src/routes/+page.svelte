<script>
	import CommitteeCard from '$lib/CommitteeCard.svelte';
	import { blur } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>DMB'25</title>
</svelte:head>
<div class="relative flex h-screen w-full items-center justify-center bg-bg-primary p-4">
	<div class="flex flex-col gap-6">
		<!-- <h2 class="text-center text-3xl font-light tracking-wide text-white md:text-4xl"> -->
		<!-- 	Returning on Tuesday the 24th of June 2025 -->
		<!-- </h2> -->
		<h2 class="text-center font-serif text-4xl text-white">24/06/2025</h2>
		<img in:blur src="badge.png" class="max-h-[70vh] md:max-h-[60vh]" alt="Downing May Ball 2025" />
		<Typewriter interval={100}>
			<h2 class="text-center font-serif text-xl text-white md:text-3xl">
				"What will survive of us is love."
			</h2>
		</Typewriter>
	</div>
	<div class="absolute bottom-4 animate-bounce">
		<svg
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	</div>
</div>

<!-- Committee Section -->
<div>
	<!-- committee roles go here - 3x columns of name blocks/roles -->
	<div class="min-h-screen items-center justify-center p-8">
		<h1 class="text-center text-5xl tracking-wide text-bg-primary md:text-7xl">Committee</h1>
		<div class="mx-auto mb-16 mt-16 max-w-7xl px-4 lg:px-24">
			<div class="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
				<CommitteeCard
					name="Finn Lavington"
					role="President"
					email="president"
					domain="downingball.co.uk"
					image="headshots/IMG_0711.jpg"
				/>

				<CommitteeCard
					name="Ivan Alexei Ampiah"
					role="Vice President (Creative)"
					email="vice-president-creative"
					domain="downingball.co.uk"
					image="headshots/IMG_0656.jpg"
				/>

				<CommitteeCard
					name="Cameron Lackey"
					role="Treasurer"
					email="treasurer"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="Senya Kang"
					role="Vice President (Operations)"
					email="vice-president-creative"
					domain="downingball.co.uk"
					image="headshots/IMG_0687.jpg"
				/>

				<CommitteeCard
					name="Emily Darnell"
					role="Committee Consultant"
					email="ed589"
					domain="cam.ac.uk"
					image="headshots/IMG_0701.jpg"
				/>

				<CommitteeCard
					name="Connor Dennis"
					role="Drinks"
					email="drinks"
					domain="downingball.co.uk"
					image="headshots/IMG_9629.jpg"
				/>

				<CommitteeCard
					name="Thomas Quail"
					role="Drinks"
					email="drinks"
					domain="downingball.co.uk"
					image="headshots/IMG_9636.jpg"
				/>

				<CommitteeCard
					name="Arun Gill"
					role="Musical Ents"
					email="music"
					domain="downingball.co.uk"
					image="headshots/IMG_9666.jpg"
				/>

				<CommitteeCard
					name="James Waine"
					role="Non-Musical Ents"
					email="ents"
					domain="downingball.co.uk"
					image="headshots/IMG_9623.jpg"
				/>

				<CommitteeCard
					name="Imogen Knight"
					role="Aesthetics"
					email="aesthetics"
					domain="downingball.co.uk"
					image="headshots/IMG_9664.jpg"
				/>

				<CommitteeCard
					name="Abraham Villiers"
					role="Aesthetics"
					email="aesthetics"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="Charlotte Crawley"
					role="Aesthetics"
					email="aesthetics"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="Aleena Benson"
					role="Food"
					email="food"
					domain="downingball.co.uk"
					image="headshots/IMG_9632.jpg"
				/>

				<CommitteeCard
					name="Aditya Chougule"
					role="Food"
					email="food"
					domain="downingball.co.uk"
					image="headshots/IMG_9662.jpg"
				/>

				<CommitteeCard
					name="Mia Urwin"
					role="Personnel"
					email="personnel"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="Dana Marlow"
					role="Personnel"
					email="personnel"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="James Jefferson"
					role="Ticketing"
					email="ticketing"
					domain="downingball.co.uk"
					image="headshots/IMG_9693.jpg"
				/>

				<CommitteeCard
					name="Alex Shirley"
					role="Logistics"
					email="logistics"
					domain="downingball.co.uk"
					image="headshots/IMG_9667.jpg"
				/>

				<CommitteeCard
					name="Stella Wilson"
					role="Logistics"
					email="logistics"
					domain="downingball.co.uk"
					image="headshots/IMG_9626.jpg"
				/>

				<CommitteeCard
					name="Marcus Cloke Brown"
					role="Production"
					email="production"
					domain="downingball.co.uk"
				/>

				<CommitteeCard
					name="Rosie Egelie"
					role="Accessibility, Sustainability & Welfare"
					email="asw"
					domain="downingball.co.uk"
					image="headshots/IMG_9627.jpg"
				/>

				<CommitteeCard
					name="Bryan Abi Karam"
					role="Webmaster"
					email="webmaster"
					domain="downingball.co.uk"
					image="headshots/IMG_0706.jpg"
				/>

				<CommitteeCard
					name="Tom Mills"
					role="Security and Safety"
					email="security"
					domain="downingball.co.uk"
					image="headshots/IMG_9720.jpg"
				/>

				<CommitteeCard
					name="Molly Olivier"
					role="Graphics"
					email="graphics"
					domain="downingball.co.uk"
				/>
			</div>
		</div>
	</div>
</div>
