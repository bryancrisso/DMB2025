<script lang="ts">
	let { name, role, email, domain, image = '' } = $props();
</script>

<div
	class="relative inline h-80 w-80 flex-col items-center justify-center rounded-lg border-2 border-solid border-dark-gold bg-royal-purple p-3 text-center"
>
	<h3 class="text-3xl font-bold text-dark-gold">{name}</h3>
	<div class="my-2 flex h-[60%] flex-col items-center justify-center">
		{#if image == ''}
			<div
				class="flex aspect-1 h-full items-center justify-center rounded-lg border-2 border-dark-gold bg-purple-950"
			>
				<img class="h-4/5" src="/launch_graphics/svgs/coin.svg" alt="" />
			</div>
		{:else}
			<img
				class="aspect-1 h-full rounded-lg border-2 border-dark-gold"
				src={image}
				alt="Committee member headshot"
			/>
		{/if}
	</div>
	<div>
		<p class="text-center font-serif text-xl font-medium text-dark-gold">{role}</p>
		<p class="text-md text-wrap text-center font-serif font-medium text-off-white">
			<a class="underline" href="mailto:{email}@{domain}">{email}<wbr />@{domain}</a>
		</p>
	</div>
	<img
		class="absolute -right-10 -top-6 h-24 -rotate-90"
		src="/launch_graphics/svgs/wreath.svg"
		alt=""
	/>
	<img
		class="absolute -bottom-6 -left-10 h-24 rotate-90"
		src="/launch_graphics/svgs/wreath.svg"
		alt=""
	/>
</div>
