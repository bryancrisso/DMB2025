<script>
	import CommitteeCard from '$lib/CommitteeCard.svelte';
	import TicketTypeCard from '$lib/TicketTypeCard.svelte';
</script>

<svelte:head>
	<title>DMB'25</title>
</svelte:head>
<div>
	<!-- front page -->
	<div class="relative flex w-full flex-col items-center justify-center">
		<!-- Main graphic -->
		<div class="flex min-h-screen flex-col items-center justify-center md:pt-16">
			<h1 class="text-center text-7xl tracking-wide text-dark-red">DMB'25</h1>
			<h2 class="text-center text-3xl tracking-wide text-dark-red">Presents</h2>
			<img
				class="z-10 -mt-7 h-full md:-mt-14"
				src="/launch_graphics/svgs/main_graphic.svg"
				alt="Downing May Ball 2025"
			/>
		</div>
		<div
			class="relative -mt-48 flex w-full flex-col items-center
      justify-center bg-crimson bg-[url('/launch_graphics/svgs/bg_pattern_red.svg')] bg-contain bg-center
      bg-repeat-y pt-48 md:pt-64"
		>
			<img class="z-10 w-full md:w-4/6" src="/launch_graphics/svgs/monogram.svg" alt="" />
			<img class="z-10 -mb-5 mt-32 w-4/5 md:w-1/2" src="/launch_graphics/svgs/boat.svg" alt="" />
			<img class="z-10 -mb-[10px] w-full" src="/launch_graphics/svgs/border-2.svg" alt="" />
		</div>
	</div>
</div>
<!-- Ticketing Section -->
<div
	class="flex
      min-h-screen flex-col items-center bg-very-off-white"
>
	<div
		class="
  flex flex-col items-center gap-8 bg-[url('/launch_graphics/svgs/bg_pattern_white.svg')]
bg-contain bg-center bg-repeat-y pb-28 pt-20 md:bg-cover
    "
	>
		<h1 id="ticketing" class="text-center text-7xl tracking-wide text-crimson">Tickets</h1>
		<a
			href="https://buytickets.at/dmb2025/1515725"
			class="text-center font-serif text-4xl tracking-wide text-royal-purple underline duration-100 hover:scale-105"
		>
			Buy tickets here
		</a>

		<div class="items-center justify-center p-1">
			<div class="mx-auto max-w-3xl px-4">
				<div class="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
					<TicketTypeCard
						name="Downing Student & Guests"
						price="£196"
						additional="Up to 4 guests, at £196 each"
					/>

					<TicketTypeCard
						name="Downing Student Full Bursary"
						price="£90"
						additional="Up to 4 guests, at £196 each"
					/>

					<TicketTypeCard
						name="Downing Alumni & Guests"
						price="£205"
						additional="Up to 4 guests, at £205 each"
					/>

					<TicketTypeCard
						name="Downing Fellows & Staff"
						price="£129"
						additional="Up to 4 guests, at £196 each"
					/>

					<TicketTypeCard
						name="Cambridge University Student & Guests"
						price="£205"
						additional="Up to 2 guests, at £205 each"
					/>

					<TicketTypeCard
						name="Non-Cambridge Student & Guests"
						price="£210"
						additional="Up to 2 guests, at £210 each"
					/>

					<TicketTypeCard
						name="Robinson College Student & Guests"
						price="£196"
						additional="Up to 2 guests, at £205 each"
					/>

					<TicketTypeCard
						name="Emmanuel College Student & Guests"
						price="£196"
						additional="Up to 2 guests, at £205 each"
					/>
				</div>
			</div>
		</div>
		<h1 class="mt-8 text-center text-6xl tracking-wide text-crimson md:text-7xl">Ticket Add-ons</h1>
		<div class="items-center justify-center p-1">
			<div class="mx-auto max-w-3xl px-4">
				<div class="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
					<TicketTypeCard
						name="VIP"
						price="£35"
						additional="Drinks reception & viewing of the Heong Gallery at 7:30pm"
					/>

					<TicketTypeCard name="Queue Jump" price="£15" additional="‏‏‎ ‎" />
				</div>
			</div>
		</div>
	</div>
	<div class="h-8 bg-very-off-white"></div>
	<div class="flex w-full -scale-y-100 flex-row">
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
	</div>
	<img class="z-10 w-full" src="/launch_graphics/svgs/border-4.svg" alt="" />
	<div class="flex w-full flex-row">
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<img class="z-10 w-1/5" src="/launch_graphics/svgs/border-3.svg" alt="" />
	</div>
