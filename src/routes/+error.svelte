<script lang="ts">
	import SEO from '$lib/components/layout/SEO.svelte';
	import { page } from '$app/state';
	import { common } from '$lib/lang/en/common';

	const errorTitle = page.status === 404 ? common.errors.pageNotFound : common.errors.genericError;
</script>

<div
		class="px-6 py-24 sm:py-32 lg:px-8 relative isolate flex h-screen flex-col items-center justify-center"
>
	<div class="inset-0 absolute -z-10 overflow-hidden">
		<div
			class="-top-24 from-cyan-300/20 via-sky-300/10 to-blue-300/15 blur-3xl dark:from-cyan-400/10 dark:via-sky-400/5 dark:to-blue-400/10 absolute left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr"
		></div>
	</div>

	<div class="text-center">
		<p
			class="text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-400 animate-[fade-up_0.6s_ease-out_0.05s_both] uppercase"
		>
			{common.errors.errorStatus.replace('{status}', page.status.toString())}
		</p>

		<h1
			class="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl animate-[fade-up_0.6s_ease-out_0.15s_both] text-pretty"
		>
			{#if page.status === 404}
				{common.errors.pageNotFound}
			{:else}
				{page.error?.message || common.errors.genericError}
			{/if}
		</h1>

		<p
			class="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300 max-w-lg mx-auto animate-[fade-up_0.6s_ease-out_0.25s_both] text-pretty"
		>
			{#if page.status === 404}
				{common.errors.notFoundMessage}
			{:else}
				{common.errors.unexpectedError}
			{/if}
		</p>

		<div
			class="mt-10 gap-4 flex animate-[fade-up_0.6s_ease-out_0.35s_both] flex-wrap items-center justify-center"
		>
			<a
				href="/"
				class="gap-2 rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-cyan-700/20 hover:bg-cyan-700 focus-visible:ring-cyan-500 inline-flex items-center ring-1 ring-inset focus:outline-none focus-visible:ring-2"
			>
				<svg
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
					><path
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/></svg
				>
				{common.buttons.backToHome}
			</a>
			<a
				href="mailto:support@mullaneystrategicsystems.com"
				class="gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-slate-800 ring-slate-300 hover:bg-slate-50 focus-visible:ring-cyan-500 dark:text-slate-100 dark:ring-slate-600 dark:hover:bg-slate-800 inline-flex items-center ring-1 ring-inset focus:outline-none focus-visible:ring-2"
			>
				{common.buttons.emailSupport}
				<svg
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg
				>
			</a>
		</div>
	</div>
</div>
