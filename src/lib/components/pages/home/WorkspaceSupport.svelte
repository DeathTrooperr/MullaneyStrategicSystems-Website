<script lang="ts">
	import { home } from '$lib/lang/en/pages/home';
</script>

<!-- Workspace Support -->
<section
	id="providers"
	class="border-slate-200/60 from-white to-slate-50 py-16 dark:border-slate-700/40 dark:from-slate-950 dark:to-slate-900 border-t bg-gradient-to-b"
>
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
		<header class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
				{home.sections.workspaceSupport.title}
			</h2>
			<p class="mt-3 text-slate-600 dark:text-slate-300">
				{home.sections.workspaceSupport.subtitle}
			</p>
		</header>
		<div class="mt-12 gap-8 lg:grid-cols-3 lg:items-stretch grid">
			<!-- Google Workspace -->
			<article
				class="rounded-3xl border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900/50 relative flex flex-col border transition-all duration-300"
			>
				<div class="flex-1">
					<div class="gap-3 flex flex-col items-center text-center">
						<div class="bg-slate-50 p-2 dark:bg-slate-800 rounded-full">
							<img
								src="/imgs/google.png"
								alt="{home.sections.workspaceSupport.providers.google.title} logo"
								class="h-6 w-6 object-contain"
								loading="lazy"
							/>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.workspaceSupport.providers.google.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.workspaceSupport.providers.google.features as feature}
								<li class="gap-3 flex items-start">
									<svg
										class="mt-1 h-4 w-4 text-cyan-600 dark:text-cyan-400 flex-none"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</article>

			<!-- Microsoft 365 -->
			<article
				class="rounded-3xl border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900/50 relative flex flex-col border transition-all duration-300"
			>
				<div class="flex-1">
					<div class="gap-3 flex flex-col items-center text-center">
						<div class="bg-slate-50 p-2 dark:bg-slate-800 rounded-full">
							<img
								src="/imgs/microsoft365.png"
								alt="{home.sections.workspaceSupport.providers.microsoft.title} logo"
								class="h-6 w-6 object-contain"
								loading="lazy"
							/>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.workspaceSupport.providers.microsoft.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.workspaceSupport.providers.microsoft.features as feature}
								<li class="gap-3 flex items-start">
									<svg
										class="mt-1 h-4 w-4 text-cyan-600 dark:text-cyan-400 flex-none"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</article>

			<!-- Hybrid / Active Directory -->
			<article
				class="rounded-3xl border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900/50 relative flex flex-col border transition-all duration-300"
			>
				<div class="flex-1">
					<div class="gap-3 flex flex-col items-center text-center">
						<div class="bg-slate-50 p-2 dark:bg-slate-800 rounded-full">
							<img
								src="/imgs/hybrid-ad.svg"
								alt="Azure Active Directory logo"
								class="h-6 w-6 object-contain"
								loading="lazy"
							/>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.workspaceSupport.providers.hybrid.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.workspaceSupport.providers.hybrid.features as feature}
								<li class="gap-3 flex items-start">
									<svg
										class="mt-1 h-4 w-4 text-cyan-600 dark:text-cyan-400 flex-none"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