</div>
<!-- Committee Section -->
<!-- committee roles go here - 3x columns of name blocks/roles -->
<div class="h-4 bg-dark-gold"></div>
<div
	class="flex min-h-screen flex-col items-center justify-center bg-dark-gold bg-[url(/launch_graphics/curtains.png)] bg-top bg-repeat-y p-8 pt-16"
>
	<div class="relative">
		<h1 class="text-center text-7xl tracking-wide text-dark-gold">Committee</h1>
		<img
			class="absolute -bottom-6 -left-11 h-20 rotate-90"
			src="/launch_graphics/svgs/wreath.svg"
			alt=""
		/>
		<img
			class="absolute -right-6 -top-1.5 h-14 -rotate-90"
			src="/launch_graphics/svgs/wreath.svg"
			alt=""
		/>
	</div>
	<div class="mb-8 mt-16 px-4 lg:px-24">
		<div class="grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-2 xl:grid-cols-3">
			<CommitteeCard
				name="Finn Lavington"
				role="President"
				email="president"
				domain="downingball.co.uk"
				image="color_headshots/IMG_0711.jpg"
			/>

			<CommitteeCard
				name="Ivan Alexei Ampiah"
				role="Vice President (Creative)"
				email="vice-president-creative"
				domain="downingball.co.uk"
				image="color_headshots/IMG_0656.jpg"
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
				email="vice-president-operations"
				domain="downingball.co.uk"
				image="color_headshots/IMG_0691.jpg"
			/>

			<CommitteeCard
				name="Emily Darnell"
				role="Committee Consultant"
				email="ed589"
				domain="cam.ac.uk"
				image="color_headshots/IMG_0701.jpg"
			/>

			<CommitteeCard
				name="Connor Dennis"
				role="Drinks"
				email="drinks"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9629.jpg"
			/>

			<CommitteeCard
				name="Thomas Quail"
				role="Drinks"
				email="drinks"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9636.jpg"
			/>

			<CommitteeCard
				name="Arun Gill"
				role="Musical Ents"
				email="music"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9666.jpg"
			/>

			<CommitteeCard
				name="James Waine"
				role="Non-Musical Ents"
				email="ents"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9623.jpg"
			/>

			<CommitteeCard
				name="Imogen Knight"
				role="Aesthetics"
				email="aesthetics"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9664.jpg"
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
				image="color_headshots/IMG_9632.jpg"
			/>

			<CommitteeCard
				name="Aditya Chougule"
				role="Food"
				email="food"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9662.jpg"
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
				image="color_headshots/IMG_9693.jpg"
			/>

			<CommitteeCard
				name="Alex Shirley"
				role="Logistics"
				email="logistics"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9667.jpg"
			/>

			<CommitteeCard
				name="Stella Wilson"
				role="Logistics"
				email="logistics"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9626.jpg"
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
				image="color_headshots/IMG_9627.jpg"
			/>

			<CommitteeCard
				name="Bryan Abi Karam"
				role="Webmaster"
				email="webmaster"
				domain="downingball.co.uk"
				image="color_headshots/IMG_0706.jpg"
			/>

			<CommitteeCard
				name="Tom Mills"
				role="Security and Safety"
				email="security"
				domain="downingball.co.uk"
				image="color_headshots/IMG_9720.jpg"
			/>

			<CommitteeCard
				name="Molly Ollivier"
				role="Graphics"
				email="graphics"
				domain="downingball.co.uk"
			/>
		</div>
	</div>
</div>
