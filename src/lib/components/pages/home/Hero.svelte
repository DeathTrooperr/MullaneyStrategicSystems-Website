<script lang="ts">
	import { common } from '$lib/lang/en/common';
	import { home } from '$lib/lang/en/pages/home';
</script>

<!-- Hero / Opening -->
<section class="max-w-7xl px-4 pb-12 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8 mx-auto">
	<div class="gap-10 md:grid-cols-2 grid items-center">
		<div>
			<h1
				class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50 animate-[fade-up_0.6s_ease-out_0.05s_both] text-pretty"
			>
				{home.hero.title},
				<span
					class="from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-gradient-to-r bg-clip-text text-transparent"
					>{home.hero.titleAccent}</span
				>
			</h1>
			<p
				class="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300 animate-[fade-up_0.6s_ease-out_0.15s_both] text-pretty"
			>
				{home.hero.subtitle}
			</p>
			<div
				class="mt-8 gap-3 flex animate-[fade-up_0.6s_ease-out_0.25s_both] flex-wrap items-center"
			>
				<a
					href="#contact"
					class="gap-2 rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-cyan-700/20 hover:bg-cyan-700 focus-visible:ring-cyan-500 inline-flex items-center ring-1 ring-inset focus:outline-none focus-visible:ring-2"
				>
					{common.buttons.talkToExpert}
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg
					>
				</a>
				<a
					href="#plans"
					class="gap-2 rounded-md px-4 py-2 text-sm font-semibold text-slate-800 ring-slate-300 hover:bg-slate-50 focus-visible:ring-cyan-500 dark:text-slate-100 dark:ring-slate-600 dark:hover:bg-slate-800 inline-flex items-center ring-1 ring-inset focus:outline-none focus-visible:ring-2"
				>
					{common.buttons.viewPlans}
				</a>
			</div>
		</div>
		<div class="relative">
			<div
				class="inset-0 from-cyan-200/40 to-blue-200/20 blur-2xl dark:from-cyan-400/10 dark:to-blue-400/10 absolute -z-10 bg-gradient-to-tr"
			></div>
			<div
				class="max-w-md rounded-2xl border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur ring-black/0 dark:border-slate-700/60 dark:bg-slate-900/70 mx-auto w-full animate-[fade-in_0.7s_ease-out_0.2s_both] border ring-1"
			>
				<h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
					{home.hero.oversight.title}
				</h2>
				<ul class="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
					{#each home.hero.oversight.items as item}
						<li class="gap-2 flex items-start">
							<span class="mt-1 h-1.5 w-1.5 bg-cyan-500 shrink-0 rounded-full"></span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
