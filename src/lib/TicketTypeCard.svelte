<script lang="ts">
	let { name, price, additional } = $props();
</script>

<div
	class="bg-darkest-red relative h-64 w-72 rounded-lg
  border-2 border-solid border-crimson p-4 text-center"
>
	<div class="flex h-4/5 flex-col items-center justify-center">
		<p class="text-wrap text-center font-serif text-lg font-medium text-crimson">
			{additional}
		</p>
		<h3 class="text-3xl font-bold text-crimson">{name}</h3>
		<p class="text-center font-serif text-6xl font-medium text-crimson">{price}</p>
	</div>
	<div class="absolute -bottom-16">
		<img src="/launch_graphics/svgs/pictorial.svg" alt="" />
	</div>
</div>
