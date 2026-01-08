<script lang="ts">
	import { common } from '$lib/lang/en/common';
</script>

<footer
	class="border-slate-200/60 bg-white py-8 dark:border-slate-700/40 dark:bg-slate-950 relative border-t"
>
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
		<div class="gap-4 sm:flex-row flex flex-col items-center justify-between">
			<p class="text-sm text-slate-600 dark:text-slate-400 sm:text-left text-center">
				{common.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
			</p>
			<a
				href="/sms"
				class="text-xs text-slate-500 hover:text-cyan-600 dark:text-slate-500 dark:hover:text-cyan-400"
				>{common.footer.smsPrivacyPolicy}</a
			>
		</div>
	</div>
	<svg
		aria-hidden="true"
		class="bottom-0 h-48 max-w-7xl blur-3xl pointer-events-none absolute left-1/2 -z-10 w-full -translate-x-1/2"
		viewBox="0 0 600 200"
		xmlns="http://www.w3.org/2000/svg"
		><defs
			><linearGradient id="footer-grad" x1="0" x2="1" y1="0" y2="0"
				><stop offset="0%" stop-color="#22d3ee" stop-opacity="0.15" /><stop
					offset="100%"
					stop-color="#38bdf8"
					stop-opacity="0.05"
				/></linearGradient
			></defs
		><ellipse cx="300" cy="100" rx="280" ry="80" fill="url(#footer-grad)" /></svg
	>
</footer>
