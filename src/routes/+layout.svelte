<script lang="ts">
	import '../app.css';
	import {
		IconBrandInstagram,
		IconBrandTiktok,
		IconMenu2,
		IconX,
		IconAccessible
	} from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let hamburgerOpen = $state(false);
	function hamburgerClick() {
		hamburgerOpen = !hamburgerOpen;
	}

	afterNavigate(() => {
		hamburgerOpen = false;
	});
</script>

<div class="relative">
	{@render children()}
	<!-- desktop navbar -->
	<nav class="hidden md:inline">
		<ul class="absolute right-0 top-0 m-0 w-full list-none overflow-hidden">
			<li class="float-left inline p-3 text-center font-serif text-xl text-white">
				<a href="/" class="">
					<img
						class="ml-5 mt-4 w-48 duration-200 hover:scale-110"
						src="/launch_graphics/svgs/wordmark.svg"
						alt="DMB'25"
					/>
				</a>
			</li>
			<div class="relative">
				<img
					class="absolute -right-0 -top-px z-0 w-[500px]"
					src="/launch_graphics/svgs/navbar.svg"
					alt=""
				/>
				<li
					class="absolute right-[20px] top-0 z-10 float-right inline p-3 text-center font-serif text-3xl text-crimson"
				>
					<a href="/faq" class="hover:underline">FAQ</a>
				</li>
				<li
					class="absolute right-[84px] top-1 z-10 float-right inline p-3 text-center font-serif text-3xl text-crimson"
				>
					<a href="/about" class="hover:underline">About</a>
				</li>
				<li
					class="absolute right-[170px] top-2 z-10 float-right inline p-3 text-center font-serif text-3xl text-crimson"
				>
					<a href="/#ticketing" class="hover:underline">Tickets</a>
				</li>
				<li
					class="absolute right-[280px] top-3 z-10 float-right inline p-3 text-center font-serif text-3xl text-crimson"
				>
					<a href="/work" class="hover:underline">Work for us</a>
				</li>
			</div>
		</ul>
	</nav>
	<!-- mobile navbar -->
	<nav class="md:hidden">
		<ul class="absolute left-0 right-0 top-0 m-2 list-none bg-darkest-red">
			<li class="float-left inline p-3 text-center font-serif text-2xl text-dark-gold">
				<a href="/">DMB'25</a>
			</li>
			<li
				class="float-right inline flex-none flex-col items-end p-4 text-right font-serif text-xl text-dark-gold"
			>
				<button onclick={hamburgerClick}>
					{#if !hamburgerOpen}
						<IconMenu2 />
					{:else}
						<IconX class="self-end" />
					{/if}
				</button>
				{#if hamburgerOpen}
					<div class="mt-6 flex flex-col gap-2" transition:slide>
						<a href="/faq" class="text-off-white">FAQ</a>
						<a href="/about" class="text-off-white">About</a>
						<a href="/#ticketing" class="text-off-white">Tickets</a>
						<a href="/work" class="text-off-white">Work for us</a>
					</div>
				{/if}
			</li>
		</ul>
		<!-- <img class="absolute top-0 z-0 w-full" src="launch_graphics/svgs/banner.svg" alt="" /> -->
	</nav>

	<!-- Accessibility Button -->
	<div class="fixed bottom-0 right-0 z-20 m-5">
		<!-- Container for larger background circle -->
		<div class="relative flex items-center justify-center">
			<!-- Black background circle -->
			<div class="absolute flex h-14 w-14 items-center justify-center rounded-full bg-black"></div>
			<!-- Accessibility icon -->
			<div class="relative z-20">
				<a
					href="https://docs.google.com/document/d/1Ztgzy5PvDuxUrvAWgnQcqgjIwAZ1ObJPLwr9s2w9VAA/edit?usp=sharing"
					><IconAccessible size={48} class="text-white" /></a
				>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="bg-very-off-white">
		<img class="w-full lg:-mb-[88px]" src="/launch_graphics/svgs/border-3.svg" alt="" />
		<div class="flex flex-col items-center gap-3 p-8">
			<div class="flex flex-row items-center">
				<a
					class="w-auto p-3 text-darkest-red duration-100 hover:scale-110 hover:animate-pulse"
					href="https://www.instagram.com/downingmayball/"
				>
					<IconBrandInstagram size={32} />
				</a>
				<a
					class="p-3 text-darkest-red duration-100 hover:scale-110 hover:animate-pulse"
					href="https://www.tiktok.com/@downingmayball"
				>
					<IconBrandTiktok size={32} />
				</a>
			</div>
			<a
				class="text-center font-serif text-xl font-extrabold text-darkest-red hover:underline"
				href="/Terms & Conditions DMB 2025.pdf">Terms & Conditions</a
			>
			<a
				class="text-center font-serif text-xl font-extrabold text-darkest-red hover:underline"
				href="/DPS - May Ball v.6.6.pdf">Data Protection Statement</a
			>
			<p class="text-center font-serif text-2xl font-bold text-darkest-red">Address</p>
			<p class="text-center font-serif text-lg text-darkest-red">
				Downing College May Ball<br />Downing College<br />Regent St, Cambridge<br />CB2 1DQ
			</p>
			<p class="text-center font-serif text-lg text-crimson">
				Creative design by Molly Ollivier. Website implementation and photography by Bryan Abi Karam
			</p>
			<p class="text-center font-serif text-lg text-crimson">
				Copyright © 2025 Downing College May Ball - VAT Number: 905135158
			</p>
		</div>
	</footer>
</div>
