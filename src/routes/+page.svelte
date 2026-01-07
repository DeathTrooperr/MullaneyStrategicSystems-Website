<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
  import { enhance } from '$app/forms';

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

  let turnstileToken = $state('');
  let isSubmitting = $state(false);
  let formStatus = $state<{ success?: boolean; message?: string } | null>(null);
  let turnstileContainer = $state<HTMLElement | null>(null);
  let widgetId = $state<string | null>(null);

  async function handleEnhance() {
    isSubmitting = true;
    return async ({ result }: { result: any }) => {
      isSubmitting = false;
      if (result.type === 'success') {
        formStatus = { success: true };
        turnstileToken = '';
        // Reset Turnstile widget
        if ((window as any).turnstile && widgetId) {
          (window as any).turnstile.reset(widgetId);
        }
      } else if (result.type === 'failure') {
        // Reset Turnstile on failure as well to allow retry
        if ((window as any).turnstile && widgetId) {
          (window as any).turnstile.reset(widgetId);
        }
        formStatus = { 
          success: false, 
          message: result.data?.message || 'Something went wrong' 
        };
      } else if (result.type === 'error') {
        formStatus = { 
          success: false, 
          message: 'A server error occurred. Please try again later.' 
        };
      }
    };
  }

  onMount(() => {
    const initTurnstile = () => {
      if ((window as any).turnstile && turnstileContainer) {
        widgetId = (window as any).turnstile.render(turnstileContainer, {
          sitekey: PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            turnstileToken = token;
          },
          'error-callback': () => {
            turnstileToken = '';
            formStatus = { success: false, message: 'Turnstile verification failed to load. Please refresh.' };
          },
          'expired-callback': () => {
            turnstileToken = '';
            if ((window as any).turnstile && widgetId) {
              (window as any).turnstile.reset(widgetId);
            }
          }
        });
      }
    };

    if ((window as any).turnstile) {
      initTurnstile();
    } else {
      // If script not loaded yet, wait for it
      const interval = setInterval(() => {
        if ((window as any).turnstile) {
          clearInterval(interval);
          initTurnstile();
        }
      }, 100);
      
      return () => {
        clearInterval(interval);
        if (widgetId && (window as any).turnstile) {
          (window as any).turnstile.remove(widgetId);
        }
      };
    }

    return () => {
      if (widgetId && (window as any).turnstile) {
        (window as any).turnstile.remove(widgetId);
      }
    };
  });
