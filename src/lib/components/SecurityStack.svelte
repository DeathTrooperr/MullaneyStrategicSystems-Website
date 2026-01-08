<script lang="ts">
  type StackItem = {
    title: string;
    vendor: string;
    desc: string;
    color: string; // tailwind color name for accents
    tags: string[]; // categorization pills e.g., Identity, Cloud, Endpoints, Network
  };

  type ColorStyle = {
    bg: string; // background for logo circle
    ring: string; // ring color for logo circle
    text: string; // icon/text color
    divider: string; // gradient middle color
    spot: string; // decorative spot color
  };

  const colorMap: Record<string, ColorStyle> = {
    cyan: {
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      ring: 'ring-cyan-300/50 dark:ring-cyan-400/30',
      text: 'text-cyan-600 dark:text-cyan-400',
      divider: 'via-cyan-400/30',
      spot: 'bg-cyan-400'
    },
    emerald: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      ring: 'ring-emerald-300/50 dark:ring-emerald-400/30',
      text: 'text-emerald-600 dark:text-emerald-400',
      divider: 'via-emerald-400/30',
      spot: 'bg-emerald-400'
    },
    violet: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      ring: 'ring-violet-300/50 dark:ring-violet-400/30',
      text: 'text-violet-600 dark:text-violet-400',
      divider: 'via-violet-400/30',
      spot: 'bg-violet-400'
    },
    sky: {
      bg: 'bg-sky-100 dark:bg-sky-900/30',
      ring: 'ring-sky-300/50 dark:ring-sky-400/30',
      text: 'text-sky-600 dark:text-sky-400',
      divider: 'via-sky-400/30',
      spot: 'bg-sky-400'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      ring: 'ring-blue-300/50 dark:ring-blue-400/30',
      text: 'text-blue-600 dark:text-blue-400',
      divider: 'via-blue-400/30',
      spot: 'bg-blue-400'
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      ring: 'ring-indigo-300/50 dark:ring-indigo-400/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      divider: 'via-indigo-400/30',
      spot: 'bg-indigo-400'
    },
    fuchsia: {
      bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
      ring: 'ring-fuchsia-300/50 dark:ring-fuchsia-400/30',
      text: 'text-fuchsia-600 dark:text-fuchsia-400',
      divider: 'via-fuchsia-400/30',
      spot: 'bg-fuchsia-400'
    },
    amber: {
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      ring: 'ring-amber-300/50 dark:ring-amber-400/30',
      text: 'text-amber-600 dark:text-amber-400',
      divider: 'via-amber-400/30',
      spot: 'bg-amber-400'
    },
    teal: {
      bg: 'bg-teal-100 dark:bg-teal-900/30',
      ring: 'ring-teal-300/50 dark:ring-teal-400/30',
      text: 'text-teal-600 dark:text-teal-400',
      divider: 'via-teal-400/30',
      spot: 'bg-teal-400'
    },
    rose: {
      bg: 'bg-rose-100 dark:bg-rose-900/30',
      ring: 'ring-rose-300/50 dark:ring-rose-400/30',
      text: 'text-rose-600 dark:text-rose-400',
      divider: 'via-rose-400/30',
      spot: 'bg-rose-400'
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      ring: 'ring-pink-300/50 dark:ring-pink-400/30',
      text: 'text-pink-600 dark:text-pink-400',
      divider: 'via-pink-400/30',
      spot: 'bg-pink-400'
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      ring: 'ring-red-300/50 dark:ring-red-400/30',
      text: 'text-red-600 dark:text-red-400',
      divider: 'via-red-400/30',
      spot: 'bg-red-400'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      ring: 'ring-orange-300/50 dark:ring-orange-400/30',
      text: 'text-orange-600 dark:text-orange-400',
      divider: 'via-orange-400/30',
      spot: 'bg-orange-400'
    },
    lime: {
      bg: 'bg-lime-100 dark:bg-lime-900/30',
      ring: 'ring-lime-300/50 dark:ring-lime-400/30',
      text: 'text-lime-600 dark:text-lime-400',
      divider: 'via-lime-400/30',
      spot: 'bg-lime-400'
    },
    slate: {
      bg: 'bg-slate-100 dark:bg-slate-900/30',
      ring: 'ring-slate-300/50 dark:ring-slate-400/30',
      text: 'text-slate-600 dark:text-slate-400',
      divider: 'via-slate-400/30',
      spot: 'bg-slate-400'
    }
  };

  const stackItems: StackItem[] = [
    {
      title: 'Identity Access Management',
      vendor: 'Cisco Duo',
      desc: 'Cisco Duo serves as our cornerstone security-first identity directory and access control platform. It enables strong single sign-on for SaaS applications and endpoint access while enforcing multi-factor authentication, device trust, and adaptive access policies. By centralizing identity enforcement around security posture and risk, Duo ensures that only approved users on secure devices can access business systems.',
      color: 'cyan',
      tags: ['Identity']
    },
    {
      title: 'Privileged Access Management',
      vendor: 'Evo Security',
      desc: 'Evo Security provides centralized privileged access management to control and monitor administrative permissions. It enforces least-privilege access and secures elevated credentials with identity-based MFA for all administrative actions. By eliminating shared administrative accounts and providing granular oversight, Evo reduces the risk of unauthorized system changes and lateral movement.',
      color: 'amber',
      tags: ['Identity']
    },
    {
      title: 'Password Management',
      vendor: '1Password',
      desc: '1Password provides secure, encrypted vaults for managing organizational credentials, documents, and shared secrets. It enforces strong password hygiene through centralized policy management, secure credential sharing, and proactive breach monitoring. By eliminating unsafe storage practices and reusing weak passwords, 1Password reduces the risk of account compromise and credential-based attacks.',
      color: 'emerald',
      tags: ['Identity']
    },
    {
      title: 'Email Security',
      vendor: 'Avanan',
      desc: 'Avanan delivers cloud-native email security using API-level analysis to detect phishing, malware, and business email compromise inside the inbox. It leverages advanced AI to identify malicious intent and anomalous behavior that traditional gateways often miss. This approach prevents credential harvesting and financial fraud before they reach the user.',
      color: 'violet',
      tags: ['Cloud']
    },
    {
      title: 'Email Authentication & Monitoring',
      vendor: 'Avanan',
      desc: 'Avanan automates DMARC, SPF, and DKIM enforcement to authenticate outbound email and protect brand reputation. It provides continuous visibility into third-party sending services to ensure only authorized sources can send mail on behalf of the organization. This reduces the risk of domain spoofing and improves global email deliverability.',
      color: 'sky',
      tags: ['Cloud']
    },
    {
      title: 'Security Awareness Training',
      vendor: 'Ninjio',
      desc: 'Ninjio delivers story-driven security awareness training combined with automated phishing simulations to reinforce safe digital habits. It educates employees on modern social engineering techniques through brief, high-impact episodes designed for executive and staff engagement. This reduces human-centric risk and strengthens the organization’s primary defensive layer.',
      color: 'blue',
      tags: ['Training']
    },
    {
      title: 'Cloud Workspace Security',
      vendor: 'Avanan & CrowdStrike',
      desc: 'This integrated solution secures Microsoft 365 and Google Workspace by combining deep API-based email inspection with SaaS posture management. It identifies misconfigurations, monitors risky OAuth permissions, and detects malicious file sharing across cloud collaboration suites. By unifying visibility, it reduces data exposure and ensures consistent security policies across the cloud workspace.',
      color: 'indigo',
      tags: ['Cloud', 'Identity']
    },
    {
      title: 'Identity Threat Detection & Response',
      vendor: 'CrowdStrike & Cisco Duo',
      desc: 'CrowdStrike Falcon Identity Protection analyzes authentication behavior and privilege changes to detect identity-based attacks in real-time. When combined with Cisco Duo’s adaptive access policies, it enables automated step-up authentication or access blocking during suspicious events. This integrated approach stops account takeovers and prevents unauthorized access to critical systems.',
      color: 'fuchsia',
      tags: ['Identity']
    },
    {
      title: 'Cloud Workspace Backups',
      vendor: 'NinjaOne',
      desc: 'NinjaOne provides automated, immutable backups for Microsoft 365 and Google Workspace to protect against data loss and ransomware. It ensures that email, SharePoint, OneDrive, and Google Drive data are securely archived and independently recoverable. This guarantees business continuity and meets regulatory requirements for data retention and availability.',
      color: 'teal',
      tags: ['Cloud']
    },
    {
      title: 'Next Generation Antivirus',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Prevent uses machine learning and behavioral analysis to stop known malware and sophisticated zero-day attacks. It operates through a single lightweight agent that enforces protection without the performance impact or signature-dependency of legacy antivirus. This ensures endpoints remain secure against rapidly evolving threats, even when offline.',
      color: 'rose',
      tags: ['Endpoint']
    },
    {
      title: 'Endpoint Detection & Response',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Insight provides continuous visibility and response capabilities across the entire endpoint fleet. It records all relevant system activity to enable rapid forensic investigation and automated containment of detected threats. This reduces attacker dwell time and ensures that security incidents are identified and mitigated before they escalate.',
      color: 'pink',
      tags: ['Endpoint']
    },
    {
      title: 'Managed Detection & Response',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Complete delivers 24/7 managed detection and response, providing expert-led investigation and surgical remediation. The service acts as an extension of our security team, handling the full lifecycle of a threat from initial detection to final resolution. This ensures enterprise-grade security outcomes and continuous protection without the need for internal SOC operations.',
      color: 'red',
      tags: ['Endpoint']
    },
    {
      title: 'Managed Threat Hunting',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Overwatch provides proactive, human-led threat hunting to identify stealthy adversaries that bypass automated defenses. Specialized analysts monitor environment telemetry around the clock to uncover sophisticated attack patterns and emerging techniques. This provides an additional layer of security that ensures targeted attacks are identified in their earliest stages.',
      color: 'orange',
      tags: ['Endpoint']
    },
    {
      title: 'Exposure Management',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Exposure Management provides continuous visibility into all assets, vulnerabilities, and potential attack paths. It prioritizes remediation efforts based on real-world adversary behavior and the criticality of the affected systems. This enables a risk-based approach to patching and configuration hardening that significantly reduces the organization’s attack surface.',
      color: 'lime',
      tags: ['Endpoint']
    },
    {
      title: 'Unified Event Logging',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Next-Gen SIEM provides centralized log management and long-term search retention for security telemetry across the environment. It unifies data from endpoints, identity providers, and cloud workloads to support rapid investigation and compliance auditing. This ensures that critical security events are preserved and remain accessible for incident response and regulatory review.',
      color: 'slate',
      tags: ['Cloud']
    },
    {
      title: 'Remote Monitoring & Management',
      vendor: 'NinjaOne',
      desc: 'NinjaOne serves as our primary platform for centralized endpoint management, monitoring, and automated maintenance. It enforces configuration standards, tracks system health, and provides secure remote access for technical support and troubleshooting. This improves operational stability while ensuring that all systems remain compliant with security policies.',
      color: 'cyan',
      tags: ['Endpoint']
    },
    {
      title: 'Patching',
      vendor: 'CrowdStrike & NinjaOne',
      desc: 'This combined solution automates the distribution and verification of operating system and third-party application patches. It leverages NinjaOne’s orchestration capabilities with CrowdStrike’s vulnerability intelligence to prioritize and deploy critical security updates. This ensures that known vulnerabilities are remediated quickly to prevent exploitation.',
      color: 'emerald',
      tags: ['Endpoint']
    },
    {
      title: 'Endpoint & Server Backups',
      vendor: 'NinjaOne',
      desc: 'NinjaOne provides secure, image-based backups for servers and workstations to ensure rapid recovery from hardware failure or data corruption. It utilizes encrypted storage and automated verification to guarantee the integrity of every recovery point. This protects critical business data and minimizes downtime during operational disruptions.',
      color: 'violet',
      tags: ['Endpoint']
    },
    {
      title: 'Network Management',
      vendor: 'Ubiquiti UniFi',
      desc: 'Ubiquiti UniFi provides centralized management for professional-grade wired and wireless network infrastructure. It enables secure VLAN segmentation, guest network isolation, and continuous monitoring of network performance and connected devices. This ensures a stable, high-performance network environment while enforcing strict access controls at the physical layer.',
      color: 'sky',
      tags: ['Network']
    },
    {
      title: 'Secure Service Edge',
      vendor: 'Cisco Umbrella',
      desc: 'Cisco Umbrella and Secure Access provide a cloud-delivered security layer that protects users wherever they work. It enforces DNS-layer security, secure web gateway controls, and zero-trust network access to private applications and SaaS platforms. By moving security to the edge, it reduces the need for traditional VPNs while providing consistent protection against web-based threats.',
      color: 'blue',
      tags: ['Network', 'Cloud']
    }
  ];

  // Tag filtering state for Security Stack
  let selectedTag = $state<string | null>(null);
  const allTags: string[] = Array.from(new Set(stackItems.flatMap((i) => i.tags))).sort();
  const toggleTag = (tag: string | null) => {
    selectedTag = selectedTag === tag ? null : tag;
  };
