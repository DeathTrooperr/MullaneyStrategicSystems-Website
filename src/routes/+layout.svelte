<script lang="ts">
  import '../app.css';
  let { children } = $props();

  let mobileOpen = $state(false);
  const closeMobile = () => (mobileOpen = false);

  const navItems = [
    { href: '/#opening', label: 'Home' },
    { href: '/#providers', label: 'Cloud Providers' },
    { href: '/#plans', label: 'Service Plans' },
    { href: '/#stack', label: 'Security Stack' },
    { href: '/#contact', label: 'Contact' }
  ];
</script>

<svelte:head>
  <title>Mullaney Strategic Systems</title>
</svelte:head>

<a href="#opening" class="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 focus:rounded-md focus:bg-slate-900 focus:text-white focus:px-3 focus:py-2">Skip to content</a>

<header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-slate-700/40 dark:bg-slate-900/70">
  <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
    <a href="/#opening" class="group inline-flex items-center gap-2" aria-label="Mullaney Strategic Systems home">
      <svg class="h-8 w-8 text-cyan-600 transition group-hover:scale-105 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <defs>
          <linearGradient id="ms-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="currentColor" stop-opacity="1" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M3 18L9 6l3 6 3-6 6 12" stroke="url(#ms-grad)" />
      </svg>
      <span class="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">Mullaney Strategic Systems</span>
    </a>

    <button class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 ring-1 ring-slate-300/60 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-800 md:hidden" aria-controls="primary-menu" aria-expanded={mobileOpen} onclick={() => (mobileOpen = !mobileOpen)}>
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
      <span class="text-sm">Menu</span>
    </button>

    <ul id="primary-menu" class="hidden items-center gap-6 md:flex">
      {#each navItems as item}
        <li>
          <a href={item.href} class="text-sm font-medium text-slate-700 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-200 dark:hover:text-cyan-300">{item.label}</a>
        </li>
      {/each}
    </ul>
  </nav>

  {#if mobileOpen}
    <div class="md:hidden" role="dialog" aria-modal="true">
      <div class="border-t border-slate-200/60 bg-white px-4 py-3 dark:border-slate-700/40 dark:bg-slate-900">
        <ul class="space-y-2 cursor-pointer" onclick={closeMobile} onkeydown={(e) => e.key === 'Enter' && closeMobile()} role="presentation">
          {#each navItems as item}
            <li>
              <a href={item.href} class="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-800">{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</header>

<main id="opening" class="relative isolate flex min-h-screen flex-col">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-24 left-1/2 h-[32rem] w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-300/40 via-sky-300/20 to-blue-300/30 blur-3xl dark:from-cyan-400/20 dark:via-sky-400/10 dark:to-blue-400/20 animate-[fade-in_0.8s_ease-out_0.05s_both]"></div>
    <div class="absolute bottom-[-8rem] right-[-6rem] h-[28rem] w-full max-w-4xl rounded-full bg-gradient-to-tr from-blue-300/30 via-indigo-300/20 to-sky-300/20 blur-3xl dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-sky-400/10"></div>
  </div>

  {@render children()}

  <div class="mt-8 flex justify-center pb-8">
    <a href="#opening" class="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300">
      Back to top
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5m0 0l-7 7m7-7l7 7"/></svg>
    </a>
  </div>
</main>

<footer class="relative border-t border-slate-200/60 bg-white py-8 dark:border-slate-700/40 dark:bg-slate-950">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">© {new Date().getFullYear()} Mullaney Strategic Systems. All rights reserved.</p>
      <a href="/sms" class="text-xs text-slate-400 hover:text-cyan-600 dark:text-slate-500 dark:hover:text-cyan-400">SMS Privacy Policy</a>
    </div>
  </div>
  <svg aria-hidden="true" class="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-48 w-full max-w-7xl -translate-x-1/2 blur-3xl" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="footer-grad" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#22d3ee" stop-opacity="0.15"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/></linearGradient></defs><ellipse cx="300" cy="100" rx="280" ry="80" fill="url(#footer-grad)"/></svg>
</footer>
