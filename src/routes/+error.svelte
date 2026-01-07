<script lang="ts">
  import { page } from '$app/state';
</script>

<div class="relative isolate flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-300/20 via-sky-300/10 to-blue-300/15 blur-3xl dark:from-cyan-400/10 dark:via-sky-400/5 dark:to-blue-400/10"></div>
  </div>

  <div class="text-center">
    <p class="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 animate-[fade-up_0.6s_ease-out_0.05s_both]">
      Error {page.status}
    </p>
    
    <h1 class="mt-4 text-pretty text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl animate-[fade-up_0.6s_ease-out_0.15s_both]">
      {#if page.status === 404}
        Page not found
      {:else}
        {page.error?.message || 'Something went wrong'}
      {/if}
    </h1>

    <p class="mt-6 text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 max-w-lg mx-auto animate-[fade-up_0.6s_ease-out_0.25s_both]">
      {#if page.status === 404}
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn't exist.
      {:else}
        An unexpected error occurred. Our team has been notified and we're working to fix it.
      {/if}
    </p>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-4 animate-[fade-up_0.6s_ease-out_0.35s_both]">
      <a
        href="/"
        class="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-cyan-700/20 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        Back to home
      </a>
      <a 
        href="mailto:support@mullaneystrategicsystems.com"
        class="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-100 dark:ring-slate-600 dark:hover:bg-slate-800"
      >
        Email support
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</div>
