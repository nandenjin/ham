<template>
  <section class="section section--eyecatch">
    <div class="section__content">
      <div class="title-wrap">
        <h1 class="title">
          入居者、募集中。
        </h1>
        <h2 class="subtitle">
          作品展示協力者募集のお知らせ
        </h2>
        <div class="ham-logo">
          Hirasuna Art Movement
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/media.sass'

  .section--eyecatch
    position: relative
    background: url('~assets/img/bg2.jpg') center no-repeat
    background-size: cover

    .title-wrap
      max-width: 800px
      margin: 12vh auto

      +mq
        transform: translateX(-60px)

      +rmq
        margin: 22vh auto 15vh auto

      .title
        height: 40vh
        margin-left: 30px
        text-indent: -9999px
        background: url('~assets/img/recruit-title.png') center no-repeat
        background-size: contain

        +rmq
          height: 30vh

      .subtitle
        margin: 50px 0
        text-align: center
        letter-spacing: .15em

        +rmq
          margin: 30px 0
          font-size: 18px

      .ham-logo
        height: 9vh
        margin-top: 10vh
        text-indent: -9999px
        background: url('~assets/img/ham-logo.png') center no-repeat
        background-size: contain

        +rmq
          height: 8vh
          margin-top: 15vh

</style>