</script>

<section id="stack" class="border-y border-slate-200/60 bg-gradient-to-b from-white to-slate-50 py-16 dark:border-slate-700/40 dark:from-slate-950 dark:to-slate-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Our Security Stack</h2>
      <p class="mt-3 text-slate-600 dark:text-slate-300">Behind every plan is a curated toolset from leading security vendors. Explore the components we deploy and why each one matters.</p>
    </header>

    {#if allTags.length}
      <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          class={
            (selectedTag === null)
              ? 'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 bg-cyan-600 text-white ring-cyan-600 hover:bg-cyan-700'
              : 'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 bg-slate-100 text-slate-700 ring-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-700'
          }
          aria-pressed={selectedTag === null}
          onclick={() => toggleTag(null)}
        >
          All
        </button>
        {#each allTags as tag}
          <button
            class={
              (selectedTag === tag)
                ? 'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 bg-cyan-600 text-white ring-cyan-600 hover:bg-cyan-700'
                : 'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 bg-slate-100 text-slate-700 ring-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-700'
            }
            aria-pressed={selectedTag === tag}
            onclick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        {/each}
      </div>
    {/if}

    <div class="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {#each stackItems as item}
        {@const c = colorMap[item.color] ?? colorMap.slate}
        <article
          class={`group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900 ${
            typeof selectedTag === 'string' && item.tags?.includes(selectedTag)
              ? 'ring-cyan-400/40 border-cyan-300/60'
              : ''
          }`}
          class:opacity-100={typeof selectedTag === 'string' ? item.tags?.includes(selectedTag) : true}
          class:opacity-40={typeof selectedTag === 'string' && !item.tags?.includes(selectedTag)}
        >
          <div class={`absolute -top-10 right-[-40px] h-28 w-28 rounded-full opacity-10 blur-2xl transition duration-300 group-hover:opacity-20 ${c.spot}`} aria-hidden="true"></div>
          <div class="flex items-start gap-3">
            <!-- Logo -->
            <div class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${c.bg} ${c.ring}`}>
              <svg class={`h-6 w-6 ${c.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label={`${item.title} logo`}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="min-w-0">
              <h3 class="text-base font-semibold text-slate-900 dark:text-slate-50">
                {item.title}
              </h3>
              <p class="text-xs font-medium text-slate-500 dark:text-slate-400">{item.vendor}</p>
            </div>
          </div>
          <p class="mt-3 text-sm text-slate-700 dark:text-slate-200">{item.desc}</p>
          {#if item.tags?.length}
            <div class="mt-4 flex flex-wrap gap-1.5">
              {#each item.tags as tag}
                <span class="inline-flex items-center rounded-full border border-slate-300/70 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-inset ring-black/0 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">{tag}</span>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>

    <p class="sr-only">Cards are interactive on hover. Animations are reduced if your system prefers reduced motion.</p>
  </div>
</section>
