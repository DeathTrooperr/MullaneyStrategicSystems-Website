<script lang="ts">
	import { securityStack } from '$lib/lang/en/components/security-stack';
	type StackItem = {
		title: string;
		vendor: string;
		desc: string;
		color: string; // tailwind color name for accents
		tags: string[]; // categorization pills e.g., Identity, Cloud, Endpoints, Network
	};

	type ColorStyle = {
		bg: string; // background for logo circle
		ring: string; // ring color for logo circle
		text: string; // icon/text color
		divider: string; // gradient middle color
		spot: string; // decorative spot color
	};

	const colorMap: Record<string, ColorStyle> = {
		cyan: {
			bg: 'bg-cyan-100 dark:bg-cyan-900/30',
			ring: 'ring-cyan-300/50 dark:ring-cyan-400/30',
			text: 'text-cyan-600 dark:text-cyan-400',
			divider: 'via-cyan-400/30',
			spot: 'bg-cyan-400'
		},
		emerald: {
			bg: 'bg-emerald-100 dark:bg-emerald-900/30',
			ring: 'ring-emerald-300/50 dark:ring-emerald-400/30',
			text: 'text-emerald-600 dark:text-emerald-400',
			divider: 'via-emerald-400/30',
			spot: 'bg-emerald-400'
		},
		violet: {
			bg: 'bg-violet-100 dark:bg-violet-900/30',
			ring: 'ring-violet-300/50 dark:ring-violet-400/30',
			text: 'text-violet-600 dark:text-violet-400',
			divider: 'via-violet-400/30',
			spot: 'bg-violet-400'
		},
		sky: {
			bg: 'bg-sky-100 dark:bg-sky-900/30',
			ring: 'ring-sky-300/50 dark:ring-sky-400/30',
			text: 'text-sky-600 dark:text-sky-400',
			divider: 'via-sky-400/30',
			spot: 'bg-sky-400'
		},
		blue: {
			bg: 'bg-blue-100 dark:bg-blue-900/30',
			ring: 'ring-blue-300/50 dark:ring-blue-400/30',
			text: 'text-blue-600 dark:text-blue-400',
			divider: 'via-blue-400/30',
			spot: 'bg-blue-400'
		},
		indigo: {
			bg: 'bg-indigo-100 dark:bg-indigo-900/30',
			ring: 'ring-indigo-300/50 dark:ring-indigo-400/30',
			text: 'text-indigo-600 dark:text-indigo-400',
			divider: 'via-indigo-400/30',
			spot: 'bg-indigo-400'
		},
		fuchsia: {
			bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
			ring: 'ring-fuchsia-300/50 dark:ring-fuchsia-400/30',
			text: 'text-fuchsia-600 dark:text-fuchsia-400',
			divider: 'via-fuchsia-400/30',
			spot: 'bg-fuchsia-400'
		},
		amber: {
			bg: 'bg-amber-100 dark:bg-amber-900/30',
			ring: 'ring-amber-300/50 dark:ring-amber-400/30',
			text: 'text-amber-600 dark:text-amber-400',
			divider: 'via-amber-400/30',
			spot: 'bg-amber-400'
		},
		teal: {
			bg: 'bg-teal-100 dark:bg-teal-900/30',
			ring: 'ring-teal-300/50 dark:ring-teal-400/30',
			text: 'text-teal-600 dark:text-teal-400',
			divider: 'via-teal-400/30',
			spot: 'bg-teal-400'
		},
		rose: {
			bg: 'bg-rose-100 dark:bg-rose-900/30',
			ring: 'ring-rose-300/50 dark:ring-rose-400/30',
			text: 'text-rose-600 dark:text-rose-400',
			divider: 'via-rose-400/30',
			spot: 'bg-rose-400'
		},
		pink: {
			bg: 'bg-pink-100 dark:bg-pink-900/30',
			ring: 'ring-pink-300/50 dark:ring-pink-400/30',
			text: 'text-pink-600 dark:text-pink-400',
			divider: 'via-pink-400/30',
			spot: 'bg-pink-400'
		},
		red: {
			bg: 'bg-red-100 dark:bg-red-900/30',
			ring: 'ring-red-300/50 dark:ring-red-400/30',
			text: 'text-red-600 dark:text-red-400',
			divider: 'via-red-400/30',
			spot: 'bg-red-400'
		},
		orange: {
			bg: 'bg-orange-100 dark:bg-orange-900/30',
			ring: 'ring-orange-300/50 dark:ring-orange-400/30',
			text: 'text-orange-600 dark:text-orange-400',
			divider: 'via-orange-400/30',
			spot: 'bg-orange-400'
		},
		lime: {
			bg: 'bg-lime-100 dark:bg-lime-900/30',
			ring: 'ring-lime-300/50 dark:ring-lime-400/30',
			text: 'text-lime-600 dark:text-lime-400',
			divider: 'via-lime-400/30',
			spot: 'bg-lime-400'
		},
		slate: {
			bg: 'bg-slate-100 dark:bg-slate-900/30',
			ring: 'ring-slate-300/50 dark:ring-slate-400/30',
			text: 'text-slate-600 dark:text-slate-400',
			divider: 'via-slate-400/30',
			spot: 'bg-slate-400'
		}
	};

	const stackItems: StackItem[] = securityStack.items.map((item: any) => ({
		title: item.title,
		vendor: item.vendor,
		desc: item.desc,
		color: item.color as any,
		tags: item.tags
	}));

	// Tag filtering state for Security Stack
	let selectedTag = $state<string | null>(null);
	const allTags: string[] = Array.from(new Set(stackItems.flatMap((i) => i.tags))).sort();
	const toggleTag = (tag: string | null) => {
		selectedTag = selectedTag === tag ? null : tag;
	};
