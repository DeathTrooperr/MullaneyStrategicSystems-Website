<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
	import { enhance } from '$app/forms';
	import SecurityStack from '$lib/components/SecurityStack.svelte';
	import { common } from '$lib/lang/en/common';
	import { home } from '$lib/lang/en/pages/home';

	const PUBLIC_TURNSTILE_SITE_KEY = env.PUBLIC_TURNSTILE_SITE_KEY;

	let turnstileToken = $state('');
	let isSubmitting = $state(false);
	let formStatus = $state<{ success?: boolean; message?: string } | null>(null);
	let turnstileContainer = $state<HTMLElement | null>(null);
	let widgetId = $state<string | null>(null);
	let formElement = $state<HTMLFormElement | null>(null);

	async function handleResetForm() {
		formStatus = null;
		// Reset Turnstile token as it's definitely invalid now
		turnstileToken = '';

		// We already reset turnstile on success, but just in case
		if ((window as any).turnstile && widgetId) {
			(window as any).turnstile.reset(widgetId);
		}

		// Scroll back to form top if needed
		document.getElementById('contact-form-container')?.scrollIntoView({ behavior: 'smooth' });
	}

	async function handleEnhance() {
		isSubmitting = true;
		return async ({ result, update }: { result: any; update: any }) => {
			// Don't set isSubmitting to false immediately if we are showing success state
			// as it might cause button flicker if the transition is fast

			if (result.type === 'success') {
				formStatus = { success: true };
				turnstileToken = '';
				isSubmitting = false;

				// Let SvelteKit handle the form reset and state update
				await update({ reset: true });

				// Reset Turnstile widget
				if ((window as any).turnstile && widgetId) {
					(window as any).turnstile.reset(widgetId);
				}
			} else if (result.type === 'failure') {
				isSubmitting = false;
				// Reset Turnstile on failure as well to allow retry
				if ((window as any).turnstile && widgetId) {
					(window as any).turnstile.reset(widgetId);
					turnstileToken = '';
				}
				formStatus = {
					success: false,
					message: result.data?.message || common.errors.genericError
				};
			} else {
				isSubmitting = false;
				if (result.type === 'error') {
					formStatus = {
						success: false,
						message: common.errors.serverError
					};
				}
			}
		};
	}

	onMount(() => {
		const initTurnstile = () => {
			if ((window as any).turnstile && turnstileContainer) {
				widgetId = (window as any).turnstile.render(turnstileContainer, {
					sitekey: PUBLIC_TURNSTILE_SITE_KEY,
					callback: (token: string) => {
						turnstileToken = token;
					},
					'error-callback': () => {
						turnstileToken = '';
						formStatus = { success: false, message: common.errors.turnstileFailed };
					},
					'expired-callback': () => {
						turnstileToken = '';
						if ((window as any).turnstile && widgetId) {
							(window as any).turnstile.reset(widgetId);
						}
					}
				});
			}
		};

		if ((window as any).turnstile) {
			initTurnstile();
		} else {
			// If script not loaded yet, wait for it
			const interval = setInterval(() => {
				if ((window as any).turnstile) {
					clearInterval(interval);
					initTurnstile();
				}
			}, 100);

			return () => {
				clearInterval(interval);
				if (widgetId && (window as any).turnstile) {
					(window as any).turnstile.remove(widgetId);
				}
			};
		}

		return () => {
			if (widgetId && (window as any).turnstile) {
				(window as any).turnstile.remove(widgetId);
			}
		};
	});
</script>

<!-- Hero / Opening -->
<section class="max-w-7xl px-4 pb-12 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8 mx-auto">
	<div class="gap-10 md:grid-cols-2 grid items-center">
		<div>
			<h1
				class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50 animate-[fade-up_0.6s_ease-out_0.05s_both] text-pretty"
			>
				{home.hero.title}
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

<!-- Workspace Support -->
<section
	id="providers"
	class="border-slate-200/60 from-white to-slate-50 py-16 dark:border-slate-700/40 dark:from-slate-950 dark:to-slate-900 border-t bg-gradient-to-b"
