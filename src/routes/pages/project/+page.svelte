<script>
	import Title from "$lib/title.svelte";

  
</script>
<Title>Project Structure</Title>

<pre>
  my-project/
  ├ src/
  │ ├ lib/
  │ │ ├ server/
  │ │ │ └ [your server-only lib files]
  │ │ └ [your lib files]
  │ ├ params/
  │ │ └ [your param matchers]
  │ ├ routes/
  │ │ └ [your routes]
  │ ├ app.html
  │ ├ error.html
  │ ├ hooks.client.js
  │ └ hooks.server.js
  ├ static/
  │ └ [your static assets]
  ├ tests/
  │ └ [your tests]
  ├ package.json
  ├ svelte.config.js
  ├ tsconfig.json
  └ vite.config.js

</pre>