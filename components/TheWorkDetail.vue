<template>
  <article class="article">
    <div class="title-wrap">
      <slot name="title" />
    </div>
    <div class="thumbnail-wrap">
      <slot name="thumbnail">
        <img class="thumbnail" src="~/assets/img/no-image.svg" alt="">
      </slot>
    </div>
    <section class="section section--description">
      <div class="section__content">
        <div class="description-text-wrap">
          <slot name="description" />
        </div>
      </div>
    </section>
    <section class="section section--info">
      <div class="section__content">
        <h2 class="section__title">
          Info
        </h2>
        <div class="section--info__info">
          <slot name="info" />
        </div>
      </div>
    </section>
    <section class="section section--other-works">
      <div class="section__content">
        <h2 class="section__title">
          Other Works
        </h2>
        <ul class="works-list">
          <nuxt-link v-for="w in works" :key="w.slug" :to="`./${w.slug}`" tag="li" class="works-list__item">
            <figure>
              <img class="thumbnail" :src="w.img" :alt="w.title">
            </figure>
          </nuxt-link>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
  import works from '~/assets/works'

  export default {
    data() {
      return {
        works: works.filter(w => this.$route.path.indexOf(w.slug) < 0)
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import '~/assets/style/media.sass'
  @import '~/assets/style/section.sass'

  .article

    .title-wrap
      margin: 130px 60px 100px 150px

      +rmq
        margin: 130px 30px 25px 30px

    .title, .title-en
      font-weight: normal
      text-align: center

    .title
      font-size: 22px

    .title-en
      font-size: 18px

    .thumbnail-wrap
      margin: 60px 30px 30px 150px

      +rmq
        margin: 60px 30px 30px

      .thumbnail
        display: block
        width: 100%
        max-width: 1000px
        margin: auto

    .section--description
      font-size: 14px
      line-height: 28px

      .description-text-wrap
        max-width: 800px
        margin: auto

      // 終了済みガイド
      .work-finished-guide
        padding: 15px 25px
        text-align: center
        border: 1px solid rgba(255, 255, 255, 0.5)

    .section--info__info
      max-width: 800px
      margin: 20px auto
      padding: 30px 40px
      background-color: #222
      line-height: 2em

      +rmq
        padding: 20px 30px
        font-size: 14px

      ul
        padding-right: 0

      .info--aside
        font-size: .9em

    .section--other-works
      .works-list
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 40px
        max-width: 1000px
        margin: auto
        padding: 0
        list-style-type: none

        +rmq
          grid-template-columns: 1fr
          grid-template-rows: 1fr 1fr 1fr

        .works-list__item
          flex: 1 1 auto

          .thumbnail
            width: 100%
            height: 200px
            object-fit: cover

</style>