</script>

<section
	id="stack"
	class="border-slate-200/60 from-white to-slate-50 py-16 dark:border-slate-700/40 dark:from-slate-950 dark:to-slate-900 border-y bg-gradient-to-b"
>
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
		<header class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
				{securityStack.title}
			</h2>
			<p class="mt-3 text-slate-600 dark:text-slate-300">{securityStack.subtitle}</p>
		</header>

		{#if allTags.length}
			<div class="mt-8 gap-2 flex flex-wrap items-center justify-center">
				<button
					class={selectedTag === null
						? 'gap-1 px-3 py-1 text-xs font-semibold focus-visible:ring-cyan-500 bg-cyan-600 text-white ring-cyan-600 hover:bg-cyan-700 inline-flex items-center rounded-full ring-1 transition focus:outline-none focus-visible:ring-2'
						: 'gap-1 px-3 py-1 text-xs font-semibold focus-visible:ring-cyan-500 bg-slate-100 text-slate-700 ring-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-700 inline-flex items-center rounded-full ring-1 transition focus:outline-none focus-visible:ring-2'}
					aria-pressed={selectedTag === null}
					onclick={() => toggleTag(null)}
				>
					{securityStack.tags.all}
				</button>
				{#each allTags as tag}
					<button
						class={selectedTag === tag
							? 'gap-1 px-3 py-1 text-xs font-semibold focus-visible:ring-cyan-500 bg-cyan-600 text-white ring-cyan-600 hover:bg-cyan-700 inline-flex items-center rounded-full ring-1 transition focus:outline-none focus-visible:ring-2'
							: 'gap-1 px-3 py-1 text-xs font-semibold focus-visible:ring-cyan-500 bg-slate-100 text-slate-700 ring-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-700 inline-flex items-center rounded-full ring-1 transition focus:outline-none focus-visible:ring-2'}
						aria-pressed={selectedTag === tag}
						onclick={() => toggleTag(tag)}
					>
						{tag}
					</button>
				{/each}
			</div>
		{/if}

		<div class="mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid">
			{#each stackItems as item}
				{@const c = colorMap[item.color] ?? colorMap.slate}
				<article
					class={`group rounded-2xl border-slate-200/70 bg-white p-5 shadow-sm ring-black/0 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 dark:border-slate-700/60 dark:bg-slate-900 relative overflow-hidden border ring-1 transition duration-300 motion-reduce:transform-none motion-reduce:transition-none ${
						typeof selectedTag === 'string' && item.tags?.includes(selectedTag)
							? 'ring-cyan-400/40 border-cyan-300/60'
							: ''
					}`}
					class:opacity-100={typeof selectedTag === 'string'
						? item.tags?.includes(selectedTag)
						: true}
					class:opacity-40={typeof selectedTag === 'string' && !item.tags?.includes(selectedTag)}
				>
					<div
						class={`-top-10 h-28 w-28 blur-2xl absolute right-[-40px] rounded-full opacity-10 transition duration-300 group-hover:opacity-20 ${c.spot}`}
						aria-hidden="true"
					></div>
					<div class="gap-3 flex items-start">
						<!-- Logo -->
						<div
							class={`h-12 w-12 rounded-xl flex shrink-0 items-center justify-center ring-1 ${c.bg} ${c.ring}`}
						>
							<svg
								class={`h-6 w-6 ${c.text}`}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								role="img"
								aria-label={`${item.title} logo`}
							>
								<path
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<div class="min-w-0">
							<h3 class="text-base font-semibold text-slate-900 dark:text-slate-50">
								{item.title}
							</h3>
							<p class="text-xs font-medium text-slate-500 dark:text-slate-400">{item.vendor}</p>
						</div>
					</div>
					<p class="mt-3 text-sm text-slate-700 dark:text-slate-200">{item.desc}</p>
					{#if item.tags?.length}
						<div class="mt-4 gap-1.5 flex flex-wrap">
							{#each item.tags as tag}
								<span
									class="border-slate-300/70 bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-black/0 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 inline-flex items-center rounded-full border text-[10px] ring-1 ring-inset"
									>{tag}</span
								>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>

		<p class="sr-only">{securityStack.srOnly}</p>
	</div>
</section>
