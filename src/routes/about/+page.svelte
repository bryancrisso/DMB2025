<svelte:head>
	<title>About DMB'25</title>
</svelte:head>
<div
	class="relative flex h-screen w-full items-center justify-center bg-crimson
          bg-[url('/launch_graphics/svgs/bg_pattern_red.svg')] bg-cover bg-center bg-repeat-y p-4
  "
>
	<div class="relative flex flex-col items-center gap-6">
		<div class="relative">
			<img
				class="absolute left-1/2 top-1/2 z-0 origin-center -translate-x-1/2 -translate-y-2/3 scale-150 md:-translate-y-[60%]"
				src="/launch_graphics/svgs/scroll.svg"
				alt=""
			/>
			<h2 class="relative z-10 mb-8 text-center font-serif text-5xl text-dark-red md:text-7xl">
				About DMB'25
			</h2>
		</div>
		<p class="text-center font-serif text-2xl text-off-white md:text-3xl">
			Join us on the 24th of June!
		</p>
		<table class="font-serif text-lg text-off-white md:w-4/6 md:text-xl">
			<thead class="underline">
				<tr>
					<th class="text-left">Ticket Type</th>
					<th class="text-right">Entry time</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-left">Standard Ticket</td>
					<td class="text-right font-medium">8:30pm</td>
				</tr>
				<tr>
					<td class="text-left">Queue Jump Ticket</td>
					<td class="text-right font-medium">8:30pm</td>
				</tr>
				<tr>
					<td class="text-left">VIP Ticket</td>
					<td class="text-right font-medium">7:30pm</td>
				</tr>
			</tbody>
		</table>

		<p class="text-center font-serif text-xl text-off-white md:text-3xl">
			Survivors' photo is at <span class="font-medium md:text-2xl">5:30</span>am and event exit at
			6am
		</p>
	</div>
</div>
