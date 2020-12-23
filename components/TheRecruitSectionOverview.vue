<template>
  <section class="section section--overview">
    <div class="section__content">
      <h1 class="title">
        <span class="wrap-lock">
          インターネットを通じて、
        </span>
        <span class="wrap-lock">
          廃宿舎に再び灯をともす
        </span>
      </h1>
      <div class="chart">
        <div class="room" />
        <div class="line" />
        <div class="key" />
        <div class="line" />
        <div class="room" />
      </div>
      <div class="dscr">
        <p>廃宿舎となっている平砂宿舎9号棟で展示されるアート作品「住人たち」の一部として、9号棟居室に仮想的に「住んで」くださる方を募集します。</p>
        <p>ご協力いただける方には、居室の電灯を制御する「カギ」をお渡しし、自宅の電灯の点灯・消灯のデータをご提供いただきます。</p>
      </div>
      <div class="finished-guide">
        本企画は終了しました。この作品の展示の様子については、<a href="https://www.nandenjin.com/works/residents?utm_source=ham2019&amp;utm_medium=residents_recruite" target="_blank">作品Webサイト</a>からご覧いただけます。また、<a href="https://www.nandenjin.com/news/200124_making-notes?utm_source=ham2019&amp;utm_medium=residents_recruite" target="_blank">メイキング記事を公開しています。</a>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/media.sass'

  .section--overview
    .section__content
      margin-top: 200px
      text-align: center

      .title
        font-size: 30px

        +rmq
          font-size: 5vw

        .wrap-lock
          display: inline-block

    .chart
      display: grid
      max-width: 600px
      height: 100px
      margin: 100px auto
      grid-template-columns: 60px 1fr 60px 1fr 60px

      .room, .key
        background-position: center
        background-size: contain
        background-repeat: no-repeat

      .room
        background-image: url('~assets/img/icon-room.svg')

      .key
        background-image: url('~assets/img/icon-key.svg')

      .line::after
        content: ''
        display: block
        width: 100%
        height: 0
        margin-top: 50px
        border-top: dashed 5px #fff

    .dscr
      max-width: 900px
      margin: 60px auto
      text-align: left
      font-size: 14px
      line-height: 2em

    .finished-guide
      padding: 20px 30px
      border: 1px solid rgba(255, 255, 255, .5)
      background: rgba(255, 255, 255, .1)
      max-width: 800px
      margin: 60px auto
      text-align: left
      line-height: 1.8em
      font-size: 14px

</style>
