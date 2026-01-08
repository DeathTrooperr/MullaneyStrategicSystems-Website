<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
	import { enhance } from '$app/forms';
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

<!-- Contact -->
<section id="contact" class="pt-20 pb-10">
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
