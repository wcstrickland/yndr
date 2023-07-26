<script>
  import {SvelteToast} from '@zerodevx/svelte-toast'
  import Header from "../lib/components/Header.svelte";
  import "../styles.css";
</script>

<div class="app">
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
  <div>
    <main class="container" style="display:flex;justify-content:center;">
      <slot />
    </main>
  </div>
</div>

<style>
</style>
