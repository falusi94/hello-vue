<template>
  <div class="modal" v-if="modalOpened">
    <div class="modal-inner">
      <div class="modal-header">
        <div class="modal-title">
          {{ title }}
        </div>
        <div class="modal-close-button">
        <BaseButton
          title="x"
          @click="$emit('handleClose')"
        />
        </div>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: [
    'title',
    'modalOpened',
    'handleClose',
  ],
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: fill;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem 1rem;

  &-inner {
    background-color: #FFF;
    max-width: 768px;
    min-height: 50vh;
    max-height: 90vh;
    padding-bottom: 2rem;

    @media screen and (min-width: 768px) {
      margin: 0 auto;
    }
  }
  &-header {
    width: inherit;

    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  &-title {
    float: left;
    padding: 1.2rem 0 0 1.2rem;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  &-close-button {
    float: right;
  }
  &-content {
    padding: 1.5rem 1.2rem;
    overflow: auto;
    max-height: 70vh;
  }
}
</style>
