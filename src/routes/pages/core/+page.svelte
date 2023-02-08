<script>
	import Subtitle from "$lib/subtitle.svelte";
  import Title from "$lib/title.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
  
  /** @type {import('./$types').ActionData} */
  export let form;

</script>
<Title>Core concepts</Title>
<Subtitle>Routing</Subtitle>
<p>A filesystem-based router</p>
<Subtitle>Loading data</Subtitle>
{data.random}
<Subtitle>Form actions</Subtitle>
<form method="post"><input type="text" name="test"><button type="submit">Submit</button></form>
Response: {form?.response}
<Subtitle>Page options</Subtitle>
<p>By default, SvelteKit will render (or prerender) any component first on the server and send it to the client as HTML. It will then render the component again in the browser to make it interactive in a process called hydration. For this reason, you need to ensure that components can run in both places. SvelteKit will then initialize a router that takes over subsequent navigations.</p>