>
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
		<header class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
				{home.sections.unifiedCloudGovernance.title}
			</h2>
			<p class="mt-3 text-slate-600 dark:text-slate-300">
				{home.sections.unifiedCloudGovernance.subtitle}
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
								alt="{home.sections.unifiedCloudGovernance.providers.google.title} logo"
								class="h-6 w-6 object-contain"
								loading="lazy"
							/>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.unifiedCloudGovernance.providers.google.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.unifiedCloudGovernance.providers.google.features as feature}
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
								alt="{home.sections.unifiedCloudGovernance.providers.microsoft.title} logo"
								class="h-6 w-6 object-contain"
								loading="lazy"
							/>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-slate-50">
							{home.sections.unifiedCloudGovernance.providers.microsoft.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.unifiedCloudGovernance.providers.microsoft.features as feature}
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
							{home.sections.unifiedCloudGovernance.providers.hybrid.title}
						</h3>
					</div>

					<div class="mt-6 border-slate-100 pt-6 dark:border-slate-800 border-t">
						<ul class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
							{#each home.sections.unifiedCloudGovernance.providers.hybrid.features as feature}
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
						{home.sections.servicePlans.plans.essentials.targetOutcome.label}
					</p>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.essentials.targetOutcome.text}
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
						{home.sections.servicePlans.plans.complete.targetOutcome.label}
					</p>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
						{home.sections.servicePlans.plans.complete.targetOutcome.text}
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
	</div>
</section>

<SecurityStack />

