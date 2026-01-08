<script lang="ts">
	import SEO from '$lib/components/layout/SEO.svelte';
	import { sms } from '$lib/lang/en/pages/sms';
	const lastUpdated = 'January 8, 2026'; // Using current date as last updated
</script>

<SEO title={sms.title} />

<div class="max-w-4xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
	<article class="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
		<h1
			class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl text-center"
		>
			{sms.title}
		</h1>

		<div
			class="mt-4 gap-1 text-base font-medium text-slate-600 dark:text-slate-300 flex flex-col items-center"
		>
			<p>{sms.effectiveDate}</p>
			<p class="font-bold">{sms.lastUpdated.replace('{lastUpdated}', lastUpdated)}</p>
		</div>

		<div class="mt-8 space-y-12 text-slate-700 dark:text-slate-300">
			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.introduction.title}
				</h2>
				<p>
					{sms.sections.introduction.content}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.useOfProgram.title}
				</h2>
				<p>
					{sms.sections.useOfProgram.content1}
				</p>
				<p class="mt-4">
					{sms.sections.useOfProgram.content2}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.informationCollected.title}
				</h2>
				<p class="mb-4">
					{sms.sections.informationCollected.intro}
				</p>
				<div class="gap-3 grid">
					{#each sms.sections.informationCollected.items as item}
						<div class="gap-3 flex items-start">
							<svg
								class="h-5 w-5 mt-0.5 text-cyan-600 dark:text-cyan-400 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{item}</span>
						</div>
					{/each}
				</div>
				<p class="mt-6">
					{sms.sections.informationCollected.outro1}
				</p>
				<p class="mt-4">
					{sms.sections.informationCollected.outro2}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.consent.title}
				</h2>
				<p>
					{sms.sections.consent.content1}
				</p>
				<p class="mt-4">
					{sms.sections.consent.content2}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.dataSharing.title}
				</h2>
				<p>
					{sms.sections.dataSharing.content1}
				</p>
				<p class="mt-4">
					{sms.sections.dataSharing.content2}
				</p>
				<p class="mt-4">
					{sms.sections.dataSharing.content3}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.security.title}
				</h2>
				<p>
					{sms.sections.security.content1}
				</p>
				<p class="mt-4">
					{sms.sections.security.content2}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.children.title}
				</h2>
				<p>
					{sms.sections.children.content}
				</p>
			</section>

			<section>
				<h2
					class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg border-l-4"
				>
					{sms.sections.contact.title}
				</h2>
				<p>
					{sms.sections.contact.content1}
				</p>
				<p class="mt-4">
					{sms.sections.contact.content2}
				</p>
				<div class="mt-4 not-italic">
					<p class="font-semibold text-slate-900 dark:text-slate-100">
						{sms.sections.contact.companyName}
					</p>
					<p>
						{sms.sections.contact.emailLabel}<a
							href="mailto:{sms.sections.contact.email}"
							class="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium"
							>{sms.sections.contact.email}</a
						>
					</p>
				</div>
			</section>
		</div>
	</article>
</div>
