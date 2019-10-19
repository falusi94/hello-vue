<template>
  <div class="beer">
    <div class="beer-image">
      <img :src="beer.image_url">
    </div>

    <div class="beer-description">
      <BaseLink
        class="name"
        @click="modalOpened = true">
        {{ beer.name }}
      </BaseLink>
      <div class="tagline">
        {{ beer.tagline }}
      </div>
    </div>

    <BaseModal
      :title="beer.name"
      :modalOpened="modalOpened"
      @handleClose="modalOpened = false"
    >
      {{ beer.description }}
    </BaseModal>

  </div>
</template>

<script>
import BaseModal from './BaseModal.vue';
import BaseLink from './BaseLink.vue';

export default {
  name: 'BeerListItem',
  props: ['beer'],
  data() {
    return {
      modalOpened: false,
    };
  },
  components: {
    BaseModal,
    BaseLink,
  },
};
</script>

<style lang="scss" scoped>
  .beer {
    width: inherit;
    background-color: #EEEEEE;
    padding: 1.5rem;

    &::after {
        content: "";
      display: block;
      clear: both;
    }

    &-description {
      .name {
        font-weight: 600;
        font-size: 1.3rem;
      }

      .tagline {
        font-weight: 70;
      }
    }

    @media screen and (min-width: 768px) {
      &-description { float: left; }
      &-image {
        img {
          max-width: 6rem;
          max-height: 6rem;
        }
        float: right;
      }
    }

    @media screen and (max-width: 768px) {
      &-description { width: inherit; }
      &-image {
        width: inherit;
        text-align: center;
        img { width: 8rem; }
      }
    }
  }
</style>
