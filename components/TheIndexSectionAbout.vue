<template>
  <section class="section section--about">
    <div class="section__content">
      <h2 class="section__title">
        Concept
      </h2>
      <h3 class="section--about__concept">
        <span class="break-lock">
          「ここにおいて
        </span>
        <span class="break-lock">
          みせる/みる」
        </span>
      </h3>
      <div class="section--about__text">
        <p>
          使われなくなった学生宿舎を会場に、筑波大生56名が作品を制作・展示する試み。
        </p>
        <p>
          「ここにおいて みせる/みる」は本展示企画のコンセプトであり、作品における「鑑賞されること」の重さを再確認した制作・展示が行われることを狙いとしている。出展者は芸術専門学群生に限らず多岐にわたり、作品においても絵画、インスタレーション、メディアアート、パフォーマンスなど制限なく様々な形態、視点の作品が展示される。
        </p>
        <p class="button-container">
          <a href="https://hirasunaart2019.myportfolio.com/" class="button button--arrow" target="_blank" rel="noopener">
            企画公式サイト
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/media'
  @import '~assets/style/section'

  .section--about
    .section--about__concept
      text-align: center
      font-size: 25px

      +rmq
        font-size: 20px

      .break-lock
        display: inline-block

    .section--about__text
      max-width: 800px
      margin: 40px auto
      font-size: 14px
      line-height: 2.5em

      +rmq
        font-size: 13px

      .button-container
        margin: 30px 0
        text-align: center

</style>
