<script lang="ts">
	let { name, price, additional } = $props();
</script>

<div
	class="relative h-64 w-72 rounded-lg border-2
  border-solid border-crimson bg-darkest-red p-4 text-center"
>
	<div class="flex h-4/5 flex-col items-center justify-center">
		<p class="text-wrap text-center font-medium font-serif text-lg text-very-off-white">
			{additional}
		</p>
		<h3 class="text-3xl font-bold text-very-off-white">{name}</h3>
		<p class="text-center font-medium font-serif text-6xl text-very-off-white">{price}</p>
	</div>
	<div class="absolute -bottom-16">
		<img src="/launch_graphics/svgs/pictorial.svg" alt="" />
	</div>
</div>
