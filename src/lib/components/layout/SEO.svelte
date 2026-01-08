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
		description = 'We deliver security-first managed services for financial and insurance organizations, focused on reducing risk, maintaining compliance, and ensuring accountability across identity, endpoints, cloud, and network environments.',
		image = '/favicon.svg', // Fallback to favicon if og-image is missing
		canonical = page.url.href,
		type = 'website'
	}: Props = $props();

	const fullTitle = title === common.companyName ? title : `${title} | ${common.companyName}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>

	<meta name="description" content={description} />

	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content={type ?? 'website'} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={new URL(image, page.url.origin).href} />
	<meta property="og:site_name" content={fullTitle} />
	<meta property="og:locale" content={'en_US'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={new URL(image, page.url.origin).href} />
</svelte:head>
