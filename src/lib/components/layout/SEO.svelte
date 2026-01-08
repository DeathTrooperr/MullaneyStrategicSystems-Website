<script lang="ts">
	import { common } from '$lib/lang/en/common.js';
	import { page } from '$app/state';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		canonical?: string;
		type?: string;
	}

	let {
		title = common.companyName,
		description = 'Professional IT services and strategic systems consulting.',
		image = '/favicon.svg', // Fallback to favicon if og-image is missing
		canonical = page.url.href,
		type = 'website'
	}: Props = $props();

	const fullTitle = title === common.companyName ? title : `${title} | ${common.companyName}`;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={new URL(image, page.url.origin).href} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={page.url.href} />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={new URL(image, page.url.origin).href} />
</svelte:head>
