<script lang="ts">
  export let title: string;
  export let vendor: string;
  export let desc: string;
  // CSS classes to apply to the <svg> element (e.g., sizing and color)
  export let className: string = '';
  export let ariaLabel: string = '';

  // Create deterministic hash from input text
  const source = `${title}|${vendor}|${desc}`.trim();
  function hashString(str: string): number {
    let h = 2166136261 >>> 0; // FNV-1a base
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  const hash = hashString(source || title || vendor || 'service');
  // Pick a motif (0..4) and some minor variations
  const motif = hash % 5; // 5 shapes
  const r1 = (hash >> 3) % 1000;
  const r2 = (hash >> 7) % 1000;

  // Derive up to 2 initials from title, otherwise vendor
  function getInitials(text: string): string {
    const parts = (text || '').replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '';
    const first = parts[0]?.[0] ?? '';
    const second = (parts.length > 1 ? parts[1][0] : (vendor || '').replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean)[0]?.[0]) ?? '';
    return (first + (second || '')).toUpperCase();
  }

  const initials = getInitials(title) || getInitials(vendor) || '';
</script>

<!-- The SVG uses currentColor so parent can control color via utility classes -->
<svg class={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" role="img" aria-label={ariaLabel || `${title} logo`}>
  {#if motif === 0}
    <!-- Shield -->
    <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
    <path d="M8 12l3 3 5-5" stroke-linecap="round" stroke-linejoin="round" />
  {:else if motif === 1}
    <!-- Key -->
    <circle cx="9" cy="10" r="3" />
    <path d="M12 10h7m-3 0v3m0-3v-3" stroke-linecap="round" />
  {:else if motif === 2}
    <!-- Cloud/Lock -->
    <path d="M7.5 16.5h8a3 3 0 0 0 .4-5.98A5 5 0 0 0 7.1 9.7a3.5 3.5 0 0 0 .6 6.8z" />
    <rect x="9" y="12.5" width="6" height="5" rx="1" />
    <path d="M12 12.5v-1.2a2 2 0 1 1 4 0v1.2" />
  {:else if motif === 3}
    <!-- Eye/Detection -->
    <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 9.5v5M9.5 12h5" opacity="{0.2 + (r1 % 5)/10}" />
  {:else}
    <!-- Hex/Network -->
    <path d="M12 3l5 3v6l-5 3-5-3V6l5-3z" />
    <path d="M7 9l5 3 5-3M7 12l5 3 5-3" opacity="{0.35 + (r2 % 4)/10}" />
  {/if}

  {#if initials}
    <!-- Initials overlay; use fill currentColor with slight opacity so strokes remain visible -->
    <g fill="currentColor" stroke="none" opacity="0.85">
      <text x="12" y="16.2" text-anchor="middle" font-size="7.5" font-weight="700" font-family='ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, "Segoe UI Emoji"' letter-spacing=".5">
        {initials}
      </text>
    </g>
  {/if}
</svg>

<style>
  /* Ensure text rendering is crisp in small sizes */
  text { paint-order: stroke fill; }
</style>
