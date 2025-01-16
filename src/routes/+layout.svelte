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
		<ul class="absolute right-0 top-0 m-0 w-full list-none overflow-hidden pl-8 pr-8 pt-7">
			<li class="float-left inline p-3 text-center font-serif text-xl text-white">
				<a href="/" class="hover:underline">DMB'25</a>
			</li>
			<li class="float-right inline p-3 text-center font-serif text-xl text-white">
				<a href="/faq" class="hover:underline">FAQ</a>
			</li>
			<li class="float-right inline p-3 text-center font-serif text-xl text-white">
				<a href="/about" class="hover:underline">About</a>
			</li>
			<li class="float-right inline p-3 text-center font-serif text-xl text-white">
				<a href="/tickets" class="hover:underline">Tickets</a>
			</li>
			<li class="float-right inline p-3 text-center font-serif text-xl text-white">
				<a href="/work" class="hover:underline">Work for us</a>
			</li>
		</ul>
	</nav>
	<!-- mobile navbar -->
	<nav class="md:hidden">
		<ul class="absolute top-0 m-0 w-full list-none overflow-hidden bg-black p-4">
			<li class="float-left inline p-3 text-center font-serif text-xl text-white">
				<a href="/">DMB'25</a>
			</li>
			<li
				class="float-right inline flex-none flex-col items-end p-3 text-right font-serif text-xl text-white"
			>
				<button onclick={hamburgerClick}>
					{#if !hamburgerOpen}
						<IconMenu2 />
					{:else}
						<IconX class="self-end" />
					{/if}
				</button>
				{#if hamburgerOpen}
					<div class="flex flex-col gap-2" transition:slide>
						<a href="/faq" class="text-white">FAQ</a>
						<a href="/about" class="text-white">About</a>
						<a href="/tickets" class="text-white">Tickets</a>
						<a href="/work" class="text-white">Work for us</a>
					</div>
				{/if}
			</li>
		</ul>
	</nav>
	<!-- Accessibility Button -->
	<div class="fixed bottom-0 right-0 m-5">
		<!-- Container for larger background circle -->
		<div class="relative flex items-center justify-center">
			<!-- Black background circle -->
			<div class="absolute flex h-14 w-14 items-center justify-center rounded-full bg-black"></div>
			<!-- Accessibility icon -->
			<div class="relative z-10">
				<a
					href="https://docs.google.com/document/d/1Ztgzy5PvDuxUrvAWgnQcqgjIwAZ1ObJPLwr9s2w9VAA/edit?usp=sharing"
					><IconAccessible size={48} class="text-white" /></a
				>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="bg-black p-8">
		<div class="flex flex-col items-center gap-3">
			<div class="flex flex-row items-center">
				<a
					class="w-auto p-3 text-white hover:scale-110 hover:animate-pulse"
					href="https://www.instagram.com/downingmayball/"
				>
					<IconBrandInstagram />
				</a>
				<a
					class="p-3 text-white hover:scale-110 hover:animate-pulse"
					href="https://www.tiktok.com/@downingmayball"
				>
					<IconBrandTiktok />
				</a>
			</div>
			<a
				class="text-center font-serif text-base font-extrabold text-white hover:underline"
				href="Terms & Conditions DMB 2025.pdf">Terms & Conditions</a
			>
			<p class="text-center font-serif text-lg font-bold text-white">Address</p>
			<p class="text-md text-center font-serif text-white">
				Downing College May Ball<br />Downing College<br />Regent St, Cambridge<br />CB2 1DQ
			</p>
			<p class="text-center font-serif text-sm text-gray-200">
				Creative design by Abraham Villers. Website implementation and photography by Bryan Abi
				Karam
			</p>
			<p class="text-center font-serif text-sm text-gray-200">
				Copyright © 2025 Downing College May Ball - VAT Number: 905135158
			</p>
		</div>
	</footer>
</div>
