<template>
  <section class="section section--works">
    <div class="section__content">
      <h2 class="section__title">
        Works
      </h2>
      <ul class="section--works__list">
        <nuxt-link v-for="w in works" :key="w.slug" tag="li" :to="`/works/${w.slug}`" class="section--works__list__item">
          <figure>
            <img class="thumbnail" :src="w.img" alt="">
            <figcaption class="caption">
              {{w.title}}
            </figcaption>
          </figure>
        </nuxt-link>
      </ul>
    </div>
  </section>
</template>

<script>
  import works from '~/assets/works'

  export default {
    data() {
      return {
        works: works
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import '~assets/style/media'
  @import '~assets/style/section'

  .section--works
    .section--works__list
      display: grid
      grid-template-columns: 1fr 1fr
      grid-template-rows: 1fr 1fr
      grid-gap: 60px 100px

      max-width: 800px
      list-style: none
      margin: auto
      padding: 0

      +rmq
        display: block

      .section--works__list__item
        +rmq
          margin: 60px auto
        .thumbnail
          width: 100%
          height: 250px
          object-fit: cover
        .caption
          margin: 15px 0

</style>