</script>


  <!-- Hero / Opening -->
  <section class="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h1 class="text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50 animate-[fade-up_0.6s_ease-out_0.05s_both]">
          Mullaney Strategic Systems, <span class="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text dark:from-cyan-400 dark:to-blue-400">Security done right.</span>
        </h1>
        <p class="mt-6 text-pretty text-base leading-7 text-slate-700 dark:text-slate-300 animate-[fade-up_0.6s_ease-out_0.15s_both]">
          Mullaney Strategic Systems delivers opinionated, security-first managed services for small business with a focus on financial & insurance practices that can’t afford to get cybersecurity wrong.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3 animate-[fade-up_0.6s_ease-out_0.25s_both]">
          <a href="#contact" class="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-cyan-700/20 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
            Talk to an expert
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#plans" class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-slate-800 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-100 dark:ring-slate-600 dark:hover:bg-slate-800">
            View plans
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-200/40 to-blue-200/20 blur-2xl dark:from-cyan-400/10 dark:to-blue-400/10"></div>
        <div class="mx-auto w-full max-w-md rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur ring-1 ring-black/0 animate-[fade-in_0.7s_ease-out_0.2s_both] dark:border-slate-700/60 dark:bg-slate-900/70">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">What we handle for you:</h2>
          <ul class="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span> Google Workspace, Microsoft 365 & Cloud Security</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span> Enhanced Email Security & Employee Awareness Training</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span> Identity & Privileged Access Management</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span> Endpoint Security, Exposure Management, and Patching.</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span> 24/7 Managed Detection, Response, & Threat Hunting</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Providers (moved above plans) -->
  <section id="providers" class="border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 py-16 dark:border-slate-700/40 dark:from-slate-950 dark:to-slate-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">We meet you where you are</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-300">We support today’s leading cloud workspace providers and both hybrid and cloud‑only environments.</p>
      </header>
      <div class="mt-10 grid items-stretch justify-center gap-6 sm:grid-cols-3">
        <!-- Google Workspace -->
        <div class="group relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900" aria-label="Google Workspace">
          <div class="flex items-center gap-3">
            <img src="/imgs/google.png" alt="Google Workspace logo" class="h-7 w-7 object-contain" loading="lazy" />
            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Google Workspace</span>
          </div>
        </div>

        <!-- Microsoft 365 -->
        <div class="group relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900" aria-label="Microsoft 365">
          <div class="flex items-center gap-3">
            <img src="/imgs/MS365.png" alt="Microsoft 365 logo" class="h-7 w-7 object-contain" loading="lazy" />
            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Microsoft 365</span>
          </div>
        </div>

        <!-- Hybrid / Active Directory -->
        <div class="group relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900" aria-label="Hybrid Active Directory">
          <div class="flex items-center gap-3">
            <img src="/imgs/azure-active-directory-1.svg" alt="Azure Active Directory logo" class="h-7 w-7 object-contain" loading="lazy" />
            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Hybrid AD</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Plans (moved below providers) -->
  <section id="plans" class="bg-gradient-to-b from-slate-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Service Plans</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-300">Pick the level of coverage that fits where you are today—confidently grow into tomorrow.</p>
      </header>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <!-- Essentials -->
        <article class="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900">
          <div class="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true"></div>
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">Essentials</h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Core managed IT and security for small teams that need strong fundamentals without internal IT staff.</p>
            </div>
            <svg class="h-10 w-10 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M12 3l9 4v6c0 5-4 8-9 8s-9-3-9-8V7l9-4z"/>
            </svg>
          </div>
          <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Managed Cloud Security with posture management & SSO</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Managed endpoints with patching and monitoring</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Business-grade password management</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Secure email and SaaS protection</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Security awareness training & basic reporting</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span> 24/7 Managed Detection and Response</li>
          </ul>
          <div class="mt-6">
            <a href="#contact" class="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-cyan-700/20 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">Get started</a>
          </div>
          <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">Covers all your small business cyber needs at an affordable cost.</p>
        </article>

        <!-- Complete -->
        <article class="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm ring-1 ring-black/0 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900">
          <div class="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true"></div>
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="mb-1 inline-flex items-center rounded-full bg-blue-600/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-500/20 dark:bg-blue-400/10 dark:text-blue-300">Most Popular</div>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">Complete</h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Everything in Essentials plus advanced detection, response, and deeper alignment with regulatory expectations.</p>
            </div>
            <svg class="h-10 w-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M12 3l9 4v6c0 5-4 8-9 8s-9-3-9-8V7l9-4z"/>
              <path d="M8 13l2 2 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <ul class="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span> Enhanced endpoint protection with MDR/SOC coverage</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span> Identity threat detection and conditional access</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span> Extended logging and security monitoring</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span> Richer reporting for audits and client due-diligence</li>
            <li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span> Priority support and guidance on hardening & roadmap</li>
          </ul>
          <div class="mt-6">
            <a href="#contact" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-700/20 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Get started</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Security Stack -->
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

  <!-- Contact -->
  <section id="contact" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm ring-1 ring-black/0 transition duration-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900">
        <!-- subtle glow accents -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true"></div>
        <div class="pointer-events-none absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true"></div>

        <div class="grid gap-0 md:grid-cols-2">
          <!-- Left: content -->
          <div class="p-8 sm:p-10 lg:p-12">
            <header>
              <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Let’s talk</h2>
              <p class="mt-3 max-w-prose text-slate-600 dark:text-slate-300">Ready to tighten your security stack or move away from ad‑hoc IT support? We’ll review your environment and outline clear next steps.</p>
            </header>

            <div class="mt-6 space-y-4 text-sm">
              <div class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <svg class="h-5 w-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6l8 6 8-6"/><rect x="4" y="6" width="16" height="12" rx="2"/></svg>
                <a class="font-medium hover:text-cyan-700 dark:hover:text-cyan-300 underline-offset-4 hover:underline" href="mailto:samuel@mullaneystrategicsystems.com">samuel@mullaneystrategicsystems.com</a>
              </div>
              <div class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <svg class="h-5 w-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a class="font-medium hover:text-cyan-700 dark:hover:text-cyan-300 underline-offset-4 hover:underline" href="tel:4434405299">443-440-5299</a>
              </div>
              <div class="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <svg class="h-5 w-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M19.5 10.5c0 4.5-7.5 10.5-7.5 10.5S4.5 15 4.5 10.5a7.5 7.5 0 1 1 15 0z"/>
                  <circle cx="12" cy="10.5" r="2.5"/>
                </svg>
                <span class="font-medium">Maryland & Delaware</span>
              </div>
            </div>

            <div class="mt-8">
              <a href="https://mullaneystrategicsystems.zoom.us/zbook/d/9libhoia/mullaney-strategic-systems-consultation" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-black/10 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white">
                Book a consultation
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: simple email form -->
          <div class="relative border-t border-slate-200/70 p-8 sm:p-10 lg:p-12 md:border-l md:border-t-0 dark:border-slate-700/60">
            {#if formStatus?.success}
              <div class="flex h-full flex-col items-center justify-center text-center space-y-4">
                <div class="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
                  <svg class="h-8 w-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">Message sent!</h3>
                <p class="text-slate-600 dark:text-slate-300">Thanks for reaching out. We'll get back to you soon.</p>
                <button 
                  onclick={() => formStatus = null}
                  class="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Send another message
                </button>
              </div>
            {:else}
              <form 
                class="space-y-4" 
                method="POST" 
                use:enhance={handleEnhance}
                aria-labelledby="contact-heading"
              >
                <h3 id="contact-heading" class="text-xl font-semibold text-slate-900 dark:text-slate-50">Send a message</h3>
                <p class="text-sm text-slate-600 dark:text-slate-300">Fill out the form below and we'll be in touch.</p>

                {#if formStatus?.success === false}
                  <div class="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    {formStatus.message}
                  </div>
                {/if}

                <div>
                  <label for="name" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
                </div>

                <div>
                  <label for="email" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
                </div>

                <div>
                  <label for="message" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                  <textarea id="message" name="message" rows="4" required placeholder="Tell us a bit about your environment and goals..." class="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"></textarea>
                </div>

                <div 
                  bind:this={turnstileContainer}
                ></div>

                <div class="pt-2">
                  <button 
                    type="submit" 
                    disabled={!turnstileToken || isSubmitting} 
                    class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-cyan-700/20 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {#if isSubmitting}
                      Sending...
                    {:else}
                      Send message
                    {/if}
                  </button>
                </div>

                <p class="text-xs text-slate-500 dark:text-slate-400">We usually respond within one business day.</p>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>

