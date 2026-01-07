<script lang="ts">
  const lastUpdated = "January 6, 2026"; // Using current date as last updated
</script>

<svelte:head>
  <title>SMS Privacy Policy | Mullaney Strategic Systems</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
  <article class="prose prose-slate dark:prose-invert lg:prose-lg mx-auto">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl text-center">SMS Privacy Policy</h1>
    
    <div class="mt-4 flex flex-col items-center gap-1 text-base font-medium text-slate-600 dark:text-slate-300">
      <p>Effective Date: January 1st, 2026</p>
      <p>Last Updated: {lastUpdated}</p>
    </div>

    <div class="mt-8 space-y-12 text-slate-700 dark:text-slate-300">
      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">1. Introduction</h2>
        <p>
          Mullaney Strategic Systems (“we”, “us”, or “our”), is committed to protecting the privacy
          and security of your personal information when you participate in our SMS/MMS messaging
          program (“Program”). This Privacy Policy explains the types of information we collect,
          how we use and disclose it, and your rights as they relate to your mobile phone number
          and other information when you opt-in to receive our SMS/MMS messages.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">2. Scope</h2>
        <p>
          This Privacy Policy applies to personal information collected when you provide your mobile
          phone number to us or otherwise enroll in our Program (for example via a website form or
          by texting a keyword) and receive recurring or one-time SMS/MMS messages from us or our
          service provider. It does not apply to other services unless specifically referenced.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">3. Information We Collect</h2>
        <p class="mb-4">When you enroll in our SMS/MMS Program, we may collect:</p>
        <div class="grid gap-3">
          {#each [
            'Your mobile phone number.',
            'The date and time when you opted in.',
            'Consent records or method of opt-in.',
            'Any message content you provide (such as replies).',
            'Usage data such as whether messages are opened or interacted with.',
            'If you voluntarily submit additional contact information (e.g., your name or email) along with your mobile number, we may collect that as well.'
          ] as item}
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 mt-0.5 flex-none text-cyan-600 dark:text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">4. How We Use the Information</h2>
        <p class="mb-4">We use the information we collect for the following purposes:</p>
        <div class="grid gap-3">
          {#each [
            'To send you SMS/MMS communications (such as alerts, updates, reminders, promotions or other messages as described at the time of your opt-in).',
            'To verify your phone number, maintain our records of consent and opt-out, and otherwise administer the Program.',
            'To analyze and improve the Program’s performance and to manage subscriber lists.',
            'To comply with relevant legal obligations, regulatory requirements, and carrier requirements (including U.S. A2P/10DLC compliance, if applicable).'
          ] as item}
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 mt-0.5 flex-none text-cyan-600 dark:text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">5. Consent, Opt-In & Opt-Out</h2>
        <div class="grid gap-3">
          {#each [
            'You will not be charged by us for enrolling in the Program; however, your wireless carrier’s standard message and data rates may apply.',
            'By providing your mobile phone number and/or opting in, you consent to receive SMS/MMS messages from us (or on our behalf).',
            'You may opt out of the Program at any time. Each message will include instructions such as “Reply STOP to unsubscribe” (or local equivalent). Upon receiving your opt-out request, we will cease sending you further messages (subject to any legally required period).',
            'If you change or deactivate your mobile number, please let us know, as continued use of the old number may result in messages being sent to someone else.'
          ] as item}
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 mt-0.5 flex-none text-cyan-600 dark:text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">6. Sharing & Disclosure</h2>
        <p class="mb-4">
          We will not rent, sell, or trade your mobile phone number or the personal information we
          collect through the Program to third parties for their independent marketing purposes
          without your explicit consent. We may disclose your information to:
        </p>
        <div class="grid gap-3">
          {#each [
            'Service providers who assist us in delivering the SMS/MMS Program (e.g., message delivery, data processing).',
            'Wireless carriers or regulatory authorities as required by law or carrier programs (for example for 10DLC registration or compliance).',
            'Our affiliates, successors, or in connection with a merger, acquisition or sale of assets, provided the recipient agrees to confidentiality.'
          ] as item}
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 mt-0.5 flex-none text-cyan-600 dark:text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          {/each}
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">7. Retention of Information</h2>
        <p>
          We retain your information (including opt-in and opt-out records) for as long as necessary
          to fulfill the purposes described above, including to demonstrate compliance with carrier
          and regulatory requirements. Once no longer needed, we will securely delete or anonymize
          your data.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">8. Data Security</h2>
        <p>
          We employ administrative, technical and physical safeguards in an effort to protect your
          information from unauthorized access, disclosure, alteration or destruction. While we take
          appropriate steps, no system can guarantee 100% security.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">9. Your Rights & Choices</h2>
        <p>
          Depending on your jurisdiction, you may have certain rights with respect to your personal
          information, such as the right to access, correct or delete your data, or restrict certain
          processing. To exercise such rights or if you have questions about your information, you
          may contact us at support@mullaneystrategicsystems.com.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">10. International Transfers</h2>
        <p>
          If you are located outside the United States, please be aware that your information may be
          transferred to, processed in, and stored in other jurisdictions (including the U.S.) where
          data protection laws may differ. By participating in the Program, you consent to such
          transfer, processing and storage.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">11. Children</h2>
        <p>
          The Program is not directed to children under the age of 18. If we learn that we have
          collected the phone number of a child under 18 without parental consent, we will take
          steps to delete it.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">12. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The revised version will be posted on our website
          and the “Last Updated” date will reflect the change.
          Your continued use of the Program after a change indicates your acceptance of the
          updated policy.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">13. Contact Us</h2>
        <p>
          If you have questions, concerns or requests relating to this Privacy Policy or our SMS/MMS
          Program, contact us at:
        </p>
        <div class="mt-4 not-italic">
          <p class="font-semibold text-slate-900 dark:text-slate-100">Mullaney Strategic Systems LLC</p>
          <p>Email: <a href="mailto:support@mullaneystrategicsystems.com" class="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium">support@mullaneystrategicsystems.com</a></p>
        </div>
      </section>
    </div>
  </article>
</div>
