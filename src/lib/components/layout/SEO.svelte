<script lang="ts">
	import { common } from '$lib/lang/en/common.js';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{common.companyName}</title>

	<meta name="description" content={common.companyDescription} />

	<link rel="canonical" href={page.url.href} />

	<!-- Open Graph -->
	<meta property="og:type" content={'website'} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={common.companyName} />
	<meta property="og:description" content={common.companyDescription} />
	<meta property="og:image" content={new URL('/favicon.svg', page.url.origin).href} />
	<meta property="og:site_name" content={common.companyName} />
	<meta property="og:locale" content={'en_US'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={common.companyName} />
	<meta name="twitter:description" content={common.companyDescription} />
	<meta name="twitter:image" content={new URL('/favicon.svg', page.url.origin).href} />
</svelte:head>
