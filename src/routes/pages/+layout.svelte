<script>
  import "../../app.css";
</script>

<svelte:head>
	<title>Sveltekit</title>
</svelte:head>

<div class="flex">
<nav class="text-2xl flex flex-col">
  <a href="intro">Introduction</a>
  <a href="core">Core Concepts</a>
  <a href="project">Project Structure</a>
  <a href="deployment">Deploying</a>
  <a href="/another">Another layout</a>
</nav>

<div class="flex flex-col max-w-lg gap-4 m-auto">
  <slot/>
</div>

</div>