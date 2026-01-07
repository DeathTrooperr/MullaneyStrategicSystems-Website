<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { env } from '$env/dynamic/public';
  import { enhance } from '$app/forms';
  import SecurityStack from '$lib/components/SecurityStack.svelte';

  const PUBLIC_TURNSTILE_SITE_KEY = env.PUBLIC_TURNSTILE_SITE_KEY;

  let turnstileToken = $state('');
  let isSubmitting = $state(false);
  let formStatus = $state<{ success?: boolean; message?: string } | null>(null);
  let turnstileContainer = $state<HTMLElement | null>(null);
  let widgetId = $state<string | null>(null);
  let formElement = $state<HTMLFormElement | null>(null);

  async function handleResetForm() {
    formStatus = null;
    // Reset Turnstile token as it's definitely invalid now
    turnstileToken = '';
    
    // We already reset turnstile on success, but just in case
    if ((window as any).turnstile && widgetId) {
      (window as any).turnstile.reset(widgetId);
    }
    
    // Scroll back to form top if needed
    document.getElementById('contact-form-container')?.scrollIntoView({ behavior: 'smooth' });
  }

  async function handleEnhance() {
    isSubmitting = true;
    return async ({ result, update }: { result: any; update: any }) => {
      // Don't set isSubmitting to false immediately if we are showing success state
      // as it might cause button flicker if the transition is fast
      
      if (result.type === 'success') {
        formStatus = { success: true };
        turnstileToken = '';
        isSubmitting = false;
        
        // Let SvelteKit handle the form reset and state update
        await update({ reset: true });
        
        // Reset Turnstile widget
        if ((window as any).turnstile && widgetId) {
          (window as any).turnstile.reset(widgetId);
        }
      } else if (result.type === 'failure') {
        isSubmitting = false;
        // Reset Turnstile on failure as well to allow retry
        if ((window as any).turnstile && widgetId) {
          (window as any).turnstile.reset(widgetId);
          turnstileToken = '';
        }
        formStatus = { 
          success: false, 
          message: result.data?.message || 'Something went wrong. Please check your information and try again.' 
        };
      } else {
        isSubmitting = false;
        if (result.type === 'error') {
          formStatus = { 
            success: false, 
            message: 'A server error occurred. Please try again later, or contact us directly at samuel@mullaneystrategicsystems.com.' 
          };
        }
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

  <SecurityStack />

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

          <div id="contact-form-container" class="relative border-t border-slate-200/70 p-8 sm:p-10 lg:p-12 md:border-l md:border-t-0 dark:border-slate-700/60">
            {#if formStatus?.success}
              <div in:fade={{ duration: 300 }} out:fade={{ duration: 200 }} class="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center space-y-4 z-10 bg-white dark:bg-slate-900">
                <div in:fly={{ y: 20, duration: 400, delay: 100 }} class="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
                  <svg class="h-8 w-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 in:fly={{ y: 20, duration: 400, delay: 200 }} class="text-xl font-semibold text-slate-900 dark:text-slate-50">Message sent!</h3>
                <p in:fly={{ y: 20, duration: 400, delay: 300 }} class="text-slate-600 dark:text-slate-300">Thanks for reaching out. We'll get back to you soon.</p>
                <button 
                  type="button"
                  onclick={handleResetForm}
                  in:fly={{ y: 20, duration: 400, delay: 400 }}
                  class="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            {/if}

            <div 
              class="{formStatus?.success ? 'invisible pointer-events-none' : 'visible'}"
              aria-hidden={formStatus?.success ? 'true' : 'false'}
            >
              <form 
                bind:this={formElement}
                class="space-y-4" 
                method="POST" 
                use:enhance={handleEnhance}
                aria-labelledby="contact-heading"
              >
                <h3 id="contact-heading" class="text-xl font-semibold text-slate-900 dark:text-slate-50">Send a message</h3>
                <p class="text-sm text-slate-600 dark:text-slate-300">Fill out the form below and we'll be in touch.</p>

                {#if formStatus?.success === false}
                  <div 
                    in:fly={{ y: -10, duration: 300 }}
                    class="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  >
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
                    class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-cyan-700/20 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {#if isSubmitting}
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    {:else}
                      Send message
                    {/if}
                  </button>
                </div>

                <p class="text-xs text-slate-500 dark:text-slate-400">We usually respond within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

