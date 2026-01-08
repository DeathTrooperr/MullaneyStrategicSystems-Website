<script lang="ts">
	import { common } from '$lib/lang/en/common';

	let mobileOpen = $state(false);
	const closeMobile = () => (mobileOpen = false);

	const navItems = [
		{ href: '/#opening', label: common.navigation.home },
		{ href: '/#providers', label: common.navigation.cloudProviders },
		{ href: '/#plans', label: common.navigation.servicePlans },
		{ href: '/#stack', label: common.navigation.securityStack },
		{ href: '/#contact', label: common.navigation.contact }
	];
</script>

<header
	class="top-0 border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-slate-700/40 dark:bg-slate-900/70 sticky z-50 border-b"
>
	<nav
		class="max-w-7xl px-4 py-3 sm:px-6 lg:px-8 mx-auto flex items-center justify-between"
		aria-label="Primary"
	>
		<a
			href="/#opening"
			class="group gap-2 inline-flex items-center"
			aria-label="{common.companyName} home"
		>
			<svg
				class="h-8 w-8 text-cyan-600 dark:text-cyan-400 transition group-hover:scale-105"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="ms-grad" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stop-color="currentColor" stop-opacity="1" />
						<stop offset="100%" stop-color="currentColor" stop-opacity="0.5" />
					</linearGradient>
				</defs>
				<path d="M3 18L9 6l3 6 3-6 6 12" stroke="url(#ms-grad)" />
			</svg>
			<span class="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100"
				>{common.companyName}</span
			>
		</a>

		<button
			class="gap-2 rounded-md px-3 py-2 text-slate-700 ring-slate-300/60 hover:bg-slate-50 focus-visible:ring-cyan-500 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-800 md:hidden inline-flex items-center ring-1 focus:outline-none focus-visible:ring-2"
			aria-controls="primary-menu"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<svg
				class="h-5 w-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				aria-hidden="true"
			>
				<path d="M4 7h16M4 12h16M4 17h16" />
			</svg>
			<span class="text-sm">{common.navigation.menu}</span>
		</button>

		<ul id="primary-menu" class="gap-6 md:flex hidden items-center">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="text-sm font-medium text-slate-700 hover:text-cyan-700 focus-visible:ring-cyan-500 dark:text-slate-200 dark:hover:text-cyan-300 focus:outline-none focus-visible:ring-2"
						>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	{#if mobileOpen}
		<div class="md:hidden" role="dialog" aria-modal="true">
			<div
				class="border-slate-200/60 bg-white px-4 py-3 dark:border-slate-700/40 dark:bg-slate-900 border-t"
			>
				<ul
					class="space-y-2 cursor-pointer"
					onclick={closeMobile}
					onkeydown={(e) => e.key === 'Enter' && closeMobile()}
					role="presentation"
				>
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-800 block"
								>{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</header>
