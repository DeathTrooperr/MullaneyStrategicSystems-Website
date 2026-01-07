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
      desc: 'Evo Security delivers centralized privileged access management to control and monitor administrative permissions. It enforces least-privilege access, secures elevated credentials, and records privileged actions for auditability. This reduces the risk of unauthorized system changes and limits the impact of compromised administrative accounts in sensitive environments.',
      color: 'amber',
      tags: ['Identity']
    },
    {
      title: 'Password Management',
      vendor: '1Password',
      desc: '1Password provides secure, encrypted vaults for storing organizational credentials, documents, and shared secrets. It improves password hygiene through strong encryption, controlled sharing, and breach monitoring. By eliminating unsafe credential practices, 1Password helps prevent account compromise, which remains one of the most common attack vectors.',
      color: 'emerald',
      tags: ['Identity']
    },
    {
      title: 'Email Security',
      vendor: 'Avanan',
      desc: 'Avanan delivers cloud-native email security using API-level analysis to detect phishing, malware, spoofing, and business email compromise. It inspects messages directly inside Microsoft 365 and Google Workspace inboxes. This approach allows Avanan to stop advanced threats that bypass traditional email gateways.',
      color: 'violet',
      tags: ['Cloud']
    },
    {
      title: 'Email Authentication & Monitoring',
      vendor: 'Avanan',
      desc: 'Avanan manages DMARC, SPF, and DKIM configurations to authenticate outbound email and prevent domain spoofing. It identifies legitimate senders, improves authentication alignment, and supports enforcement readiness. This protects organizations from impersonation attacks that frequently target financial and insurance firms.',
      color: 'sky',
      tags: ['Cloud']
    },
    {
      title: 'Security Awareness Training',
      vendor: 'Ninjio',
      desc: 'Ninjio provides story-driven security awareness training combined with phishing simulations. It educates employees on modern attack techniques and reinforces safe behavior through engaging content. This reduces human error and strengthens the organization’s first line of defense against social engineering attacks.',
      color: 'blue',
      tags: ['Training']
    },
    {
      title: 'Cloud Workspace Security',
      vendor: 'Avanan & CrowdStrike',
      desc: 'Avanan secures Microsoft 365 and Google Workspace by inspecting email, file sharing, and third-party integrations for phishing and malware. CrowdStrike Falcon Shield adds SaaS security posture management by discovering SaaS applications, monitoring configurations, and detecting risky OAuth permissions. Together, they reduce data exposure and identity risk across cloud collaboration platforms.',
      color: 'indigo',
      tags: ['Cloud', 'Identity']
    },
    {
      title: 'Identity Threat Detection & Response',
      vendor: 'CrowdStrike & Cisco Duo',
      desc: 'CrowdStrike Falcon Identity Protection detects identity-based attacks by analyzing authentication behavior, privilege changes, and adversary techniques across hybrid identity environments. Cisco Duo complements this by enforcing access controls and providing identity security signals tied to device trust and policy enforcement. This combination enables faster detection and containment of account takeover attempts.',
      color: 'fuchsia',
      tags: ['Identity']
    },
    {
      title: 'Cloud Workspace Backups',
      vendor: 'NinjaOne',
      desc: 'NinjaOne provides automated and immutable backups for Microsoft 365 and Google Workspace. It protects email, files, and collaboration data from accidental deletion, ransomware, or configuration errors. This ensures organizations can quickly restore critical cloud data and maintain business continuity.',
      color: 'teal',
      tags: ['Cloud']
    },
    {
      title: 'Next Generation Antivirus',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Prevent uses machine learning and behavioral analysis to stop malware, ransomware, and zero-day threats. It operates without traditional signatures and updates continuously from the cloud. This provides stronger protection for modern endpoints than legacy antivirus solutions.',
      color: 'rose',
      tags: ['Endpoint']
    },
    {
      title: 'Endpoint Detection & Response',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Insight delivers real-time endpoint detection and response through continuous monitoring and behavioral analytics. It enables rapid investigation and automated containment of compromised devices. This limits attacker movement and reduces the impact of endpoint intrusions.',
      color: 'pink',
      tags: ['Endpoint']
    },
    {
      title: 'Managed Detection & Response',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Complete provides fully managed detection and response operated by CrowdStrike analysts around the clock. The service includes investigation, remediation, and threat containment on behalf of the customer. This delivers enterprise-level security outcomes for organizations without an internal SOC.',
      color: 'red',
      tags: ['Endpoint']
    },
    {
      title: 'Managed Threat Hunting',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Overwatch performs proactive threat hunting to uncover stealthy attackers that evade automated defenses. Analysts search for advanced techniques and suspicious behaviors across the environment. This increases resilience against targeted and sophisticated threats.',
      color: 'orange',
      tags: ['Endpoint']
    },
    {
      title: 'Exposure Management',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Falcon Exposure Management provides visibility into assets, vulnerabilities, and misconfigurations across endpoints and workloads. It prioritizes risk based on adversary behavior rather than raw vulnerability counts. This allows organizations to reduce their most likely attack paths first.',
      color: 'lime',
      tags: ['Endpoint']
    },
    {
      title: 'Unified Event Logging',
      vendor: 'CrowdStrike',
      desc: 'CrowdStrike Next-Gen SIEM and Search Retention deliver centralized log collection, long-term retention, and advanced search capabilities. They unify endpoint, identity, and cloud telemetry in a single platform. This supports investigations, compliance reporting, and incident response.',
      color: 'slate',
      tags: ['Cloud']
    },
    {
      title: 'Remote Monitoring & Management',
      vendor: 'NinjaOne',
      desc: 'NinjaOne provides centralized remote monitoring and management for servers and workstations. It automates maintenance tasks, monitors system health, and enforces configuration standards. This improves operational efficiency while reducing security gaps caused by misconfiguration.',
      color: 'cyan',
      tags: ['Endpoint']
    },
    {
      title: 'Patching',
      vendor: 'CrowdStrike & NinjaOne',
      desc: 'NinjaOne automates operating system and application patching with policy-based scheduling and reporting. CrowdStrike Falcon for IT adds real-time visibility into missing patches and risky assets. Together, they ensure vulnerabilities are addressed quickly and consistently.',
      color: 'emerald',
      tags: ['Endpoint']
    },
    {
      title: 'Endpoint & Server Backups',
      vendor: 'NinjaOne',
      desc: 'NinjaOne provides reliable backups for endpoints and servers through scheduled snapshots and versioned recovery. It supports fast restoration after ransomware, hardware failure, or accidental data loss. This protects operational continuity for critical systems.',
      color: 'violet',
      tags: ['Endpoint']
    },
    {
      title: 'Network Management',
      vendor: 'Ubiquiti UniFi',
      desc: 'Ubiquiti UniFi offers centralized management for wired and wireless networks. It supports VLAN segmentation, secure Wi-Fi policies, and device monitoring across all locations. This strengthens network governance and limits lateral movement within the environment.',
      color: 'sky',
      tags: ['Network']
    },
    {
      title: 'Secure Service Edge',
      vendor: 'Cisco Umbrella',
      desc: 'Cisco Umbrella provides DNS-layer security, secure web gateway, CASB, and cloud-delivered firewall controls for internet-bound traffic. Cisco Secure Access extends this with zero trust network access to private and SaaS applications. Together, they deliver modern SASE and SSE protection without legacy VPNs.',
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
              <svg class={`h-6 w-6 ${c.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" role="img" aria-label={`${item.title} logo`}>
                <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
                <path d="M9 12l3 3 4-4" stroke-linecap="round" stroke-linejoin="round" />
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
