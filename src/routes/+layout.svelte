<script>
  import Header from "../lib/components/Header.svelte";
  import "./pico.css";
  import "../styles.css";
</script>

<div class="app">
  <div>
    <Header />
    <main class="container">
      <slot />
    </main>
  </div>
</div>

<style>
</style>
