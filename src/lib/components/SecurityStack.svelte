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
          desc: 'Cisco Duo delivers enterprise-grade identity and access management by acting as a centralized cloud-based identity store through Duo Directory and enforcing strong access controls at the application layer. Duo Directory consolidates and manages user identities without requiring traditional directory infrastructure, while Duo applies multi-factor authentication, device trust checks, and adaptive access policies. Together, they ensure that only verified users on secure, compliant devices can access business applications, significantly reducing credential-based attacks within SMB and financial environments.',
          color: 'cyan',
          tags: ['Identity']
      },
      {
          title: 'Privileged Access Management',
          vendor: 'Evo Security',
          desc: 'Evo Security provides centralized privileged access management that controls, monitors, and restricts administrative permissions. Evo enforces least-privilege access and records sensitive admin actions, reducing the risk of unauthorized system changes or credential compromise in environments handling financial and client data.',
          color: 'amber',
          tags: ['Identity']
      },
      {
          title: 'Password Management',
          vendor: '1Password',
          desc: '1Password offers secure, encrypted vaults for storing organizational credentials, documents, and shared secrets. 1Password strengthens password hygiene, eliminates unsafe sharing practices, and provides breach monitoring to protect against credential theft—the most common cause of unauthorized access.',
          color: 'emerald',
          tags: ['Identity']
      },
      {
          title: 'Enhanced Email Security',
          vendor: 'Avanan',
          desc: 'Avanan delivers advanced cloud-native email security using API-level analysis to detect phishing, malware, spoofing, and Business Email Compromise. Avanan protects Microsoft 365 and Google Workspace from sophisticated threats by identifying malicious activity inside the inbox where traditional gateways cannot see.',
          color: 'violet',
          tags: ['Cloud']
      },
      {
          title: 'DMARC / SPF / DKIM',
          vendor: 'Avanan',
          desc: 'Avanan manages DMARC, SPF, and DKIM configurations to authenticate outbound messages and prevent domain spoofing. Avanan ensures email integrity and protects clients, partners, and staff from impersonation-based fraud that frequently targets financial and insurance organizations.',
          color: 'sky',
          tags: ['Cloud']
      },
      {
          title: 'Security Awareness Training',
          vendor: 'Ninjio',
          desc: 'Ninjio provides engaging, story-driven cybersecurity training and phishing simulations that build a culture of awareness. Ninjio educates employees on modern threats and empowers them to recognize and report suspicious activity, significantly reducing human error across the organization.',
          color: 'blue',
          tags: ['Training']
      },
      {
          title: 'Cloud Application Security',
          vendor: 'Avanan & CrowdStrike',
          desc: 'Avanan delivers SaaS-native security for Microsoft 365, Google Workspace, and collaboration tools by inspecting email, file sharing, and third-party integrations for phishing, malware, risky apps, and misconfigurations. CrowdStrike complements this by monitoring identity and endpoint telemetry for signs of account takeover, data exfiltration, and lateral movement into SaaS platforms, giving SMBs full-stack protection across users, devices, and cloud services.',
          color: 'indigo',
          tags: ['Cloud', 'Identity']
      },
      {
          title: 'Identity Threat Detection & Response',
          vendor: 'CrowdStrike & Cisco',
          desc: 'CrowdStrike ITDR focuses on detecting and responding to identity-based threats by analyzing authentication patterns, privilege changes, and risky behavior across Active Directory, Entra ID, and other identity stores. Cisco Identity Intelligence enriches this by correlating identity, device, and network signals from Cisco’s security stack, flagging anomalous access, exposed accounts, and policy violations so organizations can quickly contain identity-driven attacks.',
          color: 'fuchsia',
          tags: ['Identity']
      },
      {
          title: 'Cloud Workspace Backups',
          vendor: 'NinjaOne',
          desc: 'NinjaOne delivers automated, immutable SaaS backups for Microsoft 365 and Google Workspace, ensuring critical cloud data remains recoverable in cases of ransomware, accidental deletion, or configuration loss. NinjaOne safeguards business continuity for organizations relying heavily on cloud platforms.',
          color: 'teal',
          tags: ['Cloud']
      },
      {
          title: 'Next Generation Antivirus',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike Falcon Prevent uses machine learning and behavioral analytics to block advanced malware, ransomware, and zero-day threats. CrowdStrike Prevent offers superior protection compared to traditional signature-based antivirus and is essential for securing modern distributed workforces.',
          color: 'rose',
          tags: ['Endpoint']
      },
      {
          title: 'Endpoint Detection & Response',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike Falcon Insight provides enterprise-grade Endpoint Detection and Response with real-time monitoring, behavioral analytics, and automated containment. CrowdStrike enables rapid detection of intrusions and isolates compromised devices before attackers can escalate privileges or exfiltrate data.',
          color: 'pink',
          tags: ['Endpoint']
      },
      {
          title: 'Managed Detection & Response',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike Falcon Complete delivers 24/7 managed detection and response operated by expert analysts who monitor, investigate, and contain threats on your behalf. CrowdStrike’s team provides enterprise-level protection for SMBs lacking internal SOC capabilities.',
          color: 'red',
          tags: ['Endpoint']
      },
      {
          title: 'Managed Threat Hunting',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike Falcon Overwatch performs proactive threat hunting to identify stealthy adversaries who evade automated detection. CrowdStrike analysts look for advanced attack techniques, suspicious behaviors, and hidden compromises, strengthening an organization’s resilience against sophisticated intruders.',
          color: 'orange',
          tags: ['Endpoint']
      },
      {
          title: 'Exposure Management',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike Falcon Exposure Management provides continuous visibility into assets, vulnerabilities, and misconfigurations by unifying Falcon Spotlight and Falcon Discover with adversary-driven risk prioritization. This capability enables organizations to understand their true attack surface, identify the exposures most likely to be exploited, and systematically reduce risk across endpoints, applications, identities, and cloud workloads.',
          color: 'lime',
          tags: ['Endpoint']
      },
      {
          title: 'Unified Event Logging',
          vendor: 'CrowdStrike',
          desc: 'CrowdStrike LogScale and Search Retention deliver unified logging, long-term retention, and SIEM capabilities that support forensic investigations and compliance reporting. CrowdStrike provides deep visibility into identity, endpoint, and cloud activity, helping organizations trace incidents and validate security posture.',
          color: 'slate',
          tags: ['Cloud']
      },
      {
          title: 'Remote Monitoring & Management',
          vendor: 'NinjaOne',
          desc: 'NinjaOne offers centralized remote monitoring and management that automates maintenance, enforces security configurations, and monitors system health. NinjaOne improves operational efficiency, reduces misconfigurations, and ensures consistent security standards across all managed endpoints.',
          color: 'cyan',
          tags: ['Endpoint']
      },
      {
          title: 'Patching',
          vendor: 'CrowdStrike & NinjaOne',
          desc: 'NinjaOne automates OS and application patch deployment with policy-based scheduling, testing, and reporting across servers and workstations. CrowdStrike Falcon for IT adds real-time asset visibility, missing-patch detection, and remote remediation for stubborn or high-risk endpoints, ensuring critical vulnerabilities are closed quickly across the entire environment.',
          color: 'emerald',
          tags: ['Endpoint']
      },
      {
          title: 'Endpoint & Server Backups',
          vendor: 'NinjaOne',
          desc: 'NinjaOne endpoint backups provide reliable protection for servers and workstations through scheduled backups, version control, and fast restore options. NinjaOne ensures organizations can recover quickly from data loss, ransomware, or hardware failure, supporting continuity for financial operations.',
          color: 'violet',
          tags: ['Endpoint']
      },
      {
          title: 'Network Management',
          vendor: 'Ubiquiti UniFi',
          desc: 'Ubiquiti UniFi delivers centralized management of wired and wireless networks with VLAN segmentation, secure Wi-Fi policies, device profiling, and intrusion detection. UniFi simplifies network governance and strengthens perimeter defense by limiting lateral movement opportunities.',
          color: 'sky',
          tags: ['Network']
      },
      {
          title: 'Secure Service Edge',
          vendor: 'Cisco Umbrella',
          desc: 'Cisco Umbrella provides DNS-layer security, secure web gateway, CASB, and cloud-delivered firewall controls to inspect and filter internet-bound traffic, while Cisco Secure Access extends this with Zero Trust Network Access and a unified client to broker secure, least-privilege access to private and SaaS applications. Together, they deliver a modern SASE/SSE architecture that protects remote and hybrid users without relying on legacy VPNs.',
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
