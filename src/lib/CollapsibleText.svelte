<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

	let { children, question }: { children: Snippet; question: string } = $props();

	let textOpen = $state(false);
	function textClick() {
		textOpen = !textOpen;
	}

	afterNavigate(() => {
		textOpen = false;
	});
</script>

<div class="mb-3 w-full flex-col items-center">
	<button class="w-full" onclick={textClick}>
		<h1 class="mb-1 text-left font-serif text-xl font-bold text-off-white md:text-2xl">
			{question}
		</h1>
		<div class="h-px w-full bg-off-white"></div>
	</button>
	{#if textOpen}
		<div transition:slide class="my-2">
			{@render children()}
		</div>
		<div class="h-px w-full bg-off-white"></div>
	{/if}
</div>