<!-- Contact -->
<section id="contact" class="py-20">
	<div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
		<div
			class="rounded-3xl border-slate-200/70 bg-white shadow-sm ring-black/0 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900 relative overflow-hidden border ring-1 transition duration-300"
		>
			<!-- subtle glow accents -->
			<div
				class="-top-24 -right-24 h-72 w-72 bg-cyan-400/10 blur-3xl pointer-events-none absolute rounded-full"
				aria-hidden="true"
			></div>
			<div
				class="-bottom-20 -left-16 h-60 w-60 bg-blue-400/10 blur-3xl pointer-events-none absolute rounded-full"
				aria-hidden="true"
			></div>

			<div class="gap-0 md:grid-cols-2 grid">
				<!-- Left: content -->
				<div class="p-8 sm:p-10 lg:p-12">
					<header>
						<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
							{home.sections.contact.title}
						</h2>
						<p class="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
							{home.sections.contact.subtitle}
						</p>
					</header>

					<div class="mt-6 space-y-4 text-sm">
						<div class="gap-3 text-slate-700 dark:text-slate-200 flex items-center">
							<svg
								class="h-5 w-5 text-cyan-600 dark:text-cyan-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.8"
								aria-hidden="true"
								><path d="M4 6l8 6 8-6" /><rect x="4" y="6" width="16" height="12" rx="2" /></svg
							>
							<a
								class="font-medium hover:text-cyan-700 dark:hover:text-cyan-300 underline-offset-4 hover:underline"
								href="mailto:{common.contactInfo.email}">{common.contactInfo.email}</a
							>
						</div>
						<div class="gap-3 text-slate-700 dark:text-slate-200 flex items-center">
							<svg
								class="h-5 w-5 text-cyan-600 dark:text-cyan-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.8"
								aria-hidden="true"
							>
								<path
									d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
								/>
							</svg>
							<a
								class="font-medium hover:text-cyan-700 dark:hover:text-cyan-300 underline-offset-4 hover:underline"
								href="tel:{common.contactInfo.phone.replace(/-/g, '')}"
								>{common.contactInfo.phone}</a
							>
						</div>
						<div class="gap-3 text-slate-700 dark:text-slate-200 flex items-center">
							<svg
								class="h-5 w-5 text-cyan-600 dark:text-cyan-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.8"
								aria-hidden="true"
							>
								<path d="M19.5 10.5c0 4.5-7.5 10.5-7.5 10.5S4.5 15 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
								<circle cx="12" cy="10.5" r="2.5" />
							</svg>
							<span class="font-medium">{common.contactInfo.location}</span>
						</div>
					</div>

					<div class="mt-8">
						<a
							href="https://mullaneystrategicsystems.zoom.us/zbook/d/9libhoia/mullaney-strategic-systems-consultation"
							target="_blank"
							rel="noopener noreferrer"
							class="gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-black/10 hover:bg-slate-800 focus-visible:ring-cyan-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white inline-flex items-center ring-1 ring-inset focus:outline-none focus-visible:ring-2"
						>
							{common.buttons.scheduleConsultation}
							<svg
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg
							>
						</a>
					</div>
				</div>

				<div
					id="contact-form-container"
					class="border-slate-200/70 p-8 sm:p-10 lg:p-12 md:border-l md:border-t-0 dark:border-slate-700/60 relative border-t"
				>
					{#if formStatus?.success}
						<div
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 200 }}
							class="inset-0 p-8 sm:p-10 lg:p-12 space-y-4 bg-white dark:bg-slate-900 absolute z-10 flex flex-col items-center justify-center text-center"
						>
							<div
								in:fly={{ y: 20, duration: 400, delay: 100 }}
								class="bg-emerald-100 p-3 dark:bg-emerald-900/30 rounded-full"
							>
								<svg
									class="h-8 w-8 text-emerald-600 dark:text-emerald-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3
								in:fly={{ y: 20, duration: 400, delay: 200 }}
								class="text-xl font-semibold text-slate-900 dark:text-slate-50"
							>
								{home.sections.contact.form.successTitle}
							</h3>
							<p
								in:fly={{ y: 20, duration: 400, delay: 300 }}
								class="text-slate-600 dark:text-slate-300"
							>
								{home.sections.contact.form.successMessage}
							</p>
							<button
								type="button"
								onclick={handleResetForm}
								in:fly={{ y: 20, duration: 400, delay: 400 }}
								class="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
							>
								{common.buttons.submitAnotherInquiry}
							</button>
						</div>
					{/if}

					<div
						class={formStatus?.success ? 'pointer-events-none invisible' : 'visible'}
						aria-hidden={formStatus?.success ? 'true' : 'false'}
					>
						<form
							bind:this={formElement}
							class="space-y-4"
							method="POST"
							use:enhance={handleEnhance}
							aria-labelledby="contact-heading"
						>
							<h3
								id="contact-heading"
								class="text-xl font-semibold text-slate-900 dark:text-slate-50"
							>
								{home.sections.contact.form.title}
							</h3>
							<p class="text-sm text-slate-600 dark:text-slate-300">
								{home.sections.contact.form.subtitle}
							</p>

							{#if formStatus?.success === false}
								<div
									in:fly={{ y: -10, duration: 300 }}
									class="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
								>
									{formStatus.message}
								</div>
							{/if}

							<div>
								<label
									for="name"
									class="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200 block"
									>{home.sections.contact.form.labels.name}</label
								>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder={home.sections.contact.form.placeholders.name}
									class="rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 w-full border ring-0 transition outline-none focus:ring-2"
								/>
							</div>

							<div>
								<label
									for="email"
									class="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200 block"
									>{home.sections.contact.form.labels.email}</label
								>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder={home.sections.contact.form.placeholders.email}
									class="rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 w-full border outline-none focus:ring-2"
								/>
							</div>

							<div>
								<label
									for="message"
									class="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200 block"
									>{home.sections.contact.form.labels.message}</label
								>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									placeholder={home.sections.contact.form.placeholders.message}
									class="rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 w-full resize-y border outline-none focus:ring-2"
								></textarea>
							</div>

							<div bind:this={turnstileContainer}></div>

							<div class="pt-2">
								<button
									type="submit"
									disabled={!turnstileToken || isSubmitting}
									class="gap-2 rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-cyan-700/20 hover:bg-cyan-700 focus-visible:ring-cyan-500 inline-flex w-full items-center justify-center ring-1 transition-all ring-inset focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
								>
									{#if isSubmitting}
										<svg
											class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												class="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												stroke-width="4"
											></circle>
											<path
												class="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										{common.buttons.sending}
									{:else}
										{common.buttons.sendMessage}
									{/if}
								</button>
							</div>

							<p class="text-xs text-slate-500 dark:text-slate-400">
								{home.sections.contact.form.responseTime}
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
