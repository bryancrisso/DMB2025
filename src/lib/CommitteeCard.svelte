<script lang="ts">
	let { name, role, email, domain, image = '' } = $props();
</script>

<div
	class="inline h-80 w-full flex-col items-center justify-center border-2 border-solid border-bg-primary p-4 text-center"
>
	<div class="mb-5 flex h-1/2 flex-col items-center justify-center">
		{#if image == ''}
			<div class="aspect-1 h-full rounded-full bg-gray-900"></div>
		{:else}
			<img class="aspect-1 h-full rounded-full" src={image} alt="Committee member headshot" />
		{/if}
	</div>
	<div class="h-1/2">
		<h3 class="text-xl font-bold text-bg-primary">{name}</h3>
		<p class="text-center font-serif text-lg font-medium text-gray-600">{role}</p>
		<p class="text-wrap text-center font-serif text-sm font-medium text-gray-400">
			<a class="underline" href="mailto:{email}@{domain}">{email}<wbr />@{domain}</a>
		</p>
	</div>
</div>
