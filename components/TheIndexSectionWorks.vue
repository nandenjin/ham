<template>
  <section class="section section--works">
    <div class="section__content">
      <h2 class="section__title">
        Works
      </h2>
      <ul class="section--works__list">
        <nuxt-link tag="li" to="/works/pattern" class="section--works__list__item" style="grid-column: 1; grid-row: 1">
          <figure>
            <img class="thumbnail" src="~/assets/img/bg.jpg" alt="">
            <figcaption class="caption">
              デザイン・パターン
            </figcaption>
          </figure>
        </nuxt-link>
        <nuxt-link tag="li" to="/works/sympathy" class="section--works__list__item" style="grid-column: 2; grid-row: 1">
          <figure>
            <img class="thumbnail" src="~/assets/img/bg.jpg" alt="">
            <figcaption class="caption">
              Instant Sympathy
            </figcaption>
          </figure>
        </nuxt-link>
        <nuxt-link tag="li" to="/works/residents" class="section--works__list__item" style="grid-column: 1; grid-row: 2">
          <figure>
            <img class="thumbnail" src="~/assets/img/bg.jpg" alt="">
            <figcaption class="caption">
              住人たち
            </figcaption>
          </figure>
        </nuxt-link>
        <nuxt-link tag="li" to="/works/carillon" class="section--works__list__item" style="grid-column: 2; grid-row: 2">
          <figure>
            <img class="thumbnail" src="~/assets/img/bg.jpg" alt="">
            <figcaption class="caption">
              カリヨン
            </figcaption>
          </figure>
        </nuxt-link>
      </ul>
    </div>
  </section>
</template>

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
