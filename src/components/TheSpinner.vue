<template>
  <div>
    <div class="spinner-container">
      <img class="spinner-image" src="../assets/spinner.png" alt="Loading"/>
    </div>
    <div class="spinner-text">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSpinner',
};
</script>

<style lang="scss" scoped>
@keyframes loading {
  0%   { transform: rotate(0deg);   }
  100% { transform: rotate(360deg); }
}
.spinner {
  &-container {
    margin: 0 auto 0 auto;
    width: 50px;
  }
  &-image {
    animation: loading 1.8s infinite linear;
    width: 50px;
  }
  &-text {
    text-align: center;
    padding: 25px 0;
  }
}
</style>
