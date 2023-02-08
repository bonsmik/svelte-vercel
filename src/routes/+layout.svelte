<script>
  import "../app.css";
</script>
<h1 class="flex justify-center text-3xl font-bold underline pb-2">
  Intro to Svelte kit
</h1>
<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>