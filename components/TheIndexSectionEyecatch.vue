<template>
  <section class="section section--eyecatch">
    <div class="section__content">
      <div class="title-group">
        <h2 class="ham">
          Hirasuna Art Movement
        </h2>
        <h1 class="title">
          ここにおいて みせる/みる
        </h1>
        <h3 class="info-text">
          2019.05.20-06.02 筑波大学平砂学生宿舎9号棟
        </h3>
      </div>
    </div>
  </section>
</template>

<style lang="sass">

  @import '~assets/style/section'

  .section--eyecatch
    width: 100vw
    height: 100vh
    background: url('~assets/img/bg.jpg') center no-repeat
    background-size: cover

    .title-group
      max-width: 1000px
      margin: 12vh auto

      .ham, .title, .info-text
        width: 100%
        margin: 5vh auto
        text-indent: -9999px
        background: transparent center left no-repeat
        background-size: contain

      .ham
        height: 10vh
        background-image: url('~assets/img/ham-logo.png')

      .title
        height: 40vh
        background-image: url('~assets/img/title.png')

      .info-text
        height: 6vh
        margin-top: 7vh
        margin-bottom: 7vh
        background-image: url('~assets/img/info-text.png')

</style>
