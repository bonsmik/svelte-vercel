<script>
  import gramps from '$lib/gramps.png';
	import { linear} from 'svelte/easing';

	
	$: duration = 3000;
	$: easing = linear;
	$: options = {duration, easing, times: 2};

	let show = false;
	
	function spin(node, options) {
		const {times = 1} = options;
		return {
			...options,
			// The value of t passed to the css method
			// varies between zero and one during an "in" transition
			// and between one and zero during an "out" transition.
			css(t) {
				// Svelte takes care of applying the easing function.
				const degrees = 360 * times; // through which to spin
				return `transform: scale(${t}) rotate(${t * degrees}deg);`;
			}
		};
	}
</script>
{#if !show}
<button on:click={()=>show= true}>Click me</button>
{/if}
{#if show}
	<div class="center" transition:spin={options}>
    <div class="content">
      <div class="flex h-screen justify-center items-center gap-4">
        <a href="/pages/first"><img class="max-h-52" alt="Gramps" src={gramps} /></a> goes sveltekit
      </div>
    </div>
	</div>
{/if}

<style>
	.center {
		/* This has a width and height of zero and is
		   only used to center the content on the page. */
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.content {
		/* for rotation about center */
		position: absolute;
		transform: translate(-50%, -50%);
		
		font-size: 64px;
		text-align: center;
		width: 300px;
	}
</style>