<script lang="ts">
  const lastUpdated = "January 8, 2026"; // Using current date as last updated
</script>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
  <article class="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl text-center">SMS / MMS Privacy Policy</h1>
    
    <div class="mt-4 flex flex-col items-center gap-1 text-base font-medium text-slate-600 dark:text-slate-300">
      <p>Effective Date: January 1, 2026</p>
      <p class="font-bold">Last Updated: {lastUpdated}</p>
    </div>

    <div class="mt-8 space-y-12 text-slate-700 dark:text-slate-300">
      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Introduction</h2>
        <p>
          Mullaney Strategic Systems LLC (“we,” “us,” or “our”) operates a business SMS and MMS messaging program (the “Program”) to support direct, service-related communications with our customers and clients. This Privacy Policy explains how personal information is collected, used, stored, and protected when you participate in the Program.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Use of the Program</h2>
        <p>
          Our SMS/MMS Program is used exclusively for non-marketing, operational purposes, including customer support, meeting confirmations and scheduling, service coordination, and direct one-to-one client communications. We do not send advertising, promotional, or marketing messages through this Program.
        </p>
        <p class="mt-4">
          Participation is intended only for business and personal customers 18 years of age or older.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Information We Collect and How It Is Used</h2>
        <p class="mb-4">
          To operate the Program and comply with applicable telecommunications, legal, and carrier requirements, we collect only the minimum information necessary. This may include:
        </p>
        <div class="grid gap-3">
          {#each [
            'Your mobile phone number.',
            'The date, time, and method of your opt-in.',
            'Consent and opt-out records.',
            'Message content exchanged with us.',
            'Basic message delivery metadata.'
          ] as item}
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 mt-0.5 flex-none text-cyan-600 dark:text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          {/each}
        </div>
        <p class="mt-6">
          This information is used solely to deliver and respond to SMS/MMS communications, coordinate meetings and services, maintain consent and compliance records, and satisfy applicable laws, regulations, and carrier program requirements, including TCPA, CTIA guidelines, and A2P/10DLC obligations. SMS/MMS information is never used for marketing, advertising, or behavioral profiling.
        </p>
        <p class="mt-4">
          If you voluntarily provide additional information (such as your name or email address) during an SMS conversation, that information may also be collected and associated with your record.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Consent and Your Choices</h2>
        <p>
          By providing your mobile phone number and communicating with us via SMS or MMS, you consent to receive messages related to the purposes described above. Message and data rates may apply depending on your wireless carrier and plan.
        </p>
        <p class="mt-4">
          You may opt out at any time by replying STOP to any message. Once your opt-out request is processed, we will cease sending SMS/MMS messages except where required by law. If your phone number changes or is reassigned, you are responsible for notifying us to prevent unintended delivery.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Data Storage, Sharing, and Retention</h2>
        <p>
          SMS/MMS data associated with the Program is stored and processed by Zoom Communications, Inc., our third-party communications and messaging service provider, within Zoom’s systems and infrastructure.
        </p>
        <p class="mt-4">
          We do not sell, rent, or share mobile phone numbers for third-party marketing purposes. Information may be disclosed only to authorized service providers that support message delivery, storage, or compliance; to wireless carriers or regulatory authorities as required by law or carrier programs; or in connection with a merger, acquisition, or sale of assets, subject to appropriate confidentiality obligations.
        </p>
        <p class="mt-4">
          Information is retained only for as long as necessary to operate the Program, maintain required consent and compliance records, and satisfy applicable legal, regulatory, and carrier requirements. When no longer required, data is securely deleted or anonymized.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Data Security and International Processing</h2>
        <p>
          We implement reasonable administrative, technical, and organizational safeguards designed to protect SMS/MMS information from unauthorized access, disclosure, alteration, or misuse. While we take appropriate measures, no system can be guaranteed to be completely secure.
        </p>
        <p class="mt-4">
          If you are located outside the United States, your information may be transferred to and processed in the United States or other jurisdictions where data protection laws may differ. Participation in the Program constitutes consent to such processing.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Children</h2>
        <p>
          The Program is not intended for individuals under the age of 18. If we become aware that we have collected SMS/MMS information from a person under 18 without appropriate consent, we will promptly delete the information and place the associated phone number on our internal do-not-contact list to prevent future communications.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">Changes and Contact Information</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in law, carrier requirements, or Program operations. Updates will be posted on our website with a revised “Last Updated” date. Continued participation in the Program constitutes acceptance of the updated policy.
        </p>
        <p class="mt-4">
          If you have questions or requests regarding this Privacy Policy or our SMS/MMS Program, you may contact us at:
        </p>
        <div class="mt-4 not-italic">
          <p class="font-semibold text-slate-900 dark:text-slate-100">Mullaney Strategic Systems LLC</p>
          <p>Email: <a href="mailto:support@mullaneystrategicsystems.com" class="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium">support@mullaneystrategicsystems.com</a></p>
        </div>
      </section>
    </div>
  </article>
</div>
