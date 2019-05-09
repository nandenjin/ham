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
        <p class="date">
          2019.05.20-06.02
        </p>
        <p class="place">
          筑波大学平砂学生宿舎9号棟
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass">

  @import '~assets/style/media'
  @import '~assets/style/section'

  .section--eyecatch
    width: 100vw
    height: 100vh
    background: url('~assets/img/bg.jpg') center no-repeat
    background-size: cover

    .title-group
      max-width: 1000px
      height: 80vh
      margin: 10vh auto

      +rmq
        height: 350px
        margin: calc((100vh - 350px)/2) auto

      .ham, .title, .date, .place
        display: block
        width: 100%
        margin: 5% auto
        text-indent: -9999px
        background: transparent center left no-repeat
        background-size: contain

      .ham
        height: 10%
        background-image: url('~assets/img/ham-logo.png')

        +rmq
          height: 15%

      .title
        height: 40%
        background-image: url('~assets/img/title.png')

      .date, .place
        height: 6%
        margin-top: 0
        margin-bottom: 2%

        +rmq
          height: 8%

      .date
        background-image: url('~assets/img/date.png')

      .place
        background-image: url('~assets/img/place.png')

</style>
