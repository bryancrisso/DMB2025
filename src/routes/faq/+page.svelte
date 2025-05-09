<script lang="ts">
	import CollapsibleText from '$lib/CollapsibleText.svelte';
</script>

<svelte:head>
	<title>DMB'25 FAQ</title>
</svelte:head>
<div
	class="relative flex w-full items-center justify-center bg-crimson bg-[url('/launch_graphics/svgs/bg_pattern_red.svg')] bg-cover
          bg-center bg-repeat-y p-4 pt-28"
>
	<div class="flex w-full flex-col items-start gap-3 p-4">
		<h1 class="mb-12 self-center text-center font-serif text-6xl text-off-white md:text-8xl">
			FAQ
		</h1>
		<CollapsibleText question="How can I purchase a ticket to the Downing May Ball?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>Tickets can be purchased via our ticketing website.</p>
				<br />
				<p>1st (Internal Release):</p>
				<ul class="list-inside list-disc">
					<li>Downing Student & Guests</li>
					<li>Downing Full-Bursary Student</li>
					<li>Downing Alumni & Guests</li>
					<li>Downing Fellows & Staff</li>
					<li>Guests of Downing Fellows & Staff</li>
				</ul>
				<br />
				<p>2nd (General) Release:</p>
				<ul class="list-inside list-disc">
					<li>Cambridge University Student & Guests</li>
					<li>Non-Cambridge Student & Guests</li>
				</ul>
			</div>
		</CollapsibleText>

		<CollapsibleText question="When will tickets be released?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>The 1st (Internal) release will begin on the 30th of January at 1pm.</p>
				<p>The 2nd (General) release will begin on the 6th of February at 1pm.</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="How many guests am I allowed to bring?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>Downing Students are allowed to bring up to 4 guests.</p>
				<p>All other ticket types are allowed to bring up to 2 guests.</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="How much do tickets cost?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>The costs of a standard ticket (with no add-ons) are:<br />‏‏‎ ‎</p>
				<table class="md:w-2/6">
					<thead class="font-bold">
						<tr>
							<th class=" border-b-[1px] border-white text-left">Ticket Type</th>
							<th class="border-b-[1px] border-white text-right">Ticket Price</th>
						</tr>
					</thead>
					<tbody class="font-light">
						<tr>
							<td class="border-b-[1px] border-white text-left">Downing Student & Guests</td>
							<td class="border-b-[1px] border-white text-right">£196</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left"
								>Cambridge University Student & Guests</td
							>
							<td class="border-b-[1px] border-white text-right">£205</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left">Downing Alumni & Guests</td>
							<td class="border-b-[1px] border-white text-right">£205</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left">Downing Full-Bursary Student</td>
							<td class="border-b-[1px] border-white text-right">£90</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left">Downing Fellows & Staff</td>
							<td class="border-b-[1px] border-white text-right">£129</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left">Guests of Downing Fellow & Staff</td
							>
							<td class="border-b-[1px] border-white text-right">£196</td>
						</tr>
						<tr>
							<td class="border-b-[1px] border-white text-left">Non-Cambridge Student* & Guests</td>
							<td class="border-b-[1px] border-white text-right">£210</td>
						</tr>
					</tbody>
				</table>
				<p>
					<br />
					*Non-Cambridge student ticket holders must either be alumni, fellows, or members of staff within
					the collegiate University of Cambridge.
				</p>
			</div>
		</CollapsibleText>
		<CollapsibleText question="What upgrades are available?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					You can opt to purchase an add-on when buying your ticket. The prices of the add-ons are:
				</p>
				<ul class="list-inside list-disc">
					<li>Queue Jump - £15</li>
					<li>VIP - £35</li>
				</ul>
				<p>
					If you would like to purchase an add-on after you have bought your standard ticket, please
					contact <a class="underline" href="mailto:ticketing@downingball.co.uk"
						>ticketing@downingball.co.uk</a
					>.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="What are the admission times?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>Standard and queue jump entrance will begin at 8:30pm, with last entry at 10:30pm.</p>
				<p>
					VIP ticket holders are allowed to enter the ball from 7:30pm onwards, with the VIP
					reception commencing at 7:45pm.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Can I change the name on my ticket?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Name changes up to and including the 8th June 2025 will be subject to a £20 administration
					fee for tickets or £5 administration fee for add-ons, as well as for any other change of
					details (such as address).
				</p>
				<p>
					From the 9th June 2025 to 1pm on the 23rd June 2025, changes will incur an administration
					fee of £40 to tickets and a £10 administration fee for add-ons. No changes will be
					permitted after 1pm on the 23rd June 2025.
				</p>
				<p>To change the name on a ticket:</p>
				<ol class="ml-2 list-inside list-decimal">
					<li>Go to the ticketing website.</li>
					<li>Purchase either the "Name Change for Tickets" or "Name Change for Add-Ons" extra.</li>
					<li>
						Immediately fill out <a href="https://forms.gle/GprDqVKqkt5dnwT37" class="underline"
							>this form</a
						>.
					</li>
				</ol>
				<p>
					Any issues, please contact <a class="underline" href="mailto:ticketing@downingball.co.uk"
						>ticketing@downingball.co.uk</a
					>.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText
			question="What happens if someone tries to sell a ticket to Downing May Ball for a profit?"
		>
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Tickets and add-ons may not be resold for a value higher than their purchase price. The
					Committee reserves the right to cancel any tickets or add-ons that a holder has either
					sold or attempted to sell for greater than the purchase price. If a ticket or add-on is
					cancelled for this reason, refunds will not be available to either seller or purchaser.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Can I refund my ticket?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Unfortunately, we can only process refunds for accessibility reasons. The ticket holder is
					entitled to a refund if they have a change in illness/disability that means the event is
					no longer accessible to them, or, if amendments to the Downing May Ball access statement
					makes the Ball no longer accessible to them. No medical evidence will be required.
				</p>
				<p>
					The Applicant should email the Ticketing Officer (<a
						class="underline"
						href="mailto:ticketing@downingball.co.uk">ticketing@downingball.co.uk</a
					>
					), or the Accessibility/Welfare Officer (<a
						class="underline"
						href="mailto:asw@downingball.co.uk">asw@downingball.co.uk</a
					>
					) to request a refund.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="What is the dress code?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					The dress code is Black Tie, Military Mess Dress, Highland dress, or equivalent national
					dress; dresses should be of a comparable standard. Sports blazers are not allowed. Anyone
					wearing attire associated with drinking societies will not be granted entry into the Ball.
					Further guidance on the dress code may be sought from the President (<a
						class="underline"
						href="mailto:president@downingball.co.uk"
						>president@downingball.co.uk
					</a>).
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="What do I need to bring to the Ball?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Valid photographic identification (passports, driving licences or physical cards issued
					under the PASS scheme). Purchasers of the Downing Student or current Cambridge Student
					ticket types must also bring their University Card. Originals must be brought -
					photocopies, images or other duplicates of identification will not be accepted.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText
			question="Do I qualify for a reduced ticket price if I do not receive the full Cambridge bursary? Do I qualify for a reduced ticket price if I receive the full Cambridge bursary, but I am not at Downing?"
		>
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Unfortunately we are only able to offer reduced price tickets to Downing students on the
					full Cambridge bursary.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText
			question="I am a Downing Student who receives the full Cambridge bursary, do I need to send evidence?"
		>
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>You do not. The Committee will confirm your bursary status with the College.</p>
			</div>
		</CollapsibleText>

		<CollapsibleText
			question="If I am intermitting at the time of the May Ball, can I still attend?"
		>
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					You unfortunately are not able to attend if you are intermitting at the time of the Ball,
					due to University policy. Any student who intermits in the time between buying a ticket
					and the date of the Ball is eligible for a refund by contacting the ticketing officer at
					<a class="underline" href="mailto:ticketing@downingball.co.uk">
						ticketing@downingball.co.uk
					</a>.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Is re-entry permitted?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>Due to the security complexities of the May Ball, re-entry is not permitted.</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Can I bring a bag?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Ticket holders are permitted to bring, if they wish, a small bag no exceeding 30cm x 15cm
					x 10cm in size. Spare shoes should be carried by hand or contained within a small foldable
					bag.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Is smoking prohibited during the May Ball?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Smoking is only permitted in the designated smoking areas, and is strictly prohibited in
					the rest of the Ball site.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="What should I do if I have accessibility requirements?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Ticket holders with accessibility requirements should email
					<a class="underline" href="mailto:asw@downingball.co.uk">asw@downingball.co.uk</a>
					as soon as possible to ensure any arrangements can be made.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="What if I require an accompanying carer?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					Any ticket holder who, by any reasonable assessment, requires an accompanying carer to be
					able to attend the Ball shall be entitled to request one free ticket for this carer. This
					request should be made in writing to <a
						class="underline"
						href="mailto:ticketing@downingball.co.uk">ticketing@downingball.co.uk</a
					> at the time of purchase. The final decision to issue such a ticket lies solely with the Downing
					May Ball Committee.
				</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Will there be a quiet space?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>A quiet room will be provided, and will be wheelchair accessible.</p>
			</div>
		</CollapsibleText>

		<CollapsibleText question="Any other questions?">
			<div class="pl-2 text-left font-medium text-base font-bold text-very-off-white md:text-lg">
				<p>
					If you cannot find the answer to your question, please consult our Terms and Conditions,
					or contact the relevant committee member.
				</p>
			</div>
		</CollapsibleText>
	</div>
</div>
