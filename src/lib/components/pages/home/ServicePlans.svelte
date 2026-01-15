<script lang="ts">
	import { common } from '$lib/lang/en/common';
	import { home } from '$lib/lang/en/pages/home';
</script>

<!-- Service Plans -->
<section
	id="plans"
	class="from-slate-50 to-white py-16 dark:from-slate-900 dark:to-slate-950 bg-gradient-to-b"
>
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
		<header class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
				{home.sections.servicePlans.title}
			</h2>
			<p class="mt-3 text-slate-600 dark:text-slate-300">{home.sections.servicePlans.subtitle}</p>
		</header>
		<div class="mt-12 gap-8 lg:grid-cols-2 lg:items-stretch grid">
			<!-- Essentials -->
			<article
				class="rounded-3xl border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900/50 relative flex flex-col border transition-all duration-300"
			>
				<div class="flex-1">
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.servicePlans.plans.essentials.title}
						</h3>
						<div class="bg-cyan-50 p-2 dark:bg-cyan-900/30 rounded-full">
							<svg
								class="h-6 w-6 text-cyan-600 dark:text-cyan-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"
							>
								<path
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
					<p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.essentials.description}
					</p>

					<div class="mt-8 border-slate-100 pt-8 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.servicePlans.plans.essentials.items as item}
								<li class="gap-3 flex items-start">
									<svg
										class="mt-0.5 h-5 w-5 text-cyan-600 dark:text-cyan-400 flex-none"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
					<p
						class="text-xs font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase"
					>
						{home.sections.servicePlans.plans.essentials.builtFor.label}
					</p>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.essentials.builtFor.text}
					</p>
					<div class="mt-6">
						<a
							href="#contact"
							class="gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white flex w-full items-center justify-center transition-all focus:outline-none"
						>
							{common.buttons.inquireAboutEssentials}
						</a>
					</div>
				</div>
			</article>

			<!-- Complete -->
			<article
				class="rounded-3xl border-blue-600 bg-white p-8 shadow-xl dark:bg-slate-900 relative flex flex-col border-2 transition-all duration-300"
			>
				<div
					class="-top-4 bg-blue-600 px-4 py-1 text-xs font-bold tracking-widest text-white absolute left-1/2 -translate-x-1/2 rounded-full uppercase"
				>
					{home.sections.servicePlans.plans.complete.recommended}
				</div>

				<div class="flex-1">
					<div class="flex items-center justify-between">
						<h3 class="text-2xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.servicePlans.plans.complete.title}
						</h3>
						<div class="bg-blue-50 p-2 dark:bg-blue-900/30 rounded-full">
							<svg
								class="h-6 w-6 text-blue-600 dark:text-blue-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"
							>
								<path
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</div>
					<p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.complete.description}
					</p>

					<div class="mt-8 border-slate-100 pt-8 dark:border-slate-800 border-t">
						<p class="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
							{home.sections.servicePlans.plans.complete.plusLabel}
						</p>
						<ul class="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.servicePlans.plans.complete.items as item}
								<li class="gap-3 flex items-start">
									<svg
										class="mt-0.5 h-5 w-5 text-blue-600 dark:text-blue-400 flex-none"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-8 rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/20">
					<p class="text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase">
						{home.sections.servicePlans.plans.complete.builtFor.label}
					</p>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.complete.builtFor.text}
					</p>
					<div class="mt-6">
						<a
							href="#contact"
							class="gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:ring-blue-500 flex w-full items-center justify-center transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
						>
							{common.buttons.inquireAboutComplete}
						</a>
					</div>
				</div>
			</article>
		</div>

		<!-- Add-ons and Single Engagements -->
		<div class="mt-20 pt-16">
			<header class="max-w-2xl mx-auto text-center mb-12">
				<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
					{home.sections.addOns.title}
				</h2>
				<p class="mt-3 text-slate-600 dark:text-slate-300">
					{home.sections.addOns.subtitle}
				</p>
			</header>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each home.sections.addOns.items as item}
					<article
						class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900/50 flex flex-col transition-all duration-300"
					>
						<div class="flex-1">
							<div class="flex items-center justify-between mb-4">
								<h3 class="text-lg font-bold text-slate-900 dark:text-slate-50 leading-tight">
									{item.title}
								</h3>
								<div class="bg-indigo-50 p-1.5 dark:bg-indigo-900/30 rounded-lg flex-none ml-4">
									<svg
										class="h-5 w-5 text-indigo-600 dark:text-indigo-400"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										aria-hidden="true"
									>
										<path
											d="M12 4v16m8-8H4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
								{item.description}
							</p>
							{#if item.requirement}
								<div class="mt-3">
									<span
										class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/30 dark:text-indigo-400 dark:ring-indigo-400/20"
									>
										{item.requirement}
									</span>
								</div>
							{/if}
						</div>

						<div class="mt-6">
							<a
								href="#contact"
								class="rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex w-full items-center justify-center transition-all focus:outline-none"
							>
								{item.buttonText}
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
