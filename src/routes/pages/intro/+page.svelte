<script>
  import Title from "$lib/title.svelte";
  
</script>
<Title>Introduction</Title>

  <p>
    Svelte renders UI components. You can compose these components and render an entire page with just Svelte, but you need more than just Svelte to write an entire app.
  </p>
  <p class="font-semibold">
    SvelteKit provides basic functionality like a router — which updates the UI when a link is clicked — and server-side rendering (SSR). But beyond that, building an app with all the modern best practices is fiendishly complicated. Those practices include build optimizations, so that you load only the minimal required code; offline support; preloading pages before the user initiates navigation; configurable rendering that allows you to render different parts of your app on the server with SSR, in the browser client-side rendering, or at build-time with prerendering; and many other things. SvelteKit does all the boring stuff for you so that you can get on with the creative part.
  </p>
  <p class="font-semibold">
    It reflects changes to your code in the browser instantly to provide a lightning-fast and feature-rich development experience by leveraging Vite with a Svelte plugin to do Hot Module Replacement (HMR).
  </p>
  <a href="https://kit.svelte.dev/docs/introduction">https://kit.svelte.dev/docs/introduction</a>
