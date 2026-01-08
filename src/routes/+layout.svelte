<script lang="ts">
	import '../app.css';
	import { common } from '$lib/lang/en/common';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BackgroundDecorations from '$lib/components/layout/BackgroundDecorations.svelte';
	import SEO from '$lib/components/layout/SEO.svelte';

	let { children } = $props();
</script>

<SEO />

<a
	href="#opening"
	class="focus:top-4 focus:left-4 focus:rounded-md focus:bg-slate-900 focus:text-white focus:px-3 focus:py-2 sr-only focus:not-sr-only focus:fixed focus:z-50"
	>{common.navigation.skipToContent}</a
>

<Navbar />

<main id="opening" class="relative isolate flex min-h-screen flex-col">
	<BackgroundDecorations />

	{@render children()}

	<div class="mt-8 pb-8 flex justify-center">
		<a
			href="#opening"
			class="gap-2 text-sm text-slate-600 hover:text-cyan-700 focus-visible:ring-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300 inline-flex items-center focus:outline-none focus-visible:ring-2"
		>
			{common.buttons.backToTop}
			<svg
				class="h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				aria-hidden="true"><path d="M12 19V5m0 0l-7 7m7-7l7 7" /></svg
			>
		</a>
	</div>
</main>

<Footer />
