<script lang="ts">
	let { name, price, additional, color } = $props();
</script>

{#if color == 'white'}
	<div
		class="flex h-40 w-full flex-col items-center justify-center border-2 border-solid border-bg-primary p-4 text-center"
	>
		<h3 class="text-xl font-bold text-bg-primary">{name}</h3>
		<p class="text-center font-serif text-lg font-medium text-gray-600">{price}</p>
		<p class="text-wrap text-center font-serif text-sm font-medium text-gray-400">
			{additional}
		</p>
	</div>
{:else}
	<div
		class="flex h-40 w-full flex-col items-center justify-center border-2 border-solid border-white bg-black p-4 text-center"
	>
		<h3 class="text-xl font-bold text-white">{name}</h3>
		<p class="text-center font-serif text-lg font-medium text-gray-200">{price}</p>
		<p class="text-wrap text-center font-serif text-sm font-medium text-gray-300">
			{additional}
		</p>
	</div>
{/if}
