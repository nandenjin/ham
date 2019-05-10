<template>
  <section class="section section--profile">
    <div class="section__content">
      <h2 class="section__title">
        About Me
      </h2>
      <div class="section--profile__wrap">
        <div class="avatar">
          <img class="avatar__img" src="~/assets/img/profile.jpg" alt="Profile Photo">
        </div>
        <div class="text">
          <h3 class="name">
            稲田和巳 Kazumi Inada
          </h3>
          <p>
            1997年、大阪府生まれ。2017年より筑波大学情報学群 情報メディア創成学類に所属。
          </p>
          <p>
            工学・芸術に興味を持ち、メディアアート・グラフィックデザイン・舞台芸術などの創作活動を行う。技術的・芸術的魅力を共に活かすものづくりに取り組んでいる。
          </p>
          <p class="button-container">
            <a href="https://www.nandenjin.com/ja/" class="button button--arrow" target="_blank" rel="noopener">
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">

  @import '~assets/style/media'
  @import '~assets/style/section'

  .section--profile

    .section--profile__wrap
      display: flex
      max-width: 800px
      margin: 0 auto
      font-size: 14px
      line-height: 2.3em

      .avatar
        flex: 0 0 auto
        display: block
        width: 100px
        height: 100%
        margin: 0 50px
        float: left

        .avatar__img
          width: 100px
          height: 100px

      .text
        flex: 1 1 auto

        .name
          margin-top: 0
          font-size: 1.2em

        .button-container
          margin: 30px 0
          text-align: right

</style>
