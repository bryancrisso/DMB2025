<script lang="ts">
	import TicketTypeCard from '$lib/TicketTypeCard.svelte';
</script>

<svelte:head>
	<title>DMB'25 Tickets</title>
</svelte:head>
<div class="relative flex w-full items-center justify-center bg-bg-primary p-4 pt-28">
	<div class="flex flex-col gap-6">
		<h1 class="text-center font-serif text-3xl text-white md:text-4xl">Tickets</h1>
		<h2 class="text-center font-serif text-2xl text-white md:text-3xl">
			Internal Release: 1pm on 30/01/2025
		</h2>
		<div class="items-center justify-center p-1">
			<div class="mx-auto max-w-7xl px-4 lg:px-24">
				<div class="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
					<TicketTypeCard
						name="Downing Student & Guests"
						price="£196"
						additional="Up to 4 guests, at £196 each"
						color="black"
					/>

					<TicketTypeCard
						name="Downing Student Full Bursary"
						price="£90"
						additional="Up to 4 guests, at £196 each"
						color="black"
					/>

					<TicketTypeCard
						name="Downing Alumni & Guests"
						price="£205"
						additional="Up to 2 guests, at £205 each"
						color="black"
					/>

					<TicketTypeCard
						name="Downing Fellows & Staff"
						price="£129"
						additional="Up to 2 guests, at £196 each"
						color="black"
					/>
				</div>
			</div>
		</div>
		<h2 class="text-center font-serif text-2xl text-white md:text-3xl">
			General Release: 1pm on 06/02/2025
		</h2>
		<div class="items-center justify-center p-1">
			<div class="mx-auto max-w-7xl px-4 lg:px-24">
				<div class="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
					<TicketTypeCard
						name="Cambridge University Student & Guests"
						price="£205"
						additional="Up to 2 guests, at £205 each"
						color="black"
					/>

					<TicketTypeCard
						name="Non-Cambridge Student & Guests"
						price="£210"
						additional="Up to 2 guests, at £210 each"
						color="black"
					/>
				</div>
			</div>
		</div>
		<h2 class="text-center font-serif text-2xl text-white md:text-3xl">Ticket Add-ons</h2>
		<div class="items-center justify-center p-1">
			<div class="mx-auto max-w-7xl px-4 lg:px-24">
				<div class="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
					<TicketTypeCard
						name="VIP"
						price="£35"
						additional="Join for the drinks reception and private viewing of the Heong Gallery"
						color="black"
					/>

					<TicketTypeCard name="Queue Jump" price="£15" additional="‏‏‎ ‎" color="black" />
				</div>
			</div>
		</div>
	</div>
</div>
