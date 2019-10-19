<template>
  <div class="footer">
    <div class="footer-section">
      Made with ♥ and
      <a target="_blank" href="https://vuejs.org">Vue</a>
      by
      <a target="_blank" href="https://github.com/falusi94">@falusi94</a>
    </div>
    <div class="footer-section">
      Data is from the <a target="_blank" href="https://punkapi.com">Punk API</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
  .footer {
    height: 4rem;
    background-color: #ECEFF1;
    text-align: center;
    padding: 2rem;

    &-section {
      margin-bottom: 0.5rem;
    }

    a, a:link, a:visited, a:hover, a:active {
      text-decoration: none;
      font-weight: 500;
    }

    a, a:link {
      color: #607D8B;
    }

    a:visited {
      color: #455A64;
    }

    a:hover, a:active {
      color: #263238;
      transition-duration: 0.5s;
    }
  }
</style>
