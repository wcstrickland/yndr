<script>
  export let header = false;
  export let footer = false;
</script>

<article>
  {#if header}
    <header>{header}</header>
  {/if}

  {#if footer}
    <footer>{footer}</footer>
  {/if}
</article>

<style></style>